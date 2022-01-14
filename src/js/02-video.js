
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const STORAGE_TIME = "videoplayer-current-time"

const iframe = document.querySelector('iframe');
const playerEl = new Player(iframe);
    
playerEl.on('timeupdate', throttle(function () {
    playerEl.getCurrentTime().then(function (seconds) {
        console.log(seconds)
        localStorage.setItem(STORAGE_TIME, JSON.stringify(seconds))
    });
}, 1000)
);

const savedTime = JSON.parse(localStorage.getItem(STORAGE_TIME)) || 0;
        console.log(savedTime)
         playerEl.setCurrentTime(savedTime)
    
