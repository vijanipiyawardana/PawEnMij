package com.vijani.pawenmij.service;

import com.vijani.pawenmij.dto.response.MyPetResponseDto;
import com.vijani.pawenmij.dto.response.OwnerResponseDto;
import com.vijani.pawenmij.model.User;
import com.vijani.pawenmij.model.Pet;
import com.vijani.pawenmij.repository.UserRepository;
import com.vijani.pawenmij.repository.PetRepository;
import com.vijani.pawenmij.service.interfaces.UserServiceInterface;
import com.vijani.pawenmij.util.Converter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService implements UserServiceInterface {

    private final Converter converter;
    private final UserRepository userRepository;
    private final PetRepository petRepository;

    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                return userRepository.findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }

    public List<MyPetResponseDto> getPetsByOwnerId(UUID ownerId) {
        List<Pet> myPets = petRepository.findAllByOwnerId(ownerId);
        return converter.toMyPetResponseDtoList(myPets);
    }

    public OwnerResponseDto getUserById(UUID userId) {
        Optional<User> user = userRepository.findById(userId);
        return converter.toOwnerResponseDto(user.get());
    }

}
