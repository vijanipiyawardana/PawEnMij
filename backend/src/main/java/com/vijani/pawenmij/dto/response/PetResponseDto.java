package com.vijani.pawenmij.dto.response;

import java.util.List;
import java.util.UUID;

public record PetResponseDto(UUID id,
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
                             UUID ownerId,
                             String ownerFirstName,
                             String ownerLastName,
                             String ownerEmail,
                             String ownerContact,
                             String ownerHouseNumber,
                             String ownerStreetName,
                             String ownerPostcode,
                             String ownerCity,
                             String coverPhoto,
                             List<String> allPhotos) {
}
