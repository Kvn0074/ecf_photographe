/*========================*/
/*====== JavaScript ======*/
/*========================*/

/*=======================| Init Variable =*/

let divs = document.getElementsByClassName("div-photo");
let divTab = Array.from(divs);



/*=======================| Add Function =*/

function applyfilter(category){
    for (let i=0; i < divTab.length ; i++){
        console.log(divTab[i].className);
        if(category == 'restaure'){
            divTab[i].style.display = 'block';
            divTab[i].style.width = '45%';
        } 
        else {
            if (divTab[i].className != `div-photo ${category}`){
            divTab[i].style.display = 'none';
            }
            else {
                divTab[i].style.display = 'block';
                divTab[i].style.width = '80%';
            }
        }
    }
}

/*========================*/

/*=======================| Add Function =*/
const ratio = 0.5;
const options = {
    root: null,  /*= zone d'affichage =*/
    rootMargin: '0px',
    threshold: ratio /*= detection intersection si = 1, tout l'ellement doit etre visible =*/
  }

let hideDiv = document.querySelectorAll('.hide');

function getInter (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        } 
    })
    
}
  
const observer = new IntersectionObserver(getInter, options);
hideDiv.forEach(function (appear){
    observer.observe(appear)
})



