package com.wedding.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import com.wedding.model.JwtUserDetails;
import com.wedding.model.User;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class JwtSuccessHandler implements AuthenticationSuccessHandler {
	JwtUserDetails jwtUserDetails;
	User user;
	JwtValidator validator;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
			Authentication authentication) throws IOException, ServletException {
//		String token = jwtUserDetails.getToken();
//         user= validator.validate(token);
//		
//		
//		Map<String, String> tokenMap = new HashMap<String, String>();
//		tokenMap.put("type", user.getRole());
//		httpServletResponse.getWriter().print(tokenMap);

		System.out.println("Successfully Authentication");
	}

}
