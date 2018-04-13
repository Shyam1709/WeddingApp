package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
	public ResponseEntity<Map<String, String>> add(@Valid @RequestBody User user, BindingResult result) {
		Map<String, String> response = new HashMap<String, String>();
		if (result.hasErrors()) {
			result.getFieldErrors().stream()
					.forEach(err -> System.out.println(err.getField() + ": " + err.getDefaultMessage()));
			response.put("error", String.valueOf(result));
			return ResponseEntity.badRequest().body(response);
		} else {
			userRepository.save(user);
			response.put("ok", "Registered Succesfuly");
			return ResponseEntity.accepted().body(response);
		}

	}

	// to authenticate user by validating login credentials
	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
		Map<String, String> response = new HashMap<String, String>();
		String email = String.valueOf(user.getEmailId());
		String password = String.valueOf(user.getPassword());
		if ((userRepository.findOneByEmailId(email) != null) && (userRepository.findOneByPassword(password) != null)) {

			String role = String.valueOf(userRepository.findUserByEmailId());
			response.put("ok", role);
			return ResponseEntity.accepted().body(response);
		} else if ((userRepository.findOneByEmailId(email) == null)
				&& (userRepository.findOneByPassword(password) == null)) {
			response.put("error_both", "LogIn Failed! Please Enter valid Email and password");
			return ResponseEntity.badRequest().body(response);
		}

		else if (userRepository.findOneByEmailId(email) == null) {
			response.put("error_emailId", "LogIn Failed! Please Enter valid Email");
			return ResponseEntity.badRequest().body(response);
		} else {
			response.put("error_password", "LogIn Failed! Please Enter valid Password");
			return ResponseEntity.badRequest().body(response);
		}

	}
}
