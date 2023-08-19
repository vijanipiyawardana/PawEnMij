package com.vijani.pawenmij.controller;

import com.vijani.pawenmij.dto.MyPetResponseDto;
import com.vijani.pawenmij.service.OwnerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/owner")
public class OwnerController {

    private OwnerService service;

    public OwnerController(OwnerService service) {
        this.service = service;
    }

    @GetMapping("/{id}/pets")
    public ResponseEntity<List<MyPetResponseDto>> getPetsByOwnerId(@PathVariable("id") UUID id) {
        return ResponseEntity.ok(service.getPetsByOwnerId(id));
    }
}
