package com.wedding.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.wedding.model.Venue;

public interface VenueRepository extends MongoRepository<Venue,String>{
public List<Venue> findByVenueNameLike(String name);
public List<Venue> findByCityLike(String city);
}
