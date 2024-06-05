let tg = window.Telegram.WebApp;

tg.expand();

tg.mainButton.textColor = "#FFFFFF";
tg.mainButton.color = "#2cab37";

let items = [];

function toggleItem(btn, itemId, price) {
    let item = items.find(i => i.id === itemId);
    if (!item) {
        let newItem = { id: itemId, price: price };
        items.push(newItem);
        btn.classList.add('added-to-cart');
        btn.innerText = "Удалить из корзины";
    } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Добавить в корзину";
    }
    let totalPrice = items.reduce((total, item) => total + item.price, 0);
    if (totalPrice > 0) {
        tg.mainButton.setText(`Общая цена товаров: ${totalPrice} руб.`);
        if (!tg.mainButton.isVisible) {
            tg.mainButton.show();
        }
    } else {
        tg.mainButton.hide();
    }
}

Telegram.WebApp.onEvent("mainButtonClicked", function() {
    let data = {
        items: items,
        totalPrice: calculateTotalPrice()
    };
    tg.sendData(JSON.stringify(data));
});

function calculateTotalPrice() {
    return items.reduce((total, item) => total + item.price, 0);
}

document.getElementById("btn1").addEventListener("click", function() {
    toggleItem(this, 'item1', 440);
});
document.getElementById("btn2").addEventListener("click", function() {
    toggleItem(this, 'item2', 450);
});
document.getElementById("btn3").addEventListener("click", function() {
    toggleItem(this, 'item3', 450);
});
document.getElementById("btn4").addEventListener("click", function() {
    toggleItem(this, 'item4', 450);
});
document.getElementById("btn5").addEventListener("click", function() {
    toggleItem(this, 'item5', 450);
});
document.getElementById("btn6").addEventListener("click", function() {
    toggleItem(this, 'item6', 450);
});
document.getElementById("btn7").addEventListener("click", function() {
    toggleItem(this, 'item7', 450);
});
document.getElementById("btn8").addEventListener("click", function() {
    toggleItem(this, 'item8', 460);
});
document.getElementById("btn9").addEventListener("click", function() {
    toggleItem(this, 'item9', 460);
});
document.getElementById("btn10").addEventListener("click", function() {
    toggleItem(this, 'item10', 460);
});
document.getElementById("btn11").addEventListener("click", function() {
    toggleItem(this, 'item11', 460);
});
document.getElementById("btn12").addEventListener("click", function() {
    toggleItem(this, 'item12', 460);
});
document.getElementById("btn13").addEventListener("click", function() {
    toggleItem(this, 'item13', 460);
});
document.getElementById("btn14").addEventListener("click", function() {
    toggleItem(this, 'item14', 480);
});
document.getElementById("btn15").addEventListener("click", function() {
    toggleItem(this, 'item15', 490);
});
document.getElementById("btn16").addEventListener("click", function() {
    toggleItem(this, 'item16', 490);
});
