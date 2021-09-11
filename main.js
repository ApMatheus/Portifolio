//Função() nivel das skills
const nivelSkills = () => {
    //Nivel das skills
    const arrraySkills = [
        html = "90%",
        css = "86%",
        js = "30%",
        node = "15%",
        sass = "35%",
        wp = "10%",
        b = "60%",
        git = "40%",
        ps = "69%",
        cd = "50%"
    ]
    //Seleciona todas as div.skiils
    const skills = document.querySelectorAll(".skills");
    //Atribui os valores as devidas skills
    for (let i = 0; i < skills.length; i++) {
        skills[i].childNodes[3].innerHTML += arrraySkills[i];
        skills[i].childNodes[5].childNodes[1].style.width = arrraySkills[i];
    }
}

const btnNvaigation = () => {
    const navList = document.getElementById("nav-list");
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    if (navList.className == 'nav-list active') {
        navList.classList.remove("active");
        item1.classList.remove("active");
        item2.classList.remove("active");
        item3.classList.remove("active");
    } else {
        navList.classList.add("active");
        item1.classList.add("active");
        item2.classList.add("active");
        item3.classList.add("active");
    }
}

const navigationMobile = document.getElementById("mobile-navigation");
navigationMobile.addEventListener("click", btnNvaigation);

nivelSkills();

//Slide de imagens
const bNext = document.getElementById("next");
const bPrev = document.getElementById("prev");
const bolls = document.querySelectorAll(".boll");
const imgs = document.querySelectorAll(".img");

let index = 1;

//Função do Slide
const slideImgs = (nIndex) =>{
    let i;

    for(i=0;i<imgs.length;i++){
        if(imgs[i].classList == "img active"){
            imgs[i].classList.remove("active");
            bolls[i].classList.remove("active");
        }
            imgs[nIndex - 1].classList.add("active");
            bolls[nIndex - 1].classList.add("active");
        index = nIndex;
    }
}

//Valida o valor de index transformando ele em um loop
const validaIndex = (nIndex) =>{
    if(nIndex < 1){
        index = imgs.length;
    }else if(nIndex > imgs.length){
        index = 1;
    }
    slideImgs(index);
}

//click no boll
bolls.forEach (function(event){
    event.addEventListener("click", function(id){
        index = id.target.id; 
        console.log(index);
        slideImgs(index);
    })
});

//click no next
bNext.addEventListener("click", function(){
    index ++;
    validaIndex(index);
});

//click no prev
bPrev.addEventListener("click", function(){
    index --;
    validaIndex(index);
})

//Muda Slide com tempo
setInterval(function(){
    index++;
    validaIndex(index)
},5000);

slideImgs(index);