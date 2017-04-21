package com.forest.service;

import com.forest.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

import java.util.ArrayList;
import java.util.Optional;

public class UserList {
    private static UserList instance;
    private ArrayList<User> users = new ArrayList<>();
    @Autowired
    StandardPasswordEncoder passwordEncoder;

    public static synchronized UserList getInstance() {
        if (instance == null) {
            instance = new UserList();
        }
        return instance;
    }

    public void addUser (User user) {
        users.add(user);
    }

    public ArrayList<User> getUserList() {
        return users;
    }

    public boolean isUser(User checkUser) {
        boolean userStatus = false;
        for(User user: users) {
            if (user.getUsername().equals(checkUser.getUsername())) {
                userStatus = true;
            }
        }
        return userStatus;
    }

    public Optional<User> getUserByUsername (String username) {
        for (User user: users){
            if (user.getUsername()
                    .equals(username)) {
                return Optional.of(user);
            }
        }
        return Optional.empty();
    }
}
