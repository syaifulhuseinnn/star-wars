import React, { useState, useEffect } from "react";
import Peoples from "../../components/Peoples";
import GeneralTemplate from "../../templates/general";

export default function People() {
  const [peoples, setPeoples] = useState({
    loading: "idle",
    data: [],
    error: null,
  });

  useEffect(() => {
    const get = async () => {
      setPeoples({ ...peoples, loading: "loading" });
      try {
        const request = await fetch("https://swapi.dev/api/people");
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
      {peoples.loading === "success" && (
        <Peoples peoples={peoples.data.results} />
      )}
    </GeneralTemplate>
  );
}
