window.addEventListener("load", function () {
    // wait a bit for effect
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); // 2 seconds delay for animation effect
});

var static = document.getElementById('static'),
    eating_gif = 'https://raveenakumar1.github.io/raveena/images/eating-kitty.gif';

static.onclick = function() {
    static.src = eating_gif;
}