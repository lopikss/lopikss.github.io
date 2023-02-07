
function launchIntoFullscreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }





var offsetX = -3;
    var offsetY = -5;
    var fullscreenButton = document.getElementById("fullscreen-button");
    var customLinkButton = document.getElementById("credits-button");
    var dowloadSWF = document.getElementById("download-swf");
    var toggleView = document.getElementById("toggle-view");
    var menuBar = document.getElementById("menu-bar");
    var fullscreenButtonWidth = (-fullscreenButton.clientWidth + 398.9 + offsetX).toString();
    var fullscreenButtonHeight = (-fullscreenButton.clientHeight + 301 + offsetY).toString();
    fullscreenButton.style.transform =
      "translate(" + fullscreenButtonWidth + "px," + fullscreenButtonHeight + "px)";
      
    var customLinkButtonWidth = (-customLinkButton.clientWidth + 398.5 + offsetX).toString();
    var customLinkButtonHeight = (-customLinkButton.clientHeight + -269 + offsetY).toString();
    customLinkButton.style.transform =
      "translate(" + customLinkButtonWidth + "px," + customLinkButtonHeight + "px)";
      
    var dowloadSWFWidth = (-dowloadSWF.clientWidth + 300 + offsetX).toString();
    var dowloadSWFHeight = (-dowloadSWF.clientHeight + 250 + offsetY).toString();
    dowloadSWF.style.transform =
      "translate(" + dowloadSWFWidth + "px," + dowloadSWFHeight + "px)";
      
    var menuBarWidth = (-menuBar.clientWidth + 399 + offsetX).toString();
    var menuBarHeight = (-menuBar.clientHeight + 300 + offsetY).toString();
    menuBar.style.transform =
      "translate(" + menuBarWidth + "px," + menuBarHeight + "px)";
      
    var toggleViewWidth = (-toggleView.clientWidth + 300 + offsetX).toString();
    var toggleViewHeight = (-toggleView.clientHeight + 300 + offsetY).toString();
    toggleView.style.transform =
      "translate(" + toggleViewWidth + "px," + toggleViewHeight + "px)";
