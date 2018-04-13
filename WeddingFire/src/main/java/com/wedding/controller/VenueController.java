package com.wedding.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
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

	// to save userdetails in the database via registration
	@RequestMapping(value = "/venue", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Map<String, String>> add(@RequestBody Venue venue) {
		Map<String, String> response = new HashMap<String, String>();
		venueRepository.save(venue);
		response.put("ok", "Venue added Succesfuly");
		return ResponseEntity.accepted().body(response);
	}
	// to upload venue image in the Spring project image folder
	@PostMapping("/venue/images/file")
	public String upload(@RequestParam("file") MultipartFile file) {
		String uploadPath = "src/main/resources/images/";
		File path = new File(uploadPath);
		if (!path.exists())
			path.mkdirs();
		System.out.println(uploadPath);
		try {
			Files.copy(file.getInputStream(), Paths.get(uploadPath, file.getOriginalFilename()));
			// venue.setVenue_image(venue_image);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "index";
	}

	// to get venue images from mongodb database
	@RequestMapping(value = "/venue/getimages/{venue_path}", method = RequestMethod.GET, produces = MediaType.IMAGE_PNG_VALUE)
	public ResponseEntity<InputStreamResource> getImage() throws IOException {
		ClassPathResource imgFile = new ClassPathResource("images/ + test.png");
		return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG)
				.body(new InputStreamResource(imgFile.getInputStream()));
	}
}
