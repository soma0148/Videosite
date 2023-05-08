window.addEventListener('DOMContentLoaded', function() {
  var video = document.querySelector('video');
  var playButton = document.getElementById('playButton');
  var pauseButton = document.getElementById('pauseButton');

  playButton.addEventListener('click', function() {
    video.play();
  });

  pauseButton.addEventListener('click', function() {
    video.pause();
  });
});
