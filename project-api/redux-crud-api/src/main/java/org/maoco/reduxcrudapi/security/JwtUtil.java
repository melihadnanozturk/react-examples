package org.maoco.reduxcrudapi.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.maoco.reduxcrudapi.user.UserEntity;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    @Value("${security.jwt.secret-key}")
    private String secret_key;

    public String generateToken(UserEntity user) {

        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1 saat
                .signWith(SignatureAlgorithm.HS256, secret_key)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parser().setSigningKey(secret_key)
                .parseClaimsJws(token).getBody().getSubject();
    }
}
