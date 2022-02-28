/*========================*/
/*====== JavaScript ======*/
/*========================*/

/*=======================| Init Variable =*/

let divs = document.getElementsByClassName("div-photo");
let filter = document.getElementsByClassName("li-filter");
let divTab = Array.from(divs);
let filterTab = Array.from(filter);



console.log("mon tableau :" + filterTab.className);
console.log("mon tableau 2 :" + divTab);

function addfilter (){
    for (let a=0 ; a < filterTab.length ; a++){
     console.log(filterTab[a].className)
    }
}
addfilter();

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



