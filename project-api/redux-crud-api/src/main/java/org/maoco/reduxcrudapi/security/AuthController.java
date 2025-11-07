package org.maoco.reduxcrudapi.security;

import lombok.RequiredArgsConstructor;
import org.maoco.reduxcrudapi.user.UserEntity;
import org.maoco.reduxcrudapi.user.UserResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

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

        ResponseCookie responseCookie = this.createResponseCookie(response.getToken());

        return ResponseEntity
                .ok().header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(response);
    }

    @PostMapping("/sign")
    public ResponseEntity<?> signIn(@RequestBody AuthRequest signRequest) {
        signRequest.setPassword(passwordEncoder.encode(signRequest.getPassword()));
        UserDetails userDetails = userDetailsService.saveNewUser(signRequest);
        AuthResponse response = login(userDetails.getUsername(), signRequest.getPassword());

        ResponseCookie responseCookie = this.createResponseCookie(response.getToken());

        return ResponseEntity
                .ok().header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(response);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getMe(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(401).body("No active session");
        }
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        UserEntity userEntity = (UserEntity) userDetailsService.loadUserByUsername(userDetails.getUsername());
        UserResponse response = new UserResponse(userEntity.getUsername(), userEntity.getRoles());

        return ResponseEntity.ok(response);
    }

    private ResponseCookie createResponseCookie(String jwtToken) {
        return ResponseCookie.from("jwt-token", jwtToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(24 * 60 * 60)
                .sameSite("Strict")
                .build();
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
