import navbar from './components/navbar.js'

let nav = document.getElementById('navBar')
nav.innerHTML = navbar()

// Cart Page logic
let bagContainer = document.getElementById('bagPart1221')
let cart = JSON.parse(localStorage.getItem('food-items')) || []

if(cart.length === 0){
    window.location.href = '../CartPage/emptyCart.html'
}
else{
    displayCart()
}
function displayCart(){
    bagContainer.innerHTML = "";
    cart.map(function(item){
        let bagDiv = document.createElement('div')
        bagDiv.setAttribute('id','bagItem1221')


        // Image portion
        let productImageDiv = document.createElement('div')
        productImageDiv.setAttribute('id','bagImage1221')
        let proimg = document.createElement('img')
        proimg.setAttribute('src',item.img)
        proimg.setAttribute('id','bagImg1221')
        productImageDiv.append(proimg)

        // Bag Contents

        let bagContents = document.createElement('div')
        bagContents.setAttribute('id','bagFlex1221')

        let h3 = document.createElement('h3')
        h3.setAttribute('id','bagHead1221')
        h3.textContent = item.title;

        let mainFlex = document.createElement('div')
        mainFlex.setAttribute('id','quanflex1221')

        let span = document.createElement('span')
        span.setAttribute('id','span1221')
        span.textContent = "Quantity";

        let quanBar = document.createElement('div')
        quanBar.setAttribute('id','quandevBar1221')
        let imgIconminus = document.createElement('img')
        imgIconminus.setAttribute('src','https://www.svgrepo.com/show/146105/minus.svg') 
        imgIconminus.setAttribute('alt','minusButton')
        imgIconminus.setAttribute('id','minus-btn1221')
        imgIconminus.setAttribute('class','img-fluid')
        let spanNumBox = document.createElement('span')
        spanNumBox.setAttribute('id','num1221')
        spanNumBox.textContent = "1"
        let imgIconplus = document.createElement('img')
        imgIconplus.setAttribute('src','https://img.freepik.com/free-icon/add-button-with-plus-symbol-black-circle_318-48599.jpg')
        imgIconplus.setAttribute('id','plus-btn1221')
        let paraPrice = document.createElement('p')
        paraPrice.setAttribute('id','price1221')
        paraPrice.textContent = '₹' + item.price;

        mainFlex.append(span,quanBar,imgIconminus,spanNumBox,imgIconplus,paraPrice)
        let removeCartBtn = document.createElement('button')
        removeCartBtn.setAttribute('id','delete1221')
        removeCartBtn.textContent = "Remove from Bag"

        bagContents.append(h3,mainFlex,removeCartBtn)

        bagDiv.append(productImageDiv,bagContents);
        bagContainer.append(bagDiv)
    })
}