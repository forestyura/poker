package com.forest.service;

import com.forest.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = UserList.getInstance().getUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(
                String.format("User with email=%s was not found", username)));
        Set<GrantedAuthority> roles = new HashSet();
        roles.add(new SimpleGrantedAuthority("User"));

        UserDetails userDetails = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), roles);

        return userDetails;
    }
}
