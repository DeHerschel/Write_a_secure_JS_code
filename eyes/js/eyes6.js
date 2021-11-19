try {
    const balls = document.querySelector(".ball");
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX * 100 / window.innerWidth + "%";
        const y = e.clientY * 100 / window.innerHeight + "%";
        balls.forEach((ball) => {
            balls[i].style.left=x;
            balls[i].style.top=y;
            balls[i].style.transform = "traslate(-"+x+",-"+y+")";
        });
    });
} catch (err) {
    console.log(err);
}
//isolate the scope