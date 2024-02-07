package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.request.PetRequestDto;
import com.vijani.pawenmij.dto.response.PetResponseDto;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.repository.PhotoRepository;
import com.vijani.pawenmij.util.Converter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PetService {

    private Converter converter;
    private PetRepository petRepository;
    private PhotoRepository photoRepository;

    private PhotoService photoService;

    public PetService(Converter converter, PetRepository petRepository,
                      PhotoRepository photoRepository, PhotoService photoService) {
        this.converter = converter;
        this.petRepository = petRepository;
        this.photoRepository = photoRepository;
        this.photoService = photoService;
    }

    public UUID addPet(PetRequestDto dto) {
        Pet pet = converter.fromPetRequestDto(dto);
        pet = petRepository.save(pet);
        return pet.getId();
    }

    public List<PetResponseDto> getPets() {
        List<Pet> pets = petRepository.findAll();
        return converter.toPetResponseDtoList(pets);
    }

    public PetResponseDto getPetById(UUID id) {
        Optional<Pet> pet = petRepository.findById(id);
        return converter.toPetResponseDto(pet.get());
    }

    public void deletePet(UUID id) {
        petRepository.findById(id).ifPresent(pet -> {
            photoRepository.findByPetId(id).forEach(photo -> {
                photoRepository.delete(photo);
            });
            photoService.deletePhotoFromFolder(id.toString());
            petRepository.delete(pet);
        });
    }
}
