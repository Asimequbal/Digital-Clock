function clock(){
   let currentTime = new Date()
   let hours = currentTime.getHours()
   let minutes = currentTime.getMinutes()
   let seconds = currentTime.getSeconds()

   if(hours > 12){
    hours = hours - 12
    document.querySelector('#ampm').innerText = 'PM'
}else{
    document.querySelector('#ampm').innerText = 'AM'
}
if(hours>12){
    h = h-12;
}
if(hours<10){
    hours = '0'+ hours
}else if(minutes<10){
    minutes = '0' + minutes
}else if(seconds<10){
    seconds = '0' + seconds
}
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#minutes').innerText = minutes;
    document.querySelector('#seconds').innerText = seconds;
    
}


setInterval(clock,1000);