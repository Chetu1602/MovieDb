import Blur from "../../baseUI/blur";
import MovieCards from "./MovieCards";
import { useEffect, useState } from "react";

const MovieList = ({ fetchType,handleToggle}) => { 
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        const fetchUrl = determineFetchUrl(fetchType);

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjRkNTZiNzc5N2E4ZTUxYWE0MTI0NWZhMjdkZGUzYiIsInN1YiI6IjY1YzMyMDNkOTVhY2YwMDE2MjFjMGNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OedZGm4l1BLyIKgLN1zTEogIAj9zTRKKY9MRpz8clYA'
            }
          };
          
          

        fetch(fetchUrl, options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, [fetchType]);

    const determineFetchUrl = (fetchType) => {
        switch (fetchType) {
            case 'Today':
                return 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
            case 'This Week':
                return 'https://api.themoviedb.org/3/discover/week?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
            case 'Popular':
                return 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
            case 'Streaming':
                return 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
            case 'On Tv':
                return 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
            case 'For Rent':
                return 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
            case 'In Theaters':
                return 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            case 'Movies':
                return 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
            case 'Tv':
                return 'https://api.themoviedb.org/3/trending/tv/day?language=en-US';
            // Add more cases for other sections as needed
            default:
                return '';
        }
    };
    const handleImageClick = (name) => {
        console.log(`Image clicked: ${name}`);
      };    

    return (
        <div className="movieList">
            {movies.map((movie, index) => (
                <MovieCards key={index} {...movie} onClick={handleImageClick}/>
            ))}
            <div className="blurEffect"><Blur></Blur></div>
        </div>
    );
};

export default MovieList;
