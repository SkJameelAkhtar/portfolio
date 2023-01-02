function showtime(){
    time = new Date();
    timel=String(time);
    // console.log(timel);
    // console.log(typeof(timel));
    // console.log(time);
    daily=timel.substr(0,3);
    daily=daily+', ';
    timely=timel.substr(4,6);
    yearl=timel.slice(10,15);
    timec=timel.slice(15,25);
    document.getElementById('day').innerHTML = daily;
    document.getElementById('timed').innerHTML = timely;
    document.getElementById('year').innerHTML = yearl;
    document.getElementById('time').innerHTML = timec;

}

setInterval(showtime, 1000);