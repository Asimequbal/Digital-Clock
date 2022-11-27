function clock(){
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let second = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let period = h >= 12 ? "PM" : "AM"
    if(h>12){
        h = h-12;
    }
    if(h<10){
        h = '0'+ h
    }else if(m<10){
        m = '0' + m
    }else if(s<10){
        s = '0' + s
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = period;
}
setInterval(clock,1000);