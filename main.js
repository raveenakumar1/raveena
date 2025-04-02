

//loading screen animation
window.addEventListener("load", function () {
    // wait a bit for effect
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); // 2 seconds delay for animation effect
});


//shop screen feeder
var staticImg = document.getElementById('static');
var feedButton = document.querySelector('.feed-me button');
var eatingGif = 'https://raveenakumar1.github.io/raveena/images/eating-kitty.gif';

feedButton.addEventListener("click", function () {
    if (staticImg.src !== eatingGif) { // gif plays ONCE
        staticImg.src = eatingGif;


        setTimeout(() => {
            staticImg.src = 'https://raveenakumar1.github.io/raveena/images/eating-kitty-static.png'; // Reset to static
        }, 1700); // duration of gif
    }
});