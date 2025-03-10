(function () {
    // Remove existing overlay if it already exists
    const existingOverlay = document.getElementById("videoOverlay");
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "videoOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "100";
    overlay.style.background = "rgba(0, 0, 0, 0)"; // Transparent background
    document.body.appendChild(overlay);

    // Create video element
    const video = document.createElement("video");
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    video.style.width = "50%";
    video.style.height = "50%";
    video.style.transition = "left 5s linear";
    video.autoplay = true;
    video.loop = false;
    video.style.position = "absolute";
    video.style.top = "50%";
    video.style.left = "125%";
    video.style.transform = "translate(-50%, -50%)";
    video.style.zIndex = "106";
    overlay.appendChild(video);

    // Move the video across the screen
    setTimeout(() => {
        video.style.left = "-400px";
    }, 1000);

    // Remove overlay when video finishes moving
    setTimeout(() => {
        overlay.remove();
    }, 6000);

    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "✖";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.fontSize = "20px";
    closeButton.style.background = "red";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.cursor = "pointer";
    closeButton.style.padding = "5px 10px";
    closeButton.style.borderRadius = "5px";
    closeButton.style.zIndex = "10";
    overlay.appendChild(closeButton);

    // Close the overlay when the button is clicked
    closeButton.addEventListener("click", () => {
        overlay.remove();
    });
})();
//sssss