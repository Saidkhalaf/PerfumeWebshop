window.addEventListener('load', init);

function init() {
    const query = window.location.search;
    const searchParams = new URLSearchParams(query);

    const inputElements = [
        { id: '#voornaam', param: 'voornaam' },
        { id: '#achternaam', param: 'achternaam' },
        { id: '#telefoonNummer', param: 'telefoonNummer' },
        { id: '#email', param: 'email' },
        { id: '#leveringsadres', param: 'leveringsadres' },
        { id: '#gemeente', param: 'gemeente' },
        { id: '#grootte', param: 'grootte' },
        { id: '#duurzaamheid', param: 'duurzaamheid' },
        { id: '#geur', param: 'geur' },
        { id: '#categorie', param: 'categorie' },
        { id: '#beschrijving', param: 'Informatie' }
    ];

    inputElements.forEach(element => {
        const input = document.getElementById(element.id);
        const value = searchParams.get(element.param);
        input.innerText = value;
    });
}