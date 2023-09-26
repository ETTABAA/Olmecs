const btn = document.querySelector('.burgerMenu');
const search = document.querySelector('.search');
const navLink = document.querySelector('.navLink');
const navLinkSexe = document.querySelectorAll('.navLink a');
const sousMenu = document.querySelector('.sousMenu');
const sousMenuSexe = document.querySelectorAll('.sousMenuSexe');
const vetementWomenBtn = document.querySelector('.vetementWomenBtn');
const chaussuresWomenBtn = document.querySelector('.chaussuresWomenBtn');
const accessoirestWomenBtn = document.querySelector('.accessoirestWomenBtn');


btn.addEventListener('click',function(){
    search.classList.toggle('d-none');
    navLink.classList.toggle('d-none');
    sousMenu.classList.toggle('d-none');
})
for(let i=0; i<3; i++){
    navLinkSexe[i].addEventListener('click',function(){
        for(let j=0; j<3; j++){
            navLinkSexe[j].classList.remove('activNavLink');
            sousMenuSexe[j].classList.add('d-none');
        }
        navLinkSexe[i].classList.add('activNavLink');
        console.log(i);
        sousMenuSexe[i].classList.remove('d-none');
        console.log(i);

    })
}
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