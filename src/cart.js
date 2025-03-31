let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

// now we are gonna pull all the saved data inside the cart page as well .
basket = JSON.parse(localStorage.getItem("data")) || [];
let calculation = () => {
  if (basket.length != 0) {
    allItems = basket.map((el) => el.item).reduce((acc, el) => acc + el);
    document.getElementById("cart-amount").innerHTML = allItems;
    localStorage.setItem("data", JSON.stringify(basket));
  }else{
    document.getElementById("cart-amount").innerHTML = 0
  }
};
// we are doing this , because , individual item data gets stored and solved even if you refresh the page , but the cart amount does not get stored , so we will just call it every time the page is running or doing somethng
calculation();

let generateFinalCart = () => {
  if (basket.length === 0) {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
            <h2>Cart is Empty</h2>    
            <a href="index.html">
                <button class = 'homeBtn'>Back To Home</button>
            </a>
        `;
  } else {
    return (shoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemData.find((y) => y.id === id) || [];
        return `
            <div class="cart-item">
              <img width="100" src=${search.img} alt="" />
              <div class="details">
      
                <div class="title-price-x">
                    <h4 class="title-price">
                      <p>${search.name}</p>
                      <p class="cart-item-price">${search.price}</p>
                    </h4>
                    <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                </div>
                <div class="howMany">
                        <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id = ${id} class="quantity"> 
                            ${item}
                        </div>        
                        <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3>$ ${item * search.price}</h3>
      
              </div>
            </div>
            `;
      })
      .join(""));
  }
};
generateFinalCart();
increment = (id) => {
    let selectedItem = id 
    let search = basket.find((x)=>{
        return x.id === selectedItem.id
    })
    if( search === undefined){
        basket.push({
            id : selectedItem.id, 
            item : 1, 
        })
    }
    else{
        search.item += 1    
    }
    generateFinalCart();
    update(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket)) ;
    
    

}
decrement = (id) => {
    let selectedItem = id 
    let search = basket.find((x)=>{
        return x.id === selectedItem.id
    })
    if (search===undefined) return ;  // we are doing this , because we are getting a error everytime , we are doing minus when we have nothing in the basket . 
    if( search.item === 0){
        return ; 
    }
    else{
        search.item -= 1    
    }
    update(selectedItem.id);
    
    basket = basket.filter(x => {
        return x.item != 0 
    })
    generateFinalCart();
    localStorage.setItem("data",JSON.stringify(basket)) ;

    
}
update = (id) => {
    search = basket.find((y)=>{
        return y.id === id 
    })
    document.getElementById(id).innerHTML = search.item
    calculation()
    TotalAmount();

}

removeItem = (id) => {
    let selectedItem = id 
    // console.log(basket)
    basket = basket.filter((x)=>{
        return x.id !== selectedItem.id 
    })
    // console.log(basket)
    generateFinalCart();
    TotalAmount();
    calculation();
    localStorage.setItem("data",JSON.stringify(basket)) ;

}
let clearCart = () => {
    basket = [];
    calculation();
    generateFinalCart();
    localStorage.setItem("data", JSON.stringify(basket));
  };
let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { item, id } = x;
          let search = shopItemData.find((y) => y.id === id) || [];
  
          return item * search.price;
        })
        .reduce((x, y) => x + y, 0);
      // console.log(amount);
      label.innerHTML = `
      <h2>Total Bill : $ ${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `;
    } else return;
  };
  
  TotalAmount();
