import React from "react";
import GeneralTemplate from "../../templates/general";

export default function PeopleDetails() {
  return (
    <GeneralTemplate>
      <div className="people_details">
        <img
          src="https://placeimg.com/640/800/people"
          alt=""
          className="img-fluid"
        />
        <ul>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>
    </GeneralTemplate>
  );
}
