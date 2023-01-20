const mp3_button = document.getElementById("mp3_button");
const mp4_button = document.getElementById("mp4_button");
const progressBar = document.getElementsByClassName("progressBar")[0];

/*
function animate() {
    progressBar.setAttribute("style", "display: block;");
    progressBar.getElementsByClassName("innerBar")[0].animate({
        width: "100%"
    }, 7000);
    setTimeout(() => {
        progressBar.getElementsByClassName("innerBar")[0].setAttribute("style", "width: 100%;");
    }, 7000);
}

mp3_button.addEventListener("click", () => {
    animate();
});
*/

mp3CheckBox_oninput = (event) => {
    if (event.value.includes("https://youtu.be/") || event.value.includes("https://www.youtu.be/") || event.value.includes("https://youtube.com/watch?v=") || event.value.includes("https://www.youtube.com/watch?v=")) {
        mp3_button.disabled = false;
    } else {
        mp3_button.disabled = true;
    }
}

mp4CheckBox_oninput = (event) => {
    if (event.value.includes("https://youtu.be/") || event.value.includes("https://www.youtu.be/") || event.value.includes("https://youtube.com/watch?v=") || event.value.includes("https://www.youtube.com/watch?v=")) {
        mp4_button.disabled = false;
    } else {
        mp4_button.disabled = true;
    }
}