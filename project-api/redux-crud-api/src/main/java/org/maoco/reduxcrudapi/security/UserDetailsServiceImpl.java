package org.maoco.reduxcrudapi.security;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final Map<String, UserDetails> users = new HashMap<>();

    // Uygulama başladığında örnek kullanıcıları hafızaya ekleyelim
    public UserDetailsServiceImpl() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        users.put("user", new User("user", encoder.encode("password123"),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))));
        users.put("admin", new User("admin", encoder.encode("password123"),
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"))));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (users.containsKey(username)) {
            return users.get(username);
        }
        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}
