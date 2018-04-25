package com.wedding.controller;

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
	public ResponseEntity<String> generate(@RequestBody User user) {
		String email = String.valueOf(user.getEmailId());
		if (userRepository.findOneByEmailId(email) == null) {
		return ResponseEntity.badRequest().body("Please enter valid emailId");
		}
		User authenticateUser = userRepository.findOneByEmailId(email);
		if (userRepository.findOneByEmailId(email) == null
				&& !authenticateUser.getPassword().contentEquals(user.getPassword())) {
			return ResponseEntity.badRequest().body("Please enter emailId and password");
		} else if (!authenticateUser.getPassword().contentEquals(user.getPassword())) {
			return ResponseEntity.badRequest().body("Please enter valid password");
		} else {
			String token= jwtGenerator.generate(user);
	return ResponseEntity.ok().body(user.toString(),token);
		}
	}
}
