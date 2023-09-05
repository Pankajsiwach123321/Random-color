function random() {
    let hex = "0123456789ABCDEF";
    let color = "#"
    for (let x = 0; x < 6; x++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let chain;
function start() {
    if (!chain) {
        setInterval(play, 1000);
    }
    function play() {
        document.body.style.background = random()
    }
}
function stop() {
    if (!chain) {
        clearInterval(play);
        random = null
    }
    function play() {
        document.body.style.background = null
    }
}

let started = document.querySelector("#start");
let stoped = document.querySelector("#stop");
started.addEventListener('click', start)
stoped.addEventListener('click', stop)
