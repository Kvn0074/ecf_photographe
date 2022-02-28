/*=================================================
=============| S U M M A R Y |=====================
=================================================*/

 /*______________

    1 - PHOTO FILTER
    2 - SCROLL DIV

 ______________*/


/*========================================================= 1 =*/
/*===============================| PHOTO FILTER |==============*/
/*=============================================================*/

    /*==========| variables =*/

let divs = document.getElementsByClassName("div-photo");
let divTab = Array.from(divs);
let count = 0;

    /*==========| functions =*/

function reboot (counter){
    divTab[counter].classList.replace ("zoom", "normal");
    divTab[counter].classList.replace ("invisible", "normal");
}
function theDivs(counter, cat1, cat2){
    divTab[counter].classList.replace(cat1, cat2);
}

function applyfilter(category){

    count = 0;

    for (let i=0; i < divTab.length ; i++){
        reboot(i);

        if(category == 'restaure'){
            count ++
            reboot(i);
        } 
        else {
            if (! divTab[i].className.includes(category)){  
                theDivs(i, "normal", "invisible");
                theDivs(i, "zoom", "invisible");
            }
            else {
                count ++;
                console.log(divTab[i].className)
                theDivs(i, "normal", "zoom");
            }
        }
    }
    if (count < 1){
        alert ("Désolé, je n'ai pas encore de photo de cette categorie");
            for (let i=0; i < divTab.length ; i++){
                reboot(i);
            }
    }
}


/*========================================================= 2 =*/
/*===============================| SCROLL DIV |================*/
/*=============================================================*/


    /*===================== Use the Intersection Observer API =====================*/
    /*== https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API ==*/
    /*=============================================================================*/


    /*==========| variables =*/

let ratio = 0.5; /*___ = 50% of visibilty for the element ___*/
let hideDiv = document.querySelectorAll('.hide');

    /*==========| Intersection Observer's options =*/

const options = {
    root: null,  
    rootMargin: '0px',
    threshold: ratio 
  }

function getInter (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        } 
    })   
}

    /*==========| Creation of IntersectionObserver  =*/

    const observer = new IntersectionObserver(getInter, options);

    /*==========| Observation declaration for each '.hide' =*/

hideDiv.forEach(function (appear){
    observer.observe(appear)
})

/*=============================================================================================*/
/*=============================================================================================*/
/*=============================================================================================*/




