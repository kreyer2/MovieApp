import React from 'react';
import {Link} from "react-router-dom";

export default function Movie ({logo, id, name}) {
  return (
    <Link to={`/about/${id}`} target="_blank" className="similar-item-wrapper d-flex flex-column align-items-center">
      <div className="poster-image">
        <img src={`https://image.tmdb.org/t/p/original${logo}`}
             alt="poster_image"/>
      </div>
      <div className="similar-name">
        {name}
      </div>
    </Link>
  );
}