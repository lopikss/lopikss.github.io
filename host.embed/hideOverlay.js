let hideOverlay = () => {
        let elements = document.querySelectorAll("#fullscreen-button, #credits-button, #menu-bar, #download-swf");
        let button = document.getElementById("toggle-view");
        let hidden = button.getAttribute("data-hidden") === "true";
        elements.forEach(element => {
            if (hidden) {
                element.removeAttribute("hidden");
                button.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/3687/3687641.png')";
                button.setAttribute("data-hidden", "false");
            } else {
                element.setAttribute("hidden", "hidden");
                button.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/3687/3687651.png')";
                button.setAttribute("data-hidden", "true");
            }
        });
    }
