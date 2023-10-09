package com.vijani.pawenmij.repository;

import com.vijani.pawenmij.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OwnerRepository extends JpaRepository<User, UUID> {

}
