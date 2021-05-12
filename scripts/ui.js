class UI {
    static addToUI (newWish){

        const wishList=document.getElementById("wishList");

        wishList.innerHTML+=`<tr>
                      
        <td><img src="${newWish.image}" class="img-fluid"  alt="...">
        </td>
        <td>${newWish.name}</td>
        <td>${newWish.price}</td>
        <td><a class="btn btn-warning" href="${newWish.websiteLink}" role="button" target="_blank">${newWish.website}</a>
        </td>
        <td><button type="button" class="btn btn-danger px-4">Sil</button>
        </td>
      </tr>`
    }

    static clearInputs(el1, el2, el3, el4, el5) {
        el1.value="";
        el2.value="";
        el3.value="";
        el4.value="";
        el5.value="";
    }

    static loadFromStorage() {
        let wishes = Storage.getWishesFromStorage();

        const wishList=document.getElementById("wishList");

        wishes.forEach((el) => {
            
            wishList.innerHTML+=`<tr>
                          
            <td><img src="${el.image}" class="img-fluid"  alt="...">
            </td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td><a class="btn btn-warning" href="${el.websiteLink}" role="button" target="_blank">${el.website}</a>
            </td>
            <td><button type="button" class="btn btn-danger px-4">Sil</button>
            </td>
          </tr>`


        });
    }
}