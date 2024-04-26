let hours = document.querySelector(".h");
let min = document.querySelector(".m");
let sec = document.querySelector(".s");
let AmPm = document.querySelector(".AmPm");
let MiliSec = document.querySelector(".ms");

function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if (h > 12) {
        h = h - 12;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
   
    hours.innerText = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    AmPm.innerHTML = date.getHours() >= 12 ? "PM" : "AM";
}

// Call clock() once to initialize immediately
clock();

// Set interval outside the function to avoid multiple intervals
setInterval(clock, 1000);


