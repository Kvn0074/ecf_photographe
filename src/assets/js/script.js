/*========================*/
/*====== JavaScript ======*/
/*========================*/


/*==========================================*/
/*============| PHOTO FILTER |==============*/
/*==========================================*/

    /*==========| variables =*/

let divs = document.getElementsByClassName("div-photo");
let divTab = Array.from(divs);

    /*==========| functions =*/

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

/*==========================================*/
/*============| SCROLL DIV |================*/
/*==========================================*/

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

/*========================*/
/*========================*/
/*========================*/




