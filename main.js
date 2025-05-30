export function setupScrollEvent() {
    document.addEventListener("scroll", () => {
        setTimeout(() => {
            if (document.documentElement.scrollTop > 2) {
                document.querySelector("header").style.backgroundColor = "hsl(0, 0%, 7%)";
                document.querySelector("header").style.borderBottom = "1.5px solid hsl(0, 0%, 15%)";
            } else {
                document.querySelector("header").style.backgroundColor = "transparent";
                document.querySelector("header").style.borderBottom = "transparent";
            }
        }, 200);
    });
}

export function setupBaseElement() {
    const base = document.getElementById("base");
    
    base.style.width = "500px";
    base.style.height = "135px";
    base.style.padding = "0px";
    base.style.marginBottom = "35px";
    base.style.position = "relative";
    base.style.borderRadius = "10px";
    
    base.querySelector("img").style.display = "inline-block";
    base.querySelector("img").style.position = "absolute";
    base.querySelector("img").style.width = "225px";
    base.querySelector("img").style.height = "100%";
    base.querySelector("img").style.top = "0";
    base.querySelector("img").style.right = "0";
    base.querySelector("img").style.margin = "0";
    
    base.querySelector("p").style.top = "16px";
    base.querySelector("p").style.left = "16px";
    base.querySelector("p").style.width = "200px";
    base.querySelector("p").style.margin = "0";
}

export function cloneAndModifyElements() {
    const Cloner = (x, y) => {
        let clone = x.cloneNode(true);
        clone.id = y;
        document.getElementById("wupdates-container-buttons").appendChild(clone);
    };

    const base = document.getElementById("base");
    Cloner(base, "second");
    
    document.getElementById("second").querySelector("p").innerHTML = "Actualización de marzo de 2025 | Dev Snack Shop - Legends of Runeterra";
    document.getElementById("second").querySelector("p").style.display = "-webkit-box";
    document.getElementById("second").querySelector("p").style.webkitBoxOrient = "vertical";
    document.getElementById("second").querySelector("p").style.webkitLineClamp = "2";
    document.getElementById("second").querySelector("p").style.overflow = "hidden";
    document.getElementById("second").querySelector("p").style.textOverflow = "ellipsis";
    document.getElementById("second").querySelector("p").style.height = "45px";
    document.getElementById("second").querySelector("p").style.width = "236px";
    
    Cloner(base, "third");
    document.getElementById("third").querySelector("p").innerHTML = "AMANECE // Tráiler de agente de Waylay - VALORANT";
    document.getElementById("third").querySelector("p").style.display = "-webkit-box";
    document.getElementById("third").querySelector("p").style.webkitBoxOrient = "vertical";
    document.getElementById("third").querySelector("p").style.webkitLineClamp = "2";
    document.getElementById("third").querySelector("p").style.overflow = "hidden";
    document.getElementById("third").querySelector("p").style.textOverflow = "ellipsis";
    document.getElementById("third").querySelector("p").style.height = "45px";
    document.getElementById("third").querySelector("p").style.width = "236px";
    
    Cloner(base, "fourth");
    document.getElementById("fourth").querySelector("p").innerHTML = "¡LLEGÓ EL RECLUTAMIENTO VALIENTE TOTAL! First Stand Tournament 2025";
    document.getElementById("fourth").querySelector("p").style.display = "-webkit-box";
    document.getElementById("fourth").querySelector("p").style.webkitBoxOrient = "vertical";
    document.getElementById("fourth").querySelector("p").style.webkitLineClamp = "2";
    document.getElementById("fourth").querySelector("p").style.overflow = "hidden";
    document.getElementById("fourth").querySelector("p").style.textOverflow = "ellipsis";
    document.getElementById("fourth").querySelector("p").style.height = "45px";
    document.getElementById("fourth").querySelector("p").style.width = "236px";
}

setupScrollEvent();
setupBaseElement();
cloneAndModifyElements();