function PlayInLoad() {
    //  מנגינה
    var unmuteAudio = document.querySelector("#unmuteAudio");
    unmuteAudio.addEventListener('click', function () { playStop("autoP1", "unmuteAudio") });
    //  סרטון
    var unmuteVideo = document.querySelector("#unmuteVideo");
    unmuteVideo.addEventListener('click', function () { playStop("autoP2", "unmuteVideo") });

}
// mute  הפסק/הפעל  כפתור של 
function playStop(audioId, btnId) {
    var audio = document.querySelector("#" + audioId);
    var TheBtn = document.querySelector("#" + btnId);
    if (audio.muted == true) {
        audio.muted = false;
        TheBtn.textContent = "הפסק מנגינה";
    }
    else {
        audio.muted = true;
        TheBtn.textContent = "השמע מנגינה";
    }
}