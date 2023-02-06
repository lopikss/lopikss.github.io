 function toggleMute() {
    var flashContent = document.getElementById("flash-content");
    if (flashContent.muted) {
      flashContent.muted = false;
    } else {
      flashContent.muted = true;
    }
  }
