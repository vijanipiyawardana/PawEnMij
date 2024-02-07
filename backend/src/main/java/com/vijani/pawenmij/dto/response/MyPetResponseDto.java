package com.vijani.pawenmij.dto.response;

import java.util.List;
import java.util.UUID;

public record MyPetResponseDto(UUID id,
                               String type,
                               String breed,
                               String gender,
                               String status,
                               String name,
                               Double age,
                               Boolean vaccinated,
                               Boolean chipped,
                               Boolean neutered,
                               String description,
                               String coverPhoto,
                               List<String> allPhotos) {

}
