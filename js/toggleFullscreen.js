// Call the toggleFullscreen function in a button click event handler, then:
document.getElementById("player").addEventListener("click", toggleFullscreen);



toggleFullscreen = function() {
    var fullscreenChange = null;
        // other vars …

    // Check for fullscreen support
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {

        // If there's currently an element fullscreen, exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }

        // Do stuff when the video exits fullscreen mode
        // …
    } else {

        // Otherwise, enter fullscreen
        // `videoWrapper` is just a `div` element wrapping the video
        if (videoWrapper.requestFullscreen) {
            videoWrapper.requestFullscreen();
        } else if (videoWrapper.mozRequestFullScreen) {
            videoWrapper.mozRequestFullScreen();
        } else if (videoWrapper.webkitRequestFullscreen) {
            videoWrapper.webkitRequestFullscreen();
        } else if (videoWrapper.msRequestFullscreen) {
            videoWrapper.msRequestFullscreen();
        }

        // Do stuff when the video enters fullscreen mode
        // …
    }

    fullscreenChange = function() {

        // Do something on fullscreen change event
        // …
    };

    document.onfullscreenchange = function() {
        if (!document.fullscreenElement) {
            fullscreenChange();
        }
    };
    document.onwebkitfullscreenchange = function() {
        if (!document.webkitFullscreenElement) {
            fullscreenChange();
        }
    };
    document.onmozfullscreenchange = function() {
        if (!document.mozFullScreenElement) {
            fullscreenChange();
        }
    };
    document.onmsfullscreenchange = function() {
        if (!document.msFullscreenElement) {
            fullscreenChange();
        }
    };
};