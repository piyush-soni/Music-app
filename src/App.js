import React, { useRef, useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./Styles/app.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data);
  const [cs, setcs] = useState(songs[0]);
  const [isplaying, setisplaying] = useState(false);
  const [songinfo, setsonginfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setlibraryStatus] = useState(false);
  const timeupdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setsonginfo({ ...songinfo, currentTime: current, duration });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setlibraryStatus={setlibraryStatus} />
      <Song cs={cs} />
      <Player
        audioRef={audioRef}
        setisplaying={setisplaying}
        isplaying={isplaying}
        cs={cs}
        setsonginfo={setsonginfo}
        songinfo={songinfo}
        songs={songs}
        setcs={setcs}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setcs={setcs}
        isplaying={isplaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeupdateHandler}
        onLoadedMetadata={timeupdateHandler}
        ref={audioRef}
        src={cs.audio}
      ></audio>
    </div>
  );
}

export default App;
