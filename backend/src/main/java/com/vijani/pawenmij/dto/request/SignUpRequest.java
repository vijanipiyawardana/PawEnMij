package com.vijani.pawenmij.dto.request;

public record SignUpRequest(
        String firstName,
        String lastName,
        String contact,
        String email,
        String password
) {
}
