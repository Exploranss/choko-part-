let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF'
tg.MainButton.color = '#2cab37'

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
            tg.MainButton.setText('Сделать заказ');
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show();
            }
        } else {
            tg.MainButton.hide();
        }
    } else {
        let index = items.indexOf(item);
        items.splice(index, 1);
        btn.classList.remove('added-to-cart');
        btn.innerText = "Добавить в корзину";
        let totalPrice = items.reduce((total, item) => total + item.price, 0);
        if (totalPrice > 0) {
            tg.MainButton.setText('Cделать заказ');
            if (!tg.MainButton.isVisible) {
                tg.MainButton.show();
            }
        } else {
            tg.MainButton.hide();
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
document.getElementById("btn7").addEventListener("click", function() {
    toggleItem(this, 'item1', 450);
});
document.getElementById("btn8").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn9").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn10").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn11").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn12").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn13").addEventListener("click", function() {
    toggleItem(this, 'item1', 460);
});
document.getElementById("btn14").addEventListener("click", function() {
    toggleItem(this, 'item1', 480);
});
document.getElementById("btn15").addEventListener("click", function() {
    toggleItem(this, 'item1', 490);
});
document.getElementById("btn16").addEventListener("click", function() {
    toggleItem(this, 'item1', 490);
});

