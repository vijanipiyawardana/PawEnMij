package com.vijani.pawenmij.repository;

import com.vijani.pawenmij.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PhotoRepository extends JpaRepository<Photo, UUID> {

    Integer countByPetId(UUID id);

    List<Photo> findByPetId(UUID id);
}
