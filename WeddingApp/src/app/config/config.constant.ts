export class AppConfig{
	// public static search_api="https://api.themoviedb.org/3/search/movie?api_key=d3f52c1a9668c85909b9f50188e541b7&language=en-US&include_adult=false&query=";
	// to upload image on the server by admin
	public static postimageUrl="http://localhost:8095/wedding/venue/images";
	
	//to get image from database
	public static getimageUrl="http://localhost:8095/wedding/venue/getimages/";
	
	// to send venue details in to the database by admin
	public static uploadvenueUrl = "http://localhost:8095/wedding/venue";
	
	// to save catering provider details in to the database by admin
	public static postcateringUrl="http://localhost:8095/catering/service";
	
	// to get details of Catering provider from database
	public static getcateringUrl="http://localhost:8095/catering/cateringProviders/getdetails"
	
	// to get venue detais from database
	public static getvenueUrl = "http://localhost:8095/wedding/venue/getdetails";
	
	// to save user credentials in the database
	public static saveuserUrl="http://localhost:8095/user/register";

 // to authenticate the user for login
 public static validateuserUrl="http://localhost:8095/user/login";

 // to search venue by city
 public static searchByCityUrl="http://localhost:8095/wedding/venue/search/city=";

 // to search venue by name
 public static searchByNameUrl="http://localhost:8095/wedding/venue/search/name="; 
}
