package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.MyPetResponseDto;
import com.vijani.pawenmij.dto.OwnerResponseDto;
import com.vijani.pawenmij.model.Owner;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.OwnerRepository;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.util.Converter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OwnerService {

    private Converter converter;
    private OwnerRepository ownerRepository;
    private PetRepository petRepository;

    public OwnerService(Converter converter, OwnerRepository ownerRepository, PetRepository petRepository) {
        this.converter = converter;
        this.ownerRepository = ownerRepository;
        this.petRepository = petRepository;
    }

    public List<MyPetResponseDto> getPetsByOwnerId(UUID ownerId) {
        List<Pet> myPets = petRepository.findAllByOwnerId(ownerId);
        return converter.toMyPetResponseDtoList(myPets);
    }

    public OwnerResponseDto getOwnerById(UUID ownerId) {
        Optional<Owner> owner = ownerRepository.findById(ownerId);
        return converter.toOwnerResponseDto(owner.get());
    }
}
