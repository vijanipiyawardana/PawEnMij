package com.vijani.pawenmij.controller;

import com.vijani.pawenmij.dto.request.PetRequestDto;
import com.vijani.pawenmij.dto.response.PetResponseDto;
import com.vijani.pawenmij.service.PetService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/pets")
public class PetController {

    private PetService service;

    public PetController(PetService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<PetResponseDto>> getPets() {
        return ResponseEntity.ok(service.getPets());
    }

    @PostMapping
    public ResponseEntity<Void> addPet(@RequestBody PetRequestDto dto, HttpServletRequest req) {
        UUID petId = service.addPet(dto);
        URI location = URI.create(req.getRequestURI() + "/" + petId.toString());
        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PetResponseDto> getPetById(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(service.getPetById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePet(@PathVariable("id") UUID id) {
        service.deletePet(id);
        return ResponseEntity.ok("Pet deleted successfully");
    }

}
