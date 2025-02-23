window.addEventListener("load", init);
function init(){
    let select = document.getElementById("categorie");
    let categorieenHTML = {};
    for (const huidigeCategorie of categorieen){
        let element = document.createElement('optgroup');
        element.label =huidigeCategorie;
        console.log(element);
        categorieenHTML[huidigeCategorie] =element;
        select.appendChild(element);
    }
    for (let i = 0; i < producten.length; i++){
        let optie =producten[i];
        let element =document.createElement("option");
        element.value =optie.naam;
        element.innerHTML = optie.naam;
        categorieenHTML[optie.categorieen].appendChild(element);
    }

}
