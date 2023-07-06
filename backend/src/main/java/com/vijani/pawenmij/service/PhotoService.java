package com.vijani.pawenmij.service;

import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.model.Photo;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.repository.PhotoRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;
import java.util.UUID;

@Service
public class PhotoService {

    private static final String PHOTO_PATH = "/tmp/pawenmij/photos/";

    private PhotoRepository photoRepository;
    private PetRepository petRepository;

    public PhotoService(PhotoRepository photoRepository, PetRepository petRepository) {
        this.photoRepository = photoRepository;
        this.petRepository = petRepository;
    }

    public String addPhoto(UUID petId, MultipartFile photo) {
        try {

            Files.write(Path.of(PHOTO_PATH + photo.getOriginalFilename()), photo.getBytes());

            Optional<Pet> pet = petRepository.findById(petId);
            Integer count = photoRepository.countByPetId(petId);
            Boolean mainPhoto = count == 0;

            photoRepository.save(new Photo(photo.getOriginalFilename(), mainPhoto, pet.get()));

        } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage());
        }
        return photo.getOriginalFilename();
    }

    public byte[] getPhoto(String fileName) throws Exception{
        return Files.readAllBytes(Path.of(PHOTO_PATH + fileName));
    }
}
