package org.maoco.reduxcrudapi.security;

import org.maoco.reduxcrudapi.exception.UserAlreadyException;
import org.maoco.reduxcrudapi.user.UserEntity;
import org.maoco.reduxcrudapi.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;


    // Uygulama başladığında örnek kullanıcıları hafızaya ekleyelim
    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }

    public UserDetails saveNewUser(AuthRequest signRequest) {
        UserEntity userEntity = UserEntity.builder()
                .username(signRequest.getUsername())
                .password(signRequest.getPassword())
                .roles(signRequest.getRoles())
                .build();


        if (userRepository.findByUsername(userEntity.getUsername()).isEmpty()) {
            return userRepository.save(userEntity);
        }

        throw new UserAlreadyException();
    }
}
