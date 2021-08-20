export const playaudio = (isplaying, audioRef) => {
  if (isplaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
    audioRef.current.play();
  }
};
