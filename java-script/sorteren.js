document.getElementById('sortSelect').addEventListener('change', function() {
    var sortValue = this.value.split('-');
    var sortType = sortValue[0];
    var sortDirection = sortValue[1];

    // Get all product categories
    var categories = Array.from(document.getElementsByClassName('categorie'));

    // Loop through each category
    categories.forEach(function(category) {
        var products = Array.from(category.getElementsByClassName('Product'));
        products.sort(function(a, b) {
            if (sortType === 'name') {
                var nameA = a.getElementsByTagName('h3')[0].innerText.toLowerCase();
                var nameB = b.getElementsByTagName('h3')[0].innerText.toLowerCase();
                if (sortDirection === 'asc') {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            } else if (sortType === 'price') {
                var priceA = parseFloat(a.getElementsByClassName('product-price')[0].innerText.replace('€', '').trim());
                var priceB = parseFloat(b.getElementsByClassName('product-price')[0].innerText.replace('€', '').trim());
                return sortDirection === 'asc' ? priceA - priceB : priceB - priceA;
            }
        });

        // Clear the category container
        category.innerHTML = '';

        // Add the sorted products back to the category container
        products.forEach(function(product) {
            category.appendChild(product);
        });
    });
});
