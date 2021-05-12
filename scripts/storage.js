class Storage {
    
    static addToStorage(newWish) {
        let wishes=this.getWishesFromStorage();


        wishes.push(newWish);
        localStorage.setItem("wishes", JSON.stringify(wishes));
    }

    static getWishesFromStorage() {
        let wishes;
        if (localStorage.getItem("wishes") === null) {
            wishes = [];
        } else {
            wishes = JSON.parse(localStorage.getItem("wishes"))
        }
        return wishes;
    }


    static removeFromStorage(item) {
        let removeName = item.children[1].innerHTML;
        let wishes = this.getWishesFromStorage();
        wishes.forEach((element, index)=>{
            if(removeName==element.name) {
                wishes.splice(index,1);
                localStorage.setItem("wishes", JSON.stringify(wishes))
            };
        })
    }
}