import React, { useState, useEffect } from "react";
// import YouTube from "react-youtube";
import axios from "../axios";
import "./Row.css";

import { useNavigate, Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isPosterRow }) => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isPosterRow && "row-posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isPosterRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => navigate(`/${movie.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
