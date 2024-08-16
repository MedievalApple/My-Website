
const example = document.querySelector(".ex")

example.addEventListener("change", (event) => {
    if(event.target.value == "v"){
        ExVideo()
    }
    else if(event.target.value == "a"){
        ExAudio()
    }
    else if(event.target.value == "la"){
        ExLiveAudio()
    }
})

function ExVideo() {
    document.getElementById("u").value = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    document.getElementById("media-type").value = "v"
    document.getElementById("video-name").value = "Big Buck Bunny"
    document.getElementById("video-format").value = "mp4"
}

function ExAudio() {
    document.getElementById("u").value = "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast%20-%20Elevator.mp3"
    document.getElementById("media-type").value = "a"
    document.getElementById("song-name").value = "Local Elevator"
    document.getElementById("artist-name").value = "Kevin MacLeod"
    document.getElementById("album-art").value = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Spalding_Building%2C_Portland%2C_Oregon_%282012%29_-_15.JPG"
    document.getElementById("song-format").value = "mp3"
}

function ExLiveAudio() {
    document.getElementById("u").value = "https://listen.011fm.com/stream23"
    document.getElementById("media-type").value = "a"
    document.getElementById("song-name").value = "011.FM - Smooth Jazz"
    document.getElementById("artist-name").value = "Radio"
    document.getElementById("album-art").value = "https://cdn-profiles.tunein.com/s300606/images/logod.jpg"
    document.getElementById("song-format").value = "mp3"
}