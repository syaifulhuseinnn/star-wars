import React from "react";

export default function Movies({ movies }) {
  console.log(movies);
  return (
    <div className="movies p-5">
      {movies.map((movie, index) => (
        <div className="movies__item" key={index}>
          <div className="movies__item__thumbnail">
            <img
              src="https://placeimg.com/640/800/people"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="movies__item__title my-3">
            <h1 className="mb-2">{movie.title}</h1>
            <h2 className="mb-2">Director: {movie.director}</h2>
            <h2 className="mb-2">Released: {movie.release_date}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
