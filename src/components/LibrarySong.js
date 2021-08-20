import React from "react";
import { playaudio } from "../util";

const LibrarySong = ({ audioRef, song, songs, setcs, isplaying, setSongs }) => {
  const songSelectHandler = () => {
    setcs(song);
    const id = song.id;
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    playaudio(isplaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="song cover"></img>
      <div className="song-discription">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default LibrarySong;
