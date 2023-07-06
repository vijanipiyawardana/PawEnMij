package com.vijani.pawenmij.controller;

import com.vijani.pawenmij.service.PhotoService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.util.UUID;

@RestController
@RequestMapping("/api/pets")
public class PhotoController {

    private PhotoService service;

    public PhotoController(PhotoService service) {
        this.service = service;
    }

    @PostMapping("/{petId}/photo")
    public ResponseEntity<Void> addPhoto(@PathVariable UUID petId, @RequestBody MultipartFile photo, HttpServletRequest req) {
        // TODO: return location
        service.addPhoto(petId, photo);
        return ResponseEntity.ok().build();
    }

    @GetMapping(value = "/photo/{fileName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> getPhoto(@PathVariable String fileName) throws Exception{
        return ResponseEntity.ok(service.getPhoto(fileName));
    }
}
