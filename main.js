document.querySelector("main").addEventListener("scroll", x => {
    setTimeout(y => {
        if (x.target.scrollTop > 2) {
            document.querySelector("header").style.backgroundColor = "hsl(0, 0%, 7%)";
            document.querySelector("header").style.borderBottom = "1.5px solid hsl(0, 0%, 15%)";
        }else{
            document.querySelector("header").style.backgroundColor = "transparent";
            document.querySelector("header").style.borderBottom = "transparent";
        }
    }, 300);
});