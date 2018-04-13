package com.wedding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.wedding.model.Catering;

public interface CateringRepository extends MongoRepository<Catering,String>{

}
