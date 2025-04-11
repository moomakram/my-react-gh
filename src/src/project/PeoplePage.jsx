import React from "react";
import { PeopleData } from "./Data";
import PeopleCard from "./PeopleCard";

const PeoplePage = () => {
  return (
    <div className="container mt-4">
      <h2>People Page</h2>
      <div className="row">
        {PeopleData.map((person) => (
          <div key={person.id} className="col-6 col-sm-4 col-md-2">
            <PeopleCard person={person} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeoplePage;