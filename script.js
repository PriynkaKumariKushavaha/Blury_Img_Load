const loadingtext=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

function bluringImg(){
let load=0;
let interval=setInterval(bluringImg1,30);
function bluringImg1(){
    load++;
    if(load>99){
        clearInterval(reloadImg);
    }
    loadingtext.innerText=`${load}%`;
    loadingtext.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
}

bluringImg();

//this code is for btton fuctionality
const reload=document.getElementById('btn');
reload.onclick = () => bluringImg();


//this code is for mapping value
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
