import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setcs,
  isplaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2> Library </h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            songs={songs}
            setcs={setcs}
            song={song}
            isplaying={isplaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
