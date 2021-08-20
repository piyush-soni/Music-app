import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./Styles/app.scss";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data);
  const [cs, setcs] = useState(songs[0]);
  const [isplaying, setisplaying] = useState(false);
  return (
    <div className="App">
      <Song cs={cs} />
      <Player setisplaying={setisplaying} isplaying={isplaying} cs={cs} />
      <Library songs={songs} setcs={setcs} />
    </div>
  );
}

export default App;
