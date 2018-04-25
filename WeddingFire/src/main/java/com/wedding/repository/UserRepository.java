package com.wedding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wedding.model.User;

public interface UserRepository extends MongoRepository<User, String> {
	public User findOneByEmailId(String email);

	public User findOneByPassword(String password);

	public User findUserByEmailId();
	

}
 