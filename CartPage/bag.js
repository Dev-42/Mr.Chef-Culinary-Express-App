import navbar from './components/navbar.js';

const nav = document.getElementById('navBar');
const bagContainer = document.getElementById('bagPart1221');
const itemContainer = document.getElementById('pricePart1221')
// const priceContainer = document.getElementById('price213');
const items = document.getElementById('item1221');
const emptyCartURL = '../CartPage/emptyCart.html';

// Event delegation for remove button clicks
bagContainer.addEventListener('click', handleRemoveFromBag);

// Initialize the cart and display it
let cart = getCartFromLocalStorage();

if (cart.length === 0) {
  window.location.href = emptyCartURL;
} else {
  displayCart();
  calculateTotal();
}

function getCartFromLocalStorage() {
  return JSON.parse(localStorage.getItem('food-items')) || [];
}

function updateCartInLocalStorage(cart) {
  localStorage.setItem('food-items', JSON.stringify(cart));
}

function displayCart() {
  bagContainer.innerHTML = '';

  cart.forEach((item) => {
    const bagDiv = createBagItemElement(item);
    bagContainer.append(bagDiv);
  });

  items.textContent = `(${cart.length})`;
}

function createBagItemElement(item) {
  const bagDiv = document.createElement('div');
  bagDiv.setAttribute('id', 'bagItem1221');

  const productImageDiv = document.createElement('div');
  productImageDiv.setAttribute('id', 'bagImage1221');
  const proimg = document.createElement('img');
  proimg.setAttribute('src', item.img);
  proimg.setAttribute('id', 'bagImg1221');
  productImageDiv.append(proimg);

  const bagContents = document.createElement('div');
  bagContents.setAttribute('id', 'bagFlex1221');

  const h3 = document.createElement('h3');
  h3.setAttribute('id', 'bagHead1221');
  h3.textContent = item.title;

  const mainFlex = document.createElement('div');
  mainFlex.setAttribute('id', 'quanflex1221');

  const span = document.createElement('span');
  span.setAttribute('id', 'span1221');
  span.textContent = 'Quantity';

  const quanBar = document.createElement('div');
  quanBar.setAttribute('id', 'quandevBar1221');

  const imgIconminus = document.createElement('img');
  imgIconminus.setAttribute('src', 'https://www.svgrepo.com/show/146105/minus.svg');
  imgIconminus.setAttribute('alt', 'minusButton');
  imgIconminus.setAttribute('id', 'minus-btn1221');
  imgIconminus.setAttribute('class', 'img-fluid');

  const spanNumBox = document.createElement('span');
  spanNumBox.setAttribute('id', 'num1221');
  spanNumBox.textContent = '1';

  const imgIconplus = document.createElement('img');
  imgIconplus.setAttribute('src', 'https://img.freepik.com/free-icon/add-button-with-plus-symbol-black-circle_318-48599.jpg');
  imgIconplus.setAttribute('id', 'plus-btn1221');

  const paraPrice = document.createElement('p');
  paraPrice.setAttribute('id', 'price1221');
  paraPrice.textContent = `₹${item.price}`;

  mainFlex.append(span, quanBar, imgIconminus, spanNumBox, imgIconplus, paraPrice);

  const removeCartBtn = document.createElement('button');
  removeCartBtn.setAttribute('id', 'delete1221');
  removeCartBtn.textContent = 'Remove from Bag';

  bagContents.append(h3, mainFlex, removeCartBtn);
  bagDiv.append(productImageDiv, bagContents);

  return bagDiv;
}

function handleRemoveFromBag(event) {
  if (event.target.id === 'delete1221') {
    const bagItem = event.target.closest('#bagItem1221');
    const index = Array.from(bagContainer.children).indexOf(bagItem);

    if (index !== -1) {
      cart.splice(index, 1);
      bagItem.style.display = 'none';
      updateCartInLocalStorage(cart);
      items.textContent = `(${cart.length})`;
      calculateTotal();

      if (cart.length === 0) {
        window.location.href = emptyCartURL;
      }
    }
  }
}

function calculateTotal() {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // priceContainer.textContent = `₹ ${totalPrice}`;
  itemContainer.innerHTML = ""

  let priceDetDiv = document.createElement('div')
    priceDetDiv.setAttribute('id','priceDet1221')
      let h4 = document.createElement('h4')
      h4.setAttribute('id','dev121')
      h4.textContent = "Price Details"
      priceDetDiv.append(h4)
      itemContainer.append(priceDetDiv)

      let hr = document.createElement('hr')
      hr.setAttribute('id','none')

      let totalPriceDiv = document.createElement('div')
      totalPriceDiv.setAttribute('id','priceTot121')

      let pricePara = document.createElement('p')
      pricePara.setAttribute('id','priceDet121')
      pricePara.textContent = `Total (${cart.length} item${cart.length > 1 ? 's' : ''})`;

      let paraPrice = document.createElement('p')
      paraPrice.setAttribute('id','price213')
      paraPrice.textContent = `₹ ${totalPrice}`

      let btn = document.createElement('button')
      btn.setAttribute('id','priceRem121')
      btn.textContent = "Proceed to Checkout"

      totalPriceDiv.append(pricePara,paraPrice)
  cart.map(function(item){
  
      let divDetails = document.createElement('div')
      divDetails.setAttribute('id','priceDev121')
      let pDet = document.createElement('p')
      pDet.setAttribute('id','paraDet121')
      pDet.textContent = item.title;

      let pPrice = document.createElement('p')
      pPrice.setAttribute('id','pricedet121')
      pPrice.textContent = `₹ ${item.price}`

      divDetails.append(pDet,pPrice)
      itemContainer.append(divDetails,hr,totalPriceDiv,btn)
  })
  // const priceDet121 = document.getElementById('priceDet121');
  // if (priceDet121) {
  //   priceDet121.textContent = `Total (${cart.length} item${cart.length > 1 ? 's' : ''})`;
  // }
}

nav.innerHTML = navbar();
