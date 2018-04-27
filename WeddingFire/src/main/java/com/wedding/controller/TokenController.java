package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.User;
import com.wedding.repository.UserRepository;
import com.wedding.security.JwtGenerator;

@RestController
@RequestMapping("/login/token")
public class TokenController {

	private JwtGenerator jwtGenerator;
	private UserRepository userRepository;

	public TokenController(JwtGenerator jwtGenerator, UserRepository userRepository) {
		this.jwtGenerator = jwtGenerator;
		this.userRepository = userRepository;
	}

	@PostMapping
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
			String token = jwtGenerator.generate(user);
			response.put("token", token);
			return ResponseEntity.ok().body(response);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
}
