import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import PhotoList from "./PhotoList";

const Gallery = ({ currentCategory }) => {
  const { name, description } = currentCategory; // tests fail bc name property cannot be reached ?
  console.log(name) // this properly displays name - not sure why the above error occurs
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
    </section>
  );
};

export default Gallery;
