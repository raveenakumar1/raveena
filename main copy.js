window.addEventListener("load", function () {
    // wait a bit for effect
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-screen").style.display = "block";
    }, 2000); // 2 seconds delay for animation effect
});
