package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.MyPetResponseDto;
import com.vijani.pawenmij.dto.OwnerResponseDto;
import com.vijani.pawenmij.model.User;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.UserRepository;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.util.Converter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class OwnerService {

    private Converter converter;
    private UserRepository ownerRepository;
    private PetRepository petRepository;

    public OwnerService(Converter converter, UserRepository ownerRepository, PetRepository petRepository) {
        this.converter = converter;
        this.ownerRepository = ownerRepository;
        this.petRepository = petRepository;
    }

    public List<MyPetResponseDto> getPetsByOwnerId(UUID ownerId) {
        List<Pet> myPets = petRepository.findAllByOwnerId(ownerId);
        return converter.toMyPetResponseDtoList(myPets);
    }

    public OwnerResponseDto getOwnerById(UUID ownerId) {
        Optional<User> owner = ownerRepository.findById(ownerId);
        return converter.toOwnerResponseDto(owner.get());
    }
}
