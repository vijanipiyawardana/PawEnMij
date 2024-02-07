package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.request.SignUpRequest;
import com.vijani.pawenmij.dto.request.SigninRequest;
import com.vijani.pawenmij.dto.response.JwtAuthenticationResponse;
import com.vijani.pawenmij.enums.Role;
import com.vijani.pawenmij.model.User;
import com.vijani.pawenmij.repository.UserRepository;
import com.vijani.pawenmij.service.interfaces.AuthenticationServiceInterface;
import com.vijani.pawenmij.service.interfaces.JwtServiceInterface;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements AuthenticationServiceInterface {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtServiceInterface jwtServiceInterface;
    private final AuthenticationManager authenticationManager;

    @Override
    public JwtAuthenticationResponse signup(SignUpRequest request) {
        User user = User.builder()
                .firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(Role.ADOPTER)
                .build();
        userRepository.save(user);
        String jwt = jwtServiceInterface.generateToken(user);
        return new JwtAuthenticationResponse(jwt);
    }

    @Override
    public JwtAuthenticationResponse signin(SigninRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.email(),
                        request.password()
                )
        );
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password."));
        String jwt = jwtServiceInterface.generateToken(user);
        return new JwtAuthenticationResponse(jwt);
    }
}
