import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GeneralTemplate from "../../templates/general";

export default function PeopleDetails() {
  const { id } = useParams();

  const [peoples, setPeoples] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    const get = async () => {
      setPeoples({ ...peoples, loading: "loading" });
      try {
        const request = await fetch(`https://swapi.dev/api/people/${id}`);
        const response = await request.json();
        setPeoples({ ...peoples, loading: "success", data: response });
      } catch (error) {
        console.log(error);
      }
    };

    get();
  }, []);

  return (
    <GeneralTemplate>
      <div className="people_details text-center">
        <img
          src="https://placeimg.com/640/800/people"
          alt=""
          className="img-fluid"
        />

        {peoples.loading === "success" && (
          <>
            <h1>{peoples.data.name}</h1>
            <ul>
              <li>Height: {peoples.data.height}</li>
              <li>Mass: {peoples.data.mass}</li>
              <li>Hair Color: {peoples.data.hair_color}</li>
              <li>Skin Color: {peoples.data.skin_color}</li>
              <li>Eye Color: {peoples.data.eye_color}</li>
              <li>Birth Year: {peoples.data.birth_year}</li>
              <li>Gender: {peoples.data.gender}</li>
            </ul>
          </>
        )}
      </div>
    </GeneralTemplate>
  );
}
