import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ cs, isplaying, setisplaying }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setisplaying(!isplaying);
    } else {
      audioRef.current.play();
      setisplaying(!isplaying);
    }
  };
  const timeupdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsonginfo({ ...songinfo, currentTime: current, duration });
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
  const [songinfo, setsonginfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  return (
    <div className="player">
      <div className="time-control">
        <p> {getTime(songinfo.currentTime)} </p>
        <input
          onChange={draghandler}
          min={0}
          max={songinfo.duration}
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
      <audio
        onTimeUpdate={timeupdateHandler}
        onLoadedMetadata={timeupdateHandler}
        ref={audioRef}
        src={cs.audio}
      ></audio>
    </div>
  );
};

export default Player;
