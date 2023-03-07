import Vimeo from "@vimeo/player";
import _throttle from "lodash.throttle";

const LOCAL_STORAGE_TIME = "videoplayer-current-time";

const player = new Vimeo("vimeo-player");

player.on("loaded", () => {
  const currentTime = localStorage.getItem(LOCAL_STORAGE_TIME) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  "timeupdate",
  _throttle(({ seconds }) => {
    localStorage.setItem(LOCAL_STORAGE_TIME, seconds);
  }, 1000)
);
