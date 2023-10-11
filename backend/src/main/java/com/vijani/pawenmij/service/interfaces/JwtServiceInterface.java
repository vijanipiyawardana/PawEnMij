package com.vijani.pawenmij.service.interfaces;

import org.springframework.security.core.userdetails.UserDetails;

public interface JwtServiceInterface {
    String extractUserName(String token);

    String generateToken(UserDetails userDetails);

    boolean isTokenValid(String token, UserDetails userDetails);
}
