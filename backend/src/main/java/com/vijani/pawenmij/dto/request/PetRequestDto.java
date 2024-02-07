package com.vijani.pawenmij.dto.request;

import java.util.UUID;

public record PetRequestDto(String type,
                            String breed,
                            String gender,
                            String status,
                            String name,
                            Double age,
                            Boolean vaccinated,
                            Boolean chipped,
                            Boolean neutered,
                            String description,
                            UUID ownerId) {
}
