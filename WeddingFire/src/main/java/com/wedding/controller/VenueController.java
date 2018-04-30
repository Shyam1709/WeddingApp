package com.wedding.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wedding.model.Venue;
import com.wedding.repository.VenueRepository;

@RestController
@RequestMapping("/wedding")
public class VenueController {

	VenueRepository venueRepository;

	public VenueController(VenueRepository venueRepository) {
		this.venueRepository = venueRepository;
	}

	// to save venue details in the database
	@RequestMapping(value = "/venue", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody Venue venue) {
		Map<String, String> response = new HashMap<String, String>();
		venueRepository.save(venue);
		response.put("ok", "Venue added Succesfuly");
		return ResponseEntity.accepted().body(response);
	}

	// to get venue details from database
	@RequestMapping(value = "/venue/getdetails", method = RequestMethod.GET)
	public List<Venue> getAll() {
		return venueRepository.findAll();
	}

	// to upload venue image in the Spring project image folder
	@RequestMapping(value = "/venue/images", method = RequestMethod.POST)
	public void upload(@RequestParam("file") MultipartFile file) {
		String uploadPath = "src/main/resources/images/";
		File path = new File(uploadPath);
		if (!path.exists())
			path.mkdirs();
		System.out.println(uploadPath);
		try {
			Files.copy(file.getInputStream(), Paths.get(uploadPath, file.getOriginalFilename()));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	// to search venue by city in mongodb database
	@RequestMapping(value = "/venue/search/city={city}", method = RequestMethod.GET)
	public ResponseEntity<List<Venue>> searchbyCity(@PathVariable String city) {
		return ResponseEntity.ok().body(venueRepository.findByCityLike(city));
	}

	// to search venue by name in mongodb database
	@RequestMapping(value = "/venue/search/name={name}", method = RequestMethod.GET)
	public ResponseEntity<List<Venue>> searchbyName(@PathVariable String name) {
		return ResponseEntity.ok().body(venueRepository.findByVenueNameLike(name));
	}
	
	// to search venue by type in mongodb database
	@RequestMapping(value = "/venue/search/type={type}", method = RequestMethod.GET)
	public ResponseEntity<List<Venue>> searchbyType(@PathVariable String type) {
		return ResponseEntity.ok().body(venueRepository.findByTypeLike(type));
	}

	// to get venue images from mongodb database
	@RequestMapping(value = "/venue/getimages/{image_path}", method = RequestMethod.GET, produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<InputStreamResource> getImage(@PathVariable String image_path) throws IOException {
		ClassPathResource imgFile = new ClassPathResource("images/" + image_path + ".png");
		return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG)
				.body(new InputStreamResource(imgFile.getInputStream()));
	}

}
