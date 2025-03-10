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
                    <div class="quantity">
                        <i onclick = "decrement()" class="bi bi-dash-lg"></i>
                        <div id = ${id} class="quantity">0</div>
                        <i onclick = "increment()" class="bi bi-plus-lg"></i>
                    </div>
                    
                </div>
            </div>
        </div>`
    }).join("")
}
generateItem()

increment = () => {

}
decrement = () => {

}
update = () => {

}