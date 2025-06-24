function playMusic() {
    const audio = document.getElementById("bgMusic");
    audio.play().then(() => {
        document.getElementById("musicPrompt").style.display = "none";
        document.getElementById("landing").style.display = "flex";
    }).catch(err => {
        alert("Please allow audio playback in your browser.");
    });
}

function enterSite() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}
