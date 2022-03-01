const searchPhone = () => {
    const searchText = document.getElementById('input-field');
    const searchValue = searchText.value;
    // console.log(searchValue);
    // clear data
    searchText.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhoneResult(data.data))
}
const displayPhoneResult = phones => {
    // console.log(phones)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = "";
    for (const phone of phones) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
            <div class="card h-100 p-4">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title">${phone.brand.slice(0, 20)}</h3>
                <h4 class="card-title">${phone.phone_name.slice(0, 20)}</h4>
                </div>
                <a  onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-outline-info">Details</a>
            </div>
        `;
        searchResult.appendChild(div);

    }
}
const loadPhoneDetails = phoneId => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(response => response.json())
        .then(data => singleDisplayDetails(data.data))
}

const singleDisplayDetails = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');

    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
        <div class="card px-5 pt-3">
            <img  src="${phone.image}" class=" card-img-top" alt="...">
            <div style="text-align:center" class="card-body">
                <h3 class="card-title">${phone.brand}</h3>
                <h4 class="card-title">${phone.name}</h4 >
                <h4>MainFeatures:</h4>
                <p>ReleaseDate: ${phone.releaseDate}</p>                
                <p>Storage: ${phone.mainFeatures.storage}</p> 
                <p>DisplaySize: ${phone.mainFeatures.displaySize}</p>                
                <p>Chipset: ${phone.mainFeatures.chipSet}</p>  
                <p>Sensors: ${phone.mainFeatures.sensors}</p>  
                <h4>OthersFeatures:</h4>  
                <p>Chipset: ${phone.others.WLAN}</p>                           
                <p>Chipset: ${phone.others.Bluetooth}</p>                           
                <p>Chipset: ${phone.others.GPS}</p>                           
            </div >
        </div >
         
    `;
    phoneDetails.appendChild(div);


}