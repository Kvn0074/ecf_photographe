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



