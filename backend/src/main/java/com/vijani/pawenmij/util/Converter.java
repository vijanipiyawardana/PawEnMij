package com.vijani.pawenmij.util;

import com.vijani.pawenmij.dto.PetRequestDto;
import com.vijani.pawenmij.dto.PetResponseDto;
import com.vijani.pawenmij.model.Owner;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.OwnerRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class Converter {

    private OwnerRepository ownerRepository;

    public Converter(OwnerRepository ownerRepository) {
        this.ownerRepository = ownerRepository;
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
                pet.getOwner().getCity()
        );
    }


}
