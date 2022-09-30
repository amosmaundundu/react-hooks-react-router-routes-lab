import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
   <h1>Directors</h1> 
   {directors.map((Director)=>(
      <div key={Director.title}>
        <h2>{Director.title}</h2>
        <ul>
          {Director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>))}
        </ul>
      </div>
      ))}
  </div>;
}

export default Directors;
