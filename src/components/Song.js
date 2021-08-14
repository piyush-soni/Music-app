import React from "react";

const Song = ({ cs }) => {
  return (
    <div className="song-container">
      <img src={cs.cover} alt="song cover"></img>
      <h2> {cs.name} </h2>
      <h3> {cs.artist} </h3>
    </div>
  );
};

export default Song;
