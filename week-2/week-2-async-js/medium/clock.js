function currentTime() {

let time = new Date()
let hh = time.getHours().toString().padStart(2, "0");
let ampm = hh >= 12 ? 'pm' : 'am';
hh = hh % 12;
let mm = time.getMinutes().toString().padStart(2, "0");
let ss = time.getSeconds().toString().padStart(2, "0");
    console.log(`${hh}:${mm}:${ss} ${ampm}`)
}

// setInterval(currentTime, 1000);


function loop() {
    currentTime();
    setTimeout(loop, 1000);
}

loop();