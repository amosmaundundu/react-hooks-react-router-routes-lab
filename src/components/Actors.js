import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors</h1>
    {actors.map((actor)=>(
      <div key={actors.title}>
        <h2>{actor.title}</h2>
        <ul>
          {actor.movies.map((movie)=>(
          <li key={movie}>{movie}</li>))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Actors;
