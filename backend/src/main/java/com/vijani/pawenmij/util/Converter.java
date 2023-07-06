package com.vijani.pawenmij.util;

import com.vijani.pawenmij.dto.PetRequestDto;
import com.vijani.pawenmij.dto.PetResponseDto;
import com.vijani.pawenmij.model.Owner;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.model.Photo;
import com.vijani.pawenmij.repository.OwnerRepository;
import com.vijani.pawenmij.repository.PhotoRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Converter {

    private OwnerRepository ownerRepository;
    private PhotoRepository photoRepository;

    public Converter(OwnerRepository ownerRepository, PhotoRepository photoRepository) {
        this.ownerRepository = ownerRepository;
        this.photoRepository = photoRepository;
    }

    public Pet fromPetRequestDto(PetRequestDto dto) {
        // TODO: error handling for get owner when owner is null
        Optional<Owner> owner = ownerRepository.findById(dto.ownerId());
        return new Pet(
                dto.type(),
                dto.breed(),
                dto.gender(),
                dto.status(),
                dto.name(),
                dto.age(),
                dto.vaccinated(),
                dto.chipped(),
                dto.neutered(),
                owner.get()
        );
    }

    public List<PetResponseDto> toPetResponseDtoList(List<Pet> pets) {
        List<PetResponseDto> petResponses = pets.stream().map(pet -> toPetResponseDto(pet)).toList();
        return petResponses;
    }

    public PetResponseDto toPetResponseDto(Pet pet) {

        String coverPhoto = "";

        List<Photo> allPhotos = photoRepository.findByPetId(pet.getId());
        if (allPhotos.size() > 0) {
            Optional<String> coverPhotoOptional = allPhotos.stream()
                    .filter(photo -> photo.getMain())
                    .map(photo -> photo.getFileName())
                    .findFirst();

            if (coverPhotoOptional.isPresent()) {
                coverPhoto = coverPhotoOptional.get();
            }
        }

        List<String> allPhotoNames = allPhotos.stream()
                .map(photo -> photo.getFileName())
                .toList();

        return new PetResponseDto(
                pet.getId(),
                pet.getType(),
                pet.getBreed(),
                pet.getGender(),
                pet.getStatus(),
                pet.getName(),
                pet.getAge(),
                pet.getVaccinated(),
                pet.getChipped(),
                pet.getNeutered(),
                pet.getOwner().getId(),
                pet.getOwner().getName(),
                pet.getOwner().getEmail(),
                pet.getOwner().getContact(),
                pet.getOwner().getHouseNumber(),
                pet.getOwner().getStreetName(),
                pet.getOwner().getPostcode(),
                pet.getOwner().getCity(),
                coverPhoto,
                allPhotoNames
        );
    }


}
