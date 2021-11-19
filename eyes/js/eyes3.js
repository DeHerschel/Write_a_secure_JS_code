const balls = document.getElementsByClassName("ball");
/*
Assigning a function to the onmousemove event
gives the oportunity to change de behaviour of the event
*/
/*
document.onmousemove = function(e) {
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform = "traslate(-"+x+",-"+y+")";
    }
}
*/
//Addigng an event listener
document.addEventListener('mousemove', (e) => {
    let x = e.clientX * 100 / window.innerWidth + "%";
    let y = e.clientY * 100 / window.innerHeight + "%";
    for(var i=0;i<2;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].style.transform = "traslate(-"+x+",-"+y+")";
    }
})