package com.forest.controller.login;

import com.forest.model.User;
import com.forest.service.UserList;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LogInController {


    @RequestMapping(value = {"/login"}, method = RequestMethod.POST)
    public ResponseEntity login(@RequestBody User user) {
        boolean status = UserList.getInstance().isUser(user);
        if (status) {

            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body("Accepted");
        }
        else {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("User not found");
        }

    }
}
