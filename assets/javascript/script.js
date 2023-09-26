const btn = document.querySelector('.burgerMenu');
const search = document.querySelector('.search');
const navLink = document.querySelector('.navLink');
const navLinkSexe = document.querySelectorAll('.navLink a');
const sousMenu = document.querySelector('.sousMenu');
const sousMenuSexe = document.querySelectorAll('.sousMenuSexe');
const vetementWomenBtn = document.querySelector('.vetementWomenBtn');
const chaussuresWomenBtn = document.querySelector('.chaussuresWomenBtn');
const accessoirestWomenBtn = document.querySelector('.accessoirestWomenBtn');
const vetementMenBtn = document.querySelector('.vetementMenBtn');
const chaussuresMenBtn = document.querySelector('.chaussuresMenBtn');
const accessoiresMenBtn = document.querySelector('.accessoiresMenBtn');
const categorieCarte = document.querySelector('.categorieCarte');



const vetementMen =['Generation Olmecs','Nouveau cette semaine','Best sellers','Basiques','Blousons et manteaux','Doudounes','Sweats','Pulls et vestes','Gilets sans manches','Tee-shirts','Chemises','Jeans','Pantalons','Pantalon cargo','Bermudas','survétement'];
const chaussuresMen = ['Tout voir','New','Baskets','Tennis','Bottines','Sandales','Promotion jusqu\'à -30%'];
const ACCESSOIRESMen =['Tout voir','Casquettes et bonnets','Lunettes','Bijoux fantaisie','Sacs et sacs à dos','Porte-monnaie','Ceintures','Underwear','chaussettes'];

for(let i=0; i<3; i++){ 
    navLinkSexe[i].addEventListener('click',function(){
        for(let j=0; j<3; j++){
            navLinkSexe[j].classList.remove('activNavLink');
            sousMenuSexe[j].classList.add('d-none');
        }
        navLinkSexe[i].classList.add('activNavLink');
        sousMenuSexe[i].classList.remove('d-none');
    })
}
for(let i in vetementMen){
    document.querySelector('.vetementMen ul').innerHTML += `<li><a href="">${vetementMen[i]}</a></li>`;
}
for(let i in chaussuresMen){
    document.querySelector('.chaussuresMen ul').innerHTML += `<li><a href="">${chaussuresMen[i]}</a></li>`;
}
for(let i in ACCESSOIRESMen){
    document.querySelector('.ACCESSOIRESMen ul').innerHTML += `<li><a href="">${ACCESSOIRESMen[i]}</a></li>`;
}

btn.addEventListener('click',function(){
    search.classList.toggle('d-none');
    navLink.classList.toggle('d-none');
    sousMenu.classList.toggle('d-none');
})

vetementWomenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.vetementWomen').classList.remove('d-none');
    document.querySelector('.vetementWomen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.vetementWomen').classList.add('d-none');
    })
})
chaussuresWomenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.chaussuresWomen').classList.remove('d-none');
    document.querySelector('.chaussuresWomen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.chaussuresWomen').classList.add('d-none');
    })
})
accessoirestWomenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.ACCESSOIRESWomen').classList.remove('d-none');
    document.querySelector('.ACCESSOIRESWomen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.ACCESSOIRESWomen').classList.add('d-none');
    })
})
vetementMenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.vetementMen').classList.remove('d-none');
    document.querySelector('.vetementMen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.vetementMen').classList.add('d-none');
    })
})
chaussuresMenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.chaussuresMen').classList.remove('d-none');
    document.querySelector('.chaussuresMen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.chaussuresMen').classList.add('d-none');
    })
})
accessoiresMenBtn.addEventListener('click',function(){
    navLink.classList.add('d-none');
    sousMenu.classList.add('d-none');
    document.querySelector('.ACCESSOIRESMen').classList.remove('d-none');
    document.querySelector('.ACCESSOIRESMen .title').addEventListener('click',function(){
        navLink.classList.remove('d-none');
        sousMenu.classList.remove('d-none');
        document.querySelector('.ACCESSOIRESMen').classList.add('d-none');
    })
})
//ajouter un avénement sur le scroll des image en bas du menu
categorieCarte.addEventListener('scroll',function(e){
    console.log("rthrth");
})