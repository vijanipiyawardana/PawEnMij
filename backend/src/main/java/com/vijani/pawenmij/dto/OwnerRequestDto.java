package com.vijani.pawenmij.dto;

public record OwnerRequestDto(String name,
                              String email,
                              String contact,
                              String houseNumber,
                              String streetName,
                              String postcode,
                              String city) {
}
