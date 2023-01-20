const mp3_button = document.getElementById("mp3_button");
const mp4_button = document.getElementById("mp4_button");

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