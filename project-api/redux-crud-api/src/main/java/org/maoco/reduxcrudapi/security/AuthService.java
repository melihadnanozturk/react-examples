package org.maoco.reduxcrudapi.security;

import org.maoco.reduxcrudapi.user.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public String generateToken(Map<String, String> body) {
        var user = userRepository.findByUsername(body.get("username")).orElse(null);
        if (user == null || !body.get("password").equals(user.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            return null;
        }

        return jwtUtil.generateToken(user);

    }
}
