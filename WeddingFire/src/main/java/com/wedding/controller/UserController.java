package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.User;
import com.wedding.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {

	UserRepository userRepository;

	public UserController(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	// to save userdetails in the database via registration
	@RequestMapping(value = "/register", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody User user) {
		Map<String, String> response = new HashMap<String, String>();
			System.out.print(user);
		userRepository.save(user);
			response.put("ok", "Registered Succesfuly");
			return ResponseEntity.accepted().body(response);

	}

	

}
