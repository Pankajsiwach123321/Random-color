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
        myinterval = setInterval(function play() {
            document.body.style.background = random()
        }, 1000);
        chain = true;
    }

}
function stop() {
    {
        clearInterval(myinterval);
        chain = null;
    }
}

let started = document.querySelector("#start");
let stoped = document.querySelector("#stop");
started.addEventListener('click', start)
stoped.addEventListener('click', stop)
