import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setcs }) => {
  return (
    <div className="library">
      <h2> Library </h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong songs={songs} setcs={setcs} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
