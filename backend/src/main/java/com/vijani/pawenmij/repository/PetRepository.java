package com.vijani.pawenmij.repository;

import com.vijani.pawenmij.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PetRepository extends JpaRepository<Pet, UUID> {

    List<Pet> findAllByOwnerId(UUID ownerId);
}
