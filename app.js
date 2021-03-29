const header = document.querySelector(".header-wrapper")
const title  = document.querySelector(".header__name")



header.addEventListener('mousemove', (e) => {
    const headerWidth = header.clientWidth;
    const headerHeight = header.clientHeight;

    let x = e.clientX / headerWidth;
    let y = e.clientY / headerHeight;

    let light = Math.floor(10 * y) + 50;

    let backgroundHue = Math.floor(50 * x) + 170;
    let titleHue = backgroundHue + 120;


    console.log(light);

    header.style.backgroundColor = `hsl(${backgroundHue}, 50%, ${light}%)`
    title.style.color = `hsl(${titleHue}, ${light}%, 50%)`
})


