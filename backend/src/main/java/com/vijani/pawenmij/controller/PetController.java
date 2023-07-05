package com.vijani.pawenmij.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    @GetMapping
    public ResponseEntity<String> getPets() {
        return ResponseEntity.ok("Paw En Mij");
    }
}
