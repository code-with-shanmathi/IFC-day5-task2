let popup_overlay=document.querySelector(".popup-overlay");
let popup_box=document.querySelector(".popup-box");
let popup_overlay2=document.querySelector(".popup-overlay2");
let buy_now=document.querySelector(".buy-now");

function view(){
    popup_overlay.style.display="block";
    popup_box.style.display="grid";
    popup_box.style.gridTemplateRows = "auto auto";
}


function cancel(){
    popup_overlay.style.display="none";
    popup_box.style.display="none";
}

function buy(event){
    popup_overlay2.style.display="block";
    buy_now.style.display="block";
}

function buy_all(event){
    popup_overlay.style.display="none";
    popup_box.style.display="none";
    popup_overlay2.style.display="block";
    buy_now.style.display="block";
}

function cancelBuy() {
    popup_overlay2.style.display = "none";
    buy_now.style.display = "none";
}

function add(event){
    let card = event.target.closest(".card");
    let image = card.querySelector("img").src;
    let title = card.querySelector("h2").textContent;
    let price = card.querySelector("h3").textContent;

    let div = document.createElement("div");
    div.style.display="inline"
    div.setAttribute("class", "card");
    div.innerHTML = `<img src=${image}>
                <h2>${title}</h2>
                <h3>${price}</h3>`

    document.querySelector(".cart-products").appendChild(div);
}