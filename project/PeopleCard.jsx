import React from "react";

const PeopleCard = ({ person }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={person.photo} className="card-img-top" alt={person.name} />
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
          <p className="card-text">{person.job}</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;