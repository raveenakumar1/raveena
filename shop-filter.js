

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
    const items = document.querySelectorAll('.shop-item');

    function filterItems() {
        const selectedFilters = [];

        //getting selected boxes
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedFilters.push(checkbox.value);
            }
        });

        //ro show or hide items
        items.forEach(item => {
            if (selectedFilters.length === 0) {
                //if no filters are selected, show all items
                item.style.display = "block";
            } else {
                //based on the filters, hide or show items
                const matchesFilter = selectedFilters.some(filter => item.classList.contains(filter));
                item.style.display = matchesFilter ? "block" : "none";
            }
        });
    }

    //listening for check boxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterItems);
    });

    //show all items when pages loads
    filterItems();
});


//for when there is only one item in the shop screen
document.addEventListener("DOMContentLoaded", function () {
    let shopItems = document.querySelector(".shop-items");
    let items = shopItems.querySelectorAll(".shop-item");

    if (items.length === 1) {
        shopItems.style.width = "929px"; 
        shopItems.style.margin = "auto"; 
    } else {
        shopItems.style.width = ""; // reset to default
    }
});