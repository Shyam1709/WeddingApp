package com.wedding.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wedding.model.CateringProvider;
import com.wedding.repository.CateringProviderRepository;

@RestController
@RequestMapping("/catering")
public class CateringProviderController {

	CateringProviderRepository cateringproviderRepository;

	public CateringProviderController(CateringProviderRepository cateringproviderRepository) {
		this.cateringproviderRepository = cateringproviderRepository;

	}

	// to save catering provider details in the database
	@RequestMapping(value = "/service", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody CateringProvider cateringProvider) {
		Map<String, String> response = new HashMap<String, String>();
		cateringproviderRepository.save(cateringProvider);
		response.put("ok", "catering provider added successfully");
		return ResponseEntity.accepted().body(response);
	}
	
	// to get catering provider details from database 
	@RequestMapping(value = "/cateringProviders/getdetails", method = RequestMethod.GET)
	public List<CateringProvider> getAll() {
		return cateringproviderRepository.findAll();
	}
	
	

}
