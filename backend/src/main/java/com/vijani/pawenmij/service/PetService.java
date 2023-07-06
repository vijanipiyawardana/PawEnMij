package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.PetRequestDto;
import com.vijani.pawenmij.dto.PetResponseDto;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.util.Converter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PetService {

    private Converter converter;
    private PetRepository repository;

    public PetService(Converter converter, PetRepository repository) {
        this.converter = converter;
        this.repository = repository;
    }

    public UUID addPet(PetRequestDto dto) {
        Pet pet = converter.fromPetRequestDto(dto);
        pet = repository.save(pet);
        return pet.getId();
    }

    public List<PetResponseDto> getPets() {
        List<Pet> pets = repository.findAll();
        return converter.toPetResponseDtoList(pets);
    }

    public PetResponseDto getPetById(UUID id) {
        Optional<Pet> pet = repository.findById(id);
        return converter.toPetResponseDto(pet.get());
    }
}
