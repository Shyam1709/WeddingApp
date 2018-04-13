package com.wedding.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wedding.model.EnquiryForm;

public interface EnquiryFormRepository extends MongoRepository<EnquiryForm,String> {

}
