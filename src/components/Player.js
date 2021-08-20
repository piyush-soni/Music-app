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
}) => {
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

  return (
    <div className="player">
      <div className="time-control">
        <p> {getTime(songinfo.currentTime)} </p>
        <input
          onChange={draghandler}
          min={0}
          max={songinfo.duration || 0}
          value={songinfo.currentTime}
          type="range"
        />
        <p> {getTime(songinfo.duration)} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isplaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
