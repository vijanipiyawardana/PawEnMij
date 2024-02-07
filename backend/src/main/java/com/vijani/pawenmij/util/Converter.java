package com.vijani.pawenmij.util;

import com.vijani.pawenmij.dto.response.MyPetResponseDto;
import com.vijani.pawenmij.dto.response.OwnerResponseDto;
import com.vijani.pawenmij.dto.request.PetRequestDto;
import com.vijani.pawenmij.dto.response.PetResponseDto;
import com.vijani.pawenmij.model.User;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.model.Photo;
import com.vijani.pawenmij.repository.UserRepository;
import com.vijani.pawenmij.repository.PhotoRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class Converter {

    private UserRepository ownerRepository;
    private PhotoRepository photoRepository;

    public Converter(UserRepository ownerRepository, PhotoRepository photoRepository) {
        this.ownerRepository = ownerRepository;
        this.photoRepository = photoRepository;
    }

    public Pet fromPetRequestDto(PetRequestDto dto) {
        // TODO: error handling for get owner when owner is null
        Optional<User> owner = ownerRepository.findById(dto.ownerId());
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
                dto.description(),
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
                pet.getDescription(),
                pet.getOwner().getId(),
                pet.getOwner().getFirstName(),
                pet.getOwner().getLastName(),
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

    public MyPetResponseDto toMyPetResponseDto(Pet myPet) {

        String coverPhoto = "";

        List<Photo> allPhotos = photoRepository.findByPetId(myPet.getId());
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

        return new MyPetResponseDto(
                myPet.getId(),
                myPet.getType(),
                myPet.getBreed(),
                myPet.getGender(),
                myPet.getStatus(),
                myPet.getName(),
                myPet.getAge(),
                myPet.getVaccinated(),
                myPet.getChipped(),
                myPet.getNeutered(),
                myPet.getDescription(),
                coverPhoto,
                allPhotoNames
        );
    }

    public List<MyPetResponseDto> toMyPetResponseDtoList(List<Pet> myPets) {
        List<MyPetResponseDto> myPetResponses = myPets.stream().map(myPet -> toMyPetResponseDto(myPet)).toList();
        return myPetResponses;
    }

    public OwnerResponseDto toOwnerResponseDto(User owner) {
        return new OwnerResponseDto(
                owner.getId(),
                owner.getFirstName(),
                owner.getLastName(),
                owner.getEmail(),
                owner.getContact(),
                owner.getHouseNumber(),
                owner.getStreetName(),
                owner.getPostcode(),
                owner.getCity()
        );
    }
}
