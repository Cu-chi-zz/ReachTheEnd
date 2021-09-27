var buttons = document.getElementsByClassName("downloadable");
document.getElementById("versions-available").textContent = buttons.length;
document.getElementById("latest-version").textContent = buttons[0].getElementsByTagName('span')[0].textContent.replace("(", "").replace(")", "");