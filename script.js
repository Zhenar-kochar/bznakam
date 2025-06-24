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

// Handle background music with videos
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bgMusic");
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        // Pause music when video starts
        video.addEventListener("play", () => {
            if (!audio.paused) {
                audio.pause();
            }
        });

        // Resume music when video ends
        video.addEventListener("ended", () => {
            audio.play().catch(() => {});
        });

        // Resume music when video is paused by user (but not at the end)
        video.addEventListener("pause", () => {
            if (video.currentTime < video.duration) {
                audio.play().catch(() => {});
            }
        });
    });
});
