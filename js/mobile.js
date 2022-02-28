const searchMobile = () => {
    const searchText = document.getElementById('input-field');
    const searchBox = searchText.value;
    // data clear
    searchText.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMobileResult(data.data))
}

const displayMobileResult = mobiles => {
    // console.log(mobiles);
    const searchResult = document.getElementById('search-result');
    for (const mobile of mobiles) {
        console.log(mobile);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img height="350px" src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title">${mobile.brand}</h3>
                <h4 class="card-title">${mobile.phone_name}</h4>
                <p class="card-text"></p>
                </div>
            </div>
        `
        searchResult.appendChild(div);

    }
}
