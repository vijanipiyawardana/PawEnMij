package com.vijani.pawenmij.repository;

import com.vijani.pawenmij.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    // Since email is unique, we'll find users by email
    Optional<User> findByEmail(String email);
}
