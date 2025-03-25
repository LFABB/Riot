document.addEventListener("scroll", () => {
    setTimeout(() => {
        if (document.documentElement.scrollTop > 2) {
            document.querySelector("header").style.backgroundColor = "hsl(0, 0%, 7%)";
            document.querySelector("header").style.borderBottom = "1.5px solid hsl(0, 0%, 15%)";
        }else{
            document.querySelector("header").style.backgroundColor = "transparent";
            document.querySelector("header").style.borderBottom = "transparent";
        }
    }, 200);
});


const base = document.getElementById("base");
const Cloner = (x, y) => { let clone = x.cloneNode(true); clone.id = y; document.getElementById("wupdates-container-buttons").appendChild(clone); };

base.style.width = "500px"
base.style.height = "135px"
base.style.padding= "0px"
base.style.marginBottom = "35px"
base.style.position = "relative"
base.style.borderRadius = "10px"
base.querySelector("img").style.display = "inline-block"
base.querySelector("img").style.position = "absolute"
base.querySelector("img").style.width = "225px"
base.querySelector("img").style.height = "100%"
base.querySelector("img").style.top = "0"
base.querySelector("img").style.right = "0"
base.querySelector("img").style.margin = "0"
base.querySelector("p").style.top = "16px"
base.querySelector("p").style.left = "16px"
base.querySelector("p").style.width = "200px"
base.querySelector("p").style.margin = "0"
base.style.border = "1px solid blue"

Cloner(base, "second");
document.getElementById("second").querySelector("img").src = "assets/images/wupdates2.png"

Cloner(base, "third");

Cloner(base, "fourth");
