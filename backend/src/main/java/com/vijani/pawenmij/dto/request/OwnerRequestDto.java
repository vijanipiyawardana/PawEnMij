package com.vijani.pawenmij.dto.request;

public record OwnerRequestDto(String name,
                              String email,
                              String contact,
                              String houseNumber,
                              String streetName,
                              String postcode,
                              String city) {
}
