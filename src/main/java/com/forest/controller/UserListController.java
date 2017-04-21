package com.forest.controller;

import com.forest.model.User;
import com.forest.service.UserList;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

@Controller
public class UserListController {

    @RequestMapping(value = {"/user-list"})
    @ResponseBody
    public ArrayList<User> getUserList () {
        return UserList.getInstance().getUserList();
    }
}
