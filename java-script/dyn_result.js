window.addEventListener("load", prodFiche);

function prodFiche(){
    const url = new URL(window.location);
    const searchParams =url.searchParams;
    let categorie =searchParams.get("categorie");
    const productficheHTML =document.getElementById('productfiche');
    console.log(categorie);
    for (const product of producten) {
        console.log(product.naam)
        if (product.naam === categorie){
            console.log(product.naam);
            const productfiche =

            `<h1>Productfiche</h1>
            <p>Product Naam: ${product.naam}</p>
            <p>Pruduct Foto</p>
            <p><img src="${product.afbeelding}" alt= "productfoto"></p>
            <p>Product categorie: ${product.categorieen}</p>
            <p>Product Prijs: ${product.prijs}</p>
            <p>Page Link : <a href=" ${product.pageLink}">${product.pageLink}</a></p>
            <p>Beschrijving: ${product.beschrijving}</p>
            <p>Specificaties: ${product.specificatie}</p> `;

        console.log(productfiche);
        productficheHTML.innerHTML = productfiche;

            }
        }
}