package com.vijani.pawenmij.service;

import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.model.Photo;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.repository.PhotoRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.UUID;

@Service
public class PhotoService {

    private static final String PHOTO_PATH = "/home/vijani/Documents/projects/data/pawenmij/photos/";

    private PhotoRepository photoRepository;
    private PetRepository petRepository;

    public PhotoService(PhotoRepository photoRepository, PetRepository petRepository) {
        this.photoRepository = photoRepository;
        this.petRepository = petRepository;
    }

    public String addPhoto(UUID petId, MultipartFile photo) {
        try {

            int photoCount = photoRepository.countByPetId(petId);
            String fileName = petId + "_" + (photoCount + 1);

            Files.write(Path.of(PHOTO_PATH + fileName), photo.getBytes());

            Optional<Pet> pet = petRepository.findById(petId);
            Integer count = photoRepository.countByPetId(petId);
            Boolean mainPhoto = count == 0;

            photoRepository.save(new Photo(fileName, mainPhoto, pet.get()));

        } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage());
        }
        return photo.getOriginalFilename();
    }

    public byte[] getPhoto(String fileName) throws Exception{
        return Files.readAllBytes(Path.of(PHOTO_PATH + fileName));
    }

    public void deletePhoto(String fileName) {
        Photo photo = photoRepository.findByFileName(fileName);
        photoRepository.delete(photo);
        deletePhotoFromFolder(fileName);
    }

    public void deletePhotoFromFolder(String namePart) {
        Path directory = Paths.get(PHOTO_PATH);
        if (!Files.exists(directory) || !Files.isDirectory(directory)) {
            System.out.println("Invalid directory path.");
            return;
        }
        try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(directory)) {
            for (Path file : directoryStream) {
                if (Files.isRegularFile(file) && file.getFileName().toString().contains(namePart)) {
                    Files.delete(file);
                    System.out.println("Deleted: " + file);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
