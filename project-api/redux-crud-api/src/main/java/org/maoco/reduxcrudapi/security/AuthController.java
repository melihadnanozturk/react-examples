package org.maoco.reduxcrudapi.security;

import lombok.RequiredArgsConstructor;
import org.maoco.reduxcrudapi.user.UserEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserDetailsServiceImpl userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody AuthRequest loginRequest) {
        AuthResponse response = this.login(loginRequest.getUsername(), loginRequest.getPassword());

        return ResponseEntity.ok(response);
    }

    @PostMapping("/sign")
    public ResponseEntity<?> signIn(@RequestBody AuthRequest signRequest) {
        UserEntity userEntity = UserEntity.builder()
                .username(signRequest.getUsername())
                .password(passwordEncoder.encode(signRequest.getPassword()))
                .roles(List.of(signRequest.getRole()))
                .build();

        UserDetails userDetails = userDetailsService.saveNewUser(userEntity);
        AuthResponse response = login(userDetails.getUsername(), signRequest.getPassword());

        return ResponseEntity.ok(response);
    }

    private AuthResponse login(String username, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new AuthResponse(jwt, "JWT", userDetails.getUsername(), roles);
    }
}
