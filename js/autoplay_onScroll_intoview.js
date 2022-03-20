// autoplay_onScroll_intoview.js

  var iframe = document.querySelector('iframe');
  var player = new Vimeo.Player(iframe);

  player.on('play', function() {
    console.log('Played the video');
  });

  player.getVideoTitle().then(function(title) {
    console.log('title:', title);
  });
  
  player.play();

