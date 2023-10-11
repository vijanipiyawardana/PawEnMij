package com.vijani.pawenmij.service.interfaces;

import com.vijani.pawenmij.dto.request.SignUpRequest;
import com.vijani.pawenmij.dto.request.SigninRequest;
import com.vijani.pawenmij.dto.response.JwtAuthenticationResponse;

public interface AuthenticationServiceInterface {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
