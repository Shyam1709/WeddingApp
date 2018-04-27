package com.wedding.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class JwtUserDetails implements UserDetails {

    private String emailId;
    private String token;
    private String userName;
    private Collection<? extends GrantedAuthority> authorities;


    public JwtUserDetails(String emailId, String userName, String token, List<GrantedAuthority> grantedAuthorities) {

        this.emailId = emailId;
        this.userName = userName;
        this.token= token;
        this.authorities = grantedAuthorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

  

	public String getUserName() {
		return userName;
	}

	public String getEmailId() {
		return emailId;
	}

	public String getToken() {
        return token;
    }
	



}
