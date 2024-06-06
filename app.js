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
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.mainButton.setText(`Общая цена товаров: ${totalPrice}`);
            if (!tg.mainButton.isVisible) {
                tg.mainButton.show();
            }
        } else {
            tg.mainButton.hide();
        }
    } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Добавить в корзину";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.mainButton.setText(`Общая цена товаров: ${totalPrice}`);
            if (!tg.mainButton.isVisible) {
                tg.mainButton.show();
            }
        } else {
            tg.mainButton.hide();
        }
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
    toggleItem(this, 'item1', 450);
});
document.getElementById("btn2").addEventListener("click", function() {
    toggleItem(this, 'item2', 200);
});
document.getElementById("btn3").addEventListener("click", function() {
    toggleItem(this, 'item3', 300);
});
document.getElementById("btn4").addEventListener("click", function() {
    toggleItem(this, 'item4', 400);
});
document.getElementById("btn5").addEventListener("click", function() {
    toggleItem(this, 'item5', 500);
});
document.getElementById("btn6").addEventListener("click", function() {
    toggleItem(this, 'item6', 600);
});