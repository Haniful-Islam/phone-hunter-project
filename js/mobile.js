const searchPhone = () => {
    const searchText = document.getElementById('input-field');
    const searchValue = searchText.value;

    // clear data
    searchText.value = '';
    // errorMessage
    if (searchValue == '') {
        const errorMessage = document.getElementById('erro-message');
        errorMessage.style.color = "red";
        errorMessage.innerText = 'Please write some to display!!!'
    }
    else {
        // load data
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
        fetch(url)
            .then(response => response.json())
            .then(data => displayPhoneResult(data.data))
    }
}

const displayPhoneResult = phones => {
    // console.log(phones)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = "";
    for (const phone of phones.slice(0, 20)) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
            <div class="card h-100 p-4">
                <img  src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h3 class="card-title">${phone.brand}</h3>
                <h4 class="card-title">${phone.phone_name}</h4>
                </div>
                <a  onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-outline-info">See Details</a>
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
            <div class="card-body">
                <h3 class="card-title">${phone.brand}</h3>
                <h4 class="card-title">${phone.name}</h4 >
                <h4 class="text-info">MainFeatures:</h4>
                <p><span class="fw-bold">ReleaseDate:</span> ${phone.releaseDate}</p>                
                <p><span class="fw-bold">Storage:</span> ${phone.mainFeatures.storage}</p> 
                <p><span class="fw-bold">DisplaySize:</span> ${phone.mainFeatures.displaySize}</p>                
                <p><span class="fw-bold">Chipset:</span> ${phone.mainFeatures.chipSet}</p>  
                <p> <span class="fw-bold">Sensors:</span> ${phone.mainFeatures.sensors}</p>  

                <h4 class="text-info">OthersFeatures:</h4>  
                <p><span class="fw-bold">WLAN:</span> ${phone.others.WLAN}</p>                           
                <p><span class="fw-bold">Bluetooth:</span> ${phone.others.Bluetooth}</p>                           
                   
                <p><span class="fw-bold">GPS:</span>${phone.others.GPS}</p>                        
            </div >
        </div >

    `;
    phoneDetails.appendChild(div);
}