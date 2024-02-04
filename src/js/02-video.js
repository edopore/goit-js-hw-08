import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const vimeoplayer = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time') || 0;

vimeoplayer.setCurrentTime(currentTime);

vimeoplayer.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);

vimeoplayer.on('pause', ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', seconds);
});
