import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero";
import Movies from "../../components/Movies";
import GeneralTemplate from "../../templates/general";

export default function Home() {
  const [movies, setMovies] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    const get = async () => {
      setMovies({ ...movies, loading: "loading" });
      try {
        const request = await fetch("https://swapi.dev/api/films");
        const response = await request.json();
        setMovies({ ...movies, loading: "success", data: response });
      } catch (error) {
        console.log(error);
      }
    };

    get();
  }, []);

  return (
    <GeneralTemplate>
      <Hero />
      {movies.loading === "success" && <Movies movies={movies.data.results} />}
    </GeneralTemplate>
  );
}
