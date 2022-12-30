const mp4CheckBox = document.getElementById("mp4CheckBox");
const mp3CheckBox = document.getElementById("mp3CheckBox");
const mainForm = document.getElementById("mainForm");
const urlTextBox = document.getElementById("urlTextBox");
const downloadButton = document.getElementById("downloadButton");

mp4CheckBox.addEventListener("click", () => {
    mainForm.setAttribute("action", "https://youtube-downloader-server.charlzk.repl.co/download_mp4");
    mp3CheckBox.checked = false;
});

mp3CheckBox.addEventListener("click", () => {
    mainForm.setAttribute("action", "https://youtube-downloader-server.charlzk.repl.co/download_mp3");
    mp4CheckBox.checked = false;
});

urlTextBox.addEventListener("input", () => {
    if (urlTextBox.value.includes("youtube.com/watch")) {
        downloadButton.disabled = false;
    } else {
        console.log("This is not a YouTube Video");
        downloadButton.disabled = true;
    }
});