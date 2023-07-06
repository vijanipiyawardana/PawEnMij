package com.vijani.pawenmij.dto;

import java.util.UUID;

public record OwnerResponseDto(UUID id,
                               String name,
                               String email,
                               String contact,
                               String houseNumber,
                               String streetName,
                               String postcode,
                               String city) {
}
