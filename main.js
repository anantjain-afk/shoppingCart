shop = document.getElementById('shop')

shopItemData = [{
    id : 'adsaasd',
    name : "Casual shirt",
    price : '$ 45',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    img:'images/img-1.jpg'

},{
    id : 'grbdvgfdb',
    name : "Office Shirt",
    price : '$ 100',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    img:'images/img-2.jpg'
},{
    id : 'agdafdafd',
    name : "T Shirt",
    price : '$ 30',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    img:'images/img-3.jpg'
},{
    id : 'adsadasdasdsaasd',
    name : "Mens Suit",
    price : '$ 300',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    img:'images/img-4.jpg'
}]

basket = []

generateItem = () => {
    
    return shop.innerHTML = shopItemData.map((x)=>{
        let {id,name,price,desc,img} = x 
        return `<div id = product-id-${id} class="item">
            <img src="${img}" width=220>
            <div class="details">
                <h3>${name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div class="price-quantity">
                    <h3>${price}</h3>
                    <div class="howMany">
                        <i onclick = "decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id = ${id} class="quantity">0</div>
                        <i onclick = "increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    
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
    

}
decrement = (id) => {
    let selectedItem = id 
    let search = basket.find((x)=>{
        return x.id === selectedItem.id
    })
    
    if( search.item === 0){
        return ; 
    }
    else{
        search.item -= 1    
    }

    update(selectedItem.id);
    
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
}