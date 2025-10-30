var myVideo=document.getElementById("myvideo"); // get the video element by its ID
    function playPause() // function to toggle play and pause
    {
        if (myVideo.paused) myVideo.play(); // if the video paused, play it
        else myVideo.pause(); // ptherwise, pause it
    }