const titles = document.querySelectorAll(".header__title");
const header = document.querySelector(".header-wrapper");


header.addEventListener('mousemove', (e) => {
    const headerWidth = header.clientWidth;
    const headerHeight = header.clientHeight;

    let x = e.clientX / headerWidth;
    let y = e.clientY / headerHeight;

    let deg = Math.floor(50 * y) + 100;
    let perc = Math.floor(50 * x) + 20;

    titles.forEach(title => {
        title.style.background = `-webkit-linear-gradient(${deg}deg, #00F260 ${perc}% , #0575E6)`
        title.style.webkitBackgroundClip = "text";
        title.style.webkitTextFillColor = "transparent";
    })

})