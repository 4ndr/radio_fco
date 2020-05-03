const audio = require('nativescript-audio-player');
 
const player = new audio.TNSPlayer();
const playerOptions = {
  audioFile: 'http://78.129.222.70/stream.mp3?ipport=78.129.222.70_34363',
  loop: false,
  completeCallback: function() {
    console.log('finished playing');
  },
  errorCallback: function(errorObject) {
    console.log(JSON.stringify(errorObject));
  },
  infoCallback: function(args) {
    console.log(JSON.stringify(args));
  }
};
 
player
  .playFromUrl(playerOptions)
  .then(function(res) {
    console.log(res);
  })
  .catch(function(err) {
    console.log('something went wrong...', err);
  });