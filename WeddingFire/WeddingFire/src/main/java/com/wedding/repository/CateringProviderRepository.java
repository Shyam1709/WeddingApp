package com.wedding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wedding.model.CateringProvider;

public interface CateringProviderRepository extends MongoRepository<CateringProvider,String> {

}
