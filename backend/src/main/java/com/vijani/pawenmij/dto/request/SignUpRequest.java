package com.vijani.pawenmij.dto.request;

public record SignUpRequest(
        String firstName,
        String lastName,
        String email,
        String password
) {
}
