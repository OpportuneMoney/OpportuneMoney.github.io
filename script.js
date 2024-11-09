const productContainers = [...document.querySelectorAll(`.product-container`)];
const nxtBtn = [...document.querySelectorAll(`.nxt-btn`)];
const preBtn = [...document.querySelectorAll(`.pre-btn`)];

productContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })

    
    preBtn[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth;
    })
})


let modelBox = document.getElementById("modelBox");
let shadowedBg = document.querySelector(".shadowed-background");
window.onload = function(){
    modelBox.style.display = "flex";
    modelBox.style.alignContent = "center";
    modelBox.style.alignItems = "center";
    modelBox.style.flexWrap = "wrap";
    modelBox.style.flexDirection = "column";
    modelBox.style.justifyContent = "center";
    shadowedBg.style.display = "block";
}

function closeModel(){
    modelBox.style.display = "none";
    shadowedBg.style.display = "none";
}


function toggleMenu() {
    var nav = document.querySelector('.navigation-links-main-page-html');
    nav.classList.toggle('active');
}