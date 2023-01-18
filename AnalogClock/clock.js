function clockdata(){
    time=new Date;
    shand=time.getSeconds();
    mhand=time.getMinutes();
    hrhand=time.getHours();
    sr=shand*6;
    mr=mhand*6;
    hr=(hrhand*30 + (mhand/2));
    document.getElementById('timeloc').innerHTML = time;
    sechand.style.transform = `rotate(${sr}deg)`;
    minhand.style.transform = `rotate(${mr}deg)`;
    hhand.style.transform = `rotate(${hr}deg)`;
}
setInterval(clockdata,1000);
