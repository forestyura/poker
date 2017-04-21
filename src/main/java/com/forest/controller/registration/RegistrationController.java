package com.forest.controller.registration;

import com.forest.model.User;
import com.forest.service.UserList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.StandardPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {

    @Autowired
    StandardPasswordEncoder passwordEncoder;

    @RequestMapping(value = {"/registration"}, method = RequestMethod.POST)
    public void registration(@RequestBody User user) {
        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                ));
        UserList.getInstance().addUser(user);
    }
}
