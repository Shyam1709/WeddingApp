package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.User;
import com.wedding.repository.UserRepository;
import com.wedding.security.JwtAuthenticationProvider;
import com.wedding.security.JwtGenerator;

@RestController
@RequestMapping("/user")
public class UserController {

	UserRepository userRepository;
	private JwtGenerator jwtGenerator;
	

	public UserController(UserRepository userRepository, JwtGenerator jwtGenerator) {
		this.userRepository = userRepository;
		this.jwtGenerator = jwtGenerator;
		
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
	
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> generate(@RequestBody User user) {
		Map<String, String> response = new HashMap<String, String>();
		String email = String.valueOf(user.getEmailId());
		if (userRepository.findOneByEmailId(email) == null) {
			response.put("error", "Please enter valid emailId");
			return ResponseEntity.badRequest().body(response);
		}
		User authenticateUser = userRepository.findOneByEmailId(email);

		if (!authenticateUser.getPassword().contentEquals(user.getPassword())) {
			response.put("error", "Please enter valid password");
			return ResponseEntity.badRequest().body(response);
		}
		if (authenticateUser != null && (authenticateUser.getPassword().contentEquals(user.getPassword()))) {
			user.setRole(authenticateUser.getRole());
			user.setUserName(authenticateUser.getUserName());
			String type= JwtAuthenticationProvider.type;
			String token = jwtGenerator.generate(user);
			response.put("token", token);
			response.put("role", type);
			return ResponseEntity.ok().body(response);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

	

}
