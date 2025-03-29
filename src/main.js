shop = document.getElementById('shop')


// setting the basket and getting items from the localStorage to save the data 
basket =JSON.parse(localStorage.getItem('data')) || []

generateItem = () => {
    
    return shop.innerHTML = shopItemData.map((x)=>{
        let {id,name,price,desc,img} = x 
        let search = basket.find((x)=>x.id === id ) || []
        //we are gonna change the default zero to the saved quantity form the localStorage . 
        return `<div id = product-id-${id} class="item">
            <img src="${img}" width=220>
            <div class="details">
                <h3>${name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h3>${price}</h3>
                     
                    
                </div>
            </div>
        </div>`
    }).join("")
}
generateItem()

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
    localStorage.setItem("data",JSON.stringify(basket)) ;

    
}
update = (id) => {
    search = basket.find((y)=>{
        return y.id === id 
    })
    document.getElementById(id).innerHTML = search.item
    calculation()

}
let calculation = () => {
    allItems = basket.map((el)=>el.item).reduce((acc,el) => acc + el )
    document.getElementById('cart-amount').innerHTML = allItems
    // now if you refresh the page , all data of cartAmount , howMany that we have selected will be gone  .
    // for this we will use localStorage of browser : it will save your progress , even if you refresh the page or the Browser , your data will be saved . 
    localStorage.setItem('data',JSON.stringify(basket))
    // it is just setting the items inside the localStorage , now , we have to retrive the data from localStorage to use it . 
    // we will do some changes with the basket itself , what we are gonna do is that , we will set the basket to the data that we have stored in the localStorage  .
    
    // NOTE : it will still just saves the data in localStorage not ,  in the innerHTML of our itmes or quantity. 

}
// we are doing this , because , individual item data gets stored and solved even if you refresh the page , but the cart amount does not get stored , so we will just call it every time the page is running or doing somethng 
calculation()  
