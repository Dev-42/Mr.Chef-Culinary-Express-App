function data(){
    window.location.href = "payment_gateway.html"
}
var cartProduct = JSON.parse(localStorage.getItem("food-items")) || [];
console.log(cartProduct);
if (cartProduct.length > 0) {
    cartTotal();
    displayCart();
} else {
    var t = document.createElement("h1");
    t.textContent = "No Items in Cart"
    document.querySelector("#parent").append(t);
}

function displayCart() {
    cartProduct.map(function (i) {

        var image = document.createElement("img");
        image.setAttribute("src", "shoe.jpg");
        image.setAttribute("alt", i.name)
        var name = document.createElement("h4");
        name.textContent = i.name;
        var price = document.createElement("p");
        price.textContent = "₹ " + i.price;
        var offer = document.createElement("p");
        offer.textContent = "₹ " + i.strikedoffprice;
        var box = document.createElement("div");

        var div = document.createElement("div");
        box.append(price, offer);
        div.append(image, name, box)
        document.getElementById("parent").append(div);
    });
}


// console.log(total);
function cartTotal() {
    var total = cartProduct.reduce(function (acc, currelem) {
        return acc + currelem.strikedoffprice;
    }, 0);
    var div = document.createElement("div");
    div.setAttribute("id", "cart");

    var p1 = document.createElement("p");
    p1.textContent = "Total Cart Value";

    var p2 = document.createElement("p");
    p2.textContent = total;

    div.append(p1, p2);
    document.querySelector("body").append(div);
}