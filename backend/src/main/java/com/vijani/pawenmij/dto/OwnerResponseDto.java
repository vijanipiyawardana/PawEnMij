package com.vijani.pawenmij.dto;

import java.util.UUID;

public record OwnerResponseDto(UUID id,
                               String firstName,
                               String lastName,
                               String email,
                               String contact,
                               String houseNumber,
                               String streetName,
                               String postcode,
                               String city) {
}
