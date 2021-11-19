// replace var for const to prevent changes
const balls = document.getElementsByClassName("ball");

document.onmousemove = function(e) {
    // replace var for let
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform = "traslate(-"+x+",-"+y+")";

    }
}