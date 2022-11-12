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