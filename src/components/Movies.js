import React, { useState, useEffect } from 'react'
import './Movies.css'
import MovieCard from './MovieCard';
// import SearchIcon from './search.png';
import Photo from '../image/search.png'

const API_URL = "http://www.omdbapi.com?apikey=389315a1";

const Movies = () => {
   const [movies, setMovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   
   useEffect(() => {
      searchMovies('spiderman');
   }, []);

   const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
   }


   return (
      <div className="app">
         <h1>MoviesApp</h1>

         <div className="search">
            <input  value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies" />

            <img
          src={Photo}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
         </div>

         {movies?.length > 0 ? (<div className='container'>{movies.map((movie) => (<MovieCard movie={movie} />))}</div>) : (<div className='empty'><h2>No movies found</h2></div>)}

      </div>
   )
}

export default Movies
