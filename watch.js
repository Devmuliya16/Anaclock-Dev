console.log('hello');
let clock = document.getElementsByClassName('spoke-container')[0];
for(let i=0;i<60;i++){
    let spoke = document.createElement('div');
    spoke.className = 'spoke';
    if(i%5==0){
        spoke.classList.add('hourspoke');
    }

    let deg = i*6;
    spoke.style.transform=`rotate(${deg}deg)`;
    
    clock.appendChild(spoke);
}

let datecontainer = document.getElementsByClassName('date')[0];
let daycontainer = document.getElementsByClassName('day')[0];
let c1 = document.getElementsByClassName('c1')[0];
let c2 = document.getElementsByClassName('c2')[0];
let c3 = document.getElementsByClassName('c3')[0];
let hourspoke = document.getElementsByClassName('hr')[0];
let minutespoke = document.getElementsByClassName('min')[0];
let secondspoke = document.getElementsByClassName('sec')[0];
let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]


function watch(){
    let now = new Date();
    let h = now.getHours()%12;
    let m = now.getMinutes();
    let s = now.getSeconds();
    let cald = now.getDate();
    let calm = now.getMonth()+1;
    let caly = now.getFullYear();

    datecontainer.innerHTML=`${cald}/${calm}/${caly}`;
    daycontainer.innerHTML=`${days[now.getDay()]}`;

    let hdeg = (h + (m)/60 + (s)/3600)*30;
    let mdeg = (m+ (s)/60)*6;
    let sdeg = s*6;

    hourspoke.style.transform=`rotate(${hdeg}deg)`;
    minutespoke.style.transform=`rotate(${mdeg}deg)`;
    secondspoke.style.transform=`rotate(${sdeg}deg)`;

    
    
}
setInterval(watch,1000);
