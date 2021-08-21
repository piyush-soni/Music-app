import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songinfo,
  setsonginfo,
  cs,
  isplaying,
  setisplaying,
  audioRef,
  songs,
  setcs,
  setSongs,
}) => {
  const activelibraryhandler = (nextprev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextprev.id) {
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
  };
  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setisplaying(!isplaying);
    } else {
      audioRef.current.play();
      setisplaying(!isplaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const draghandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setsonginfo({ ...songinfo, currentTime: e.target.value });
  };
  const skiptrackhandler = async (direction) => {
    let currentindex = songs.findIndex((song) => song.id === cs.id);
    if (direction === "skip-forward") {
      await setcs(songs[(currentindex + 1) % songs.length]);
      activelibraryhandler(songs[(currentindex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentindex - 1) % songs.length === -1) {
        await setcs(songs[songs.length - 1]);
        activelibraryhandler(songs[songs.length - 1]);
        if (isplaying) audioRef.current.play();
        return;
      }
      await setcs(songs[(currentindex - 1) % songs.length]);
      activelibraryhandler(songs[(currentindex - 1) % songs.length]);
    }
    if (isplaying) audioRef.current.play();
  };
  const trackanim = {
    transform: `translateX(${songinfo.anip}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p> {getTime(songinfo.currentTime)} </p>
        <div
          style={{
            background: `linear-gradient(to right, ${cs.color[0]}, ${cs.color[1]})`,
          }}
          className="track"
        >
          <input
            onChange={draghandler}
            min={0}
            max={songinfo.duration || 0}
            value={songinfo.currentTime}
            type="range"
          />
          <div style={trackanim} className="animate-track"></div>
        </div>
        <p> {songinfo.duration ? getTime(songinfo.duration) : "0:00"} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skiptrackhandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isplaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skiptrackhandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
