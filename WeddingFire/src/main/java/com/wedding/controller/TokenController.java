package com.wedding.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.wedding.security.JwtAuthenticationProvider;


@RestController
@RequestMapping("/wedding/login/token")
public class TokenController {

	

	public TokenController() {
	}

	// to send role in the database
	@RequestMapping(value = "/role", method = RequestMethod.GET)
	public ResponseEntity<Map<String, String>> addRole(@RequestHeader String Authorization) {
		Map<String, String> response = new HashMap<String, String>();
		String s= JwtAuthenticationProvider.type;
			response.put("type",s);
			return ResponseEntity.accepted().body(response);
		}
	

	

}
