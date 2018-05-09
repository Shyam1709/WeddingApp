package com.wedding.repository;



import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.wedding.model.Booking;
import com.wedding.model.Venue;

public interface BookingRepository extends MongoRepository<Booking,String> {
public List<Booking> findByUserIdLike(String userId);

public List<Venue> findOneById(String id);

	
}
