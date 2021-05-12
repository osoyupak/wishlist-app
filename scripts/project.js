//Dom Elements
const nameInput = document.getElementById("nameInput");
const priceInput = document.getElementById("priceInput");
const websiteInput = document.getElementById("websiteInput");
const websiteLinkInput = document.getElementById("websiteLinkInput");
const imageInput = document.getElementById("imageInput");
const submitButton = document.getElementById("submitButton");
const form = document.getElementsByTagName("form")[0];
const cardBody = document.querySelectorAll(".card-body")[1];


allEventListeners();


function allEventListeners (){
    
form.addEventListener("submit", createNewWish);
cardBody.addEventListener("click", removeItem)

document.addEventListener("DOMContentLoaded", UI.loadFromStorage);

}

function removeItem(e) {
    if(e.target.className=="btn btn-danger px-4") {
        let item = e.target.parentElement.parentElement;
        item.remove();

        Storage.removeFromStorage(item);
        
    }

}



function createNewWish(e) {

    const name = nameInput.value;
    const price = priceInput.value;
    const website = websiteInput.value;
    const websiteLink = websiteLinkInput.value;
    const image = imageInput.value;

    if(name=="" || price=="" || website=="" || websiteLinkInput=="" || image=="") {
        console.log("Please fullfill the form.")
    } else {

        const newWish = new Wish(name, price, website, websiteLink,image);
        
        UI.addToUI(newWish);
        Storage.addToStorage(newWish);

    }

    UI.clearInputs(nameInput, priceInput, websiteInput, websiteLinkInput,imageInput);


    e.preventDefault();
}


