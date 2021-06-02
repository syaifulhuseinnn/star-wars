import React from "react";
import { Link } from "react-router-dom";

export default function Peoples({ peoples }) {
  return (
    <div className="peoples p-5">
      {peoples.map((people, index) => (
        <div className="peoples__item" key={index}>
          <div className="peoples__item__thumbnail">
            <img
              src="https://placeimg.com/640/800/people"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="peoples__item__title my-3">
            <h1 className="mb-2">{people.name}</h1>
            <h2 className="mb-2">Gender: {people.gender}</h2>
            <h2 className="mb-2">Birthday: {people.birth_year}</h2>
            <button className="btn btn-warning text-uppercase text-light font-weight-bold my-3">
              show me
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
