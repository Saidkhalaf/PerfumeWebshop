document.getElementById('applyFilter').addEventListener('click', function() {
    var nameFilter = document.getElementById('nameFilter').value.toLowerCase().trim();
    var minPriceFilter = parseFloat(document.getElementById('minPriceFilter').value);
    var maxPriceFilter = parseFloat(document.getElementById('maxPriceFilter').value);

    var products = document.getElementsByClassName('Product');
    for (var i = 0; i < products.length; i++) {
        var name = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase().trim();
        var price = parseFloat(products[i].getElementsByClassName('product-price')[0].innerText.replace('€', '').trim());

        if (name.includes(nameFilter) && (!isNaN(minPriceFilter) ? price >= minPriceFilter : true) && (!isNaN(maxPriceFilter) ? price <= maxPriceFilter : true)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
});