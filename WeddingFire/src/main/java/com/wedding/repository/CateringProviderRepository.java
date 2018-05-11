package com.wedding.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wedding.model.CateringProvider;
import com.wedding.model.Venue;

public interface CateringProviderRepository extends MongoRepository<CateringProvider,String> {
	
	public List<CateringProvider> findBycateringProviderLike(String cateringProvider);
	public List<CateringProvider> findByCityLike(String city);
	public List<CateringProvider> findOneById(String id);
	
}
