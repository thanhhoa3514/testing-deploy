window.onload = function(event) {

    showPurchase();

}
var data;
var arrReceipt;
var userCurent;



function showPurchase() {
    arrReceipt = JSON.parse(localStorage.getItem("arrReceipt") || "[]");
    userCurent = JSON.parse(localStorage.getItem("userCurent"));

    console.log(userCurent)

    for (i = 0; i < arrReceipt.length; i++) {
        var receiptId = arrReceipt[i].receiptId;
        console.log(arrReceipt[i].userId);
        if (arrReceipt[i].userId === userCurent) {
            data = arrReceipt[i].listItem;
            var totalSum = 0;
            purChasedid(receiptId)
            itemList();
            for (j = 0; j < data.length; j++) {
                var proTit = data[j].title
                var proimgSrc = data[j].img
                var proPrice = data[j].price
                var proQuantity = data[j].sl
                purChasedItem(proTit, proimgSrc, proPrice, proQuantity, receiptId)
                console.log(proTit, proimgSrc, proPrice, proQuantity)
                totalSum = Number(totalSum) + proPrice * proQuantity;

            }
            totalCount(totalSum);

        }

    }

    function totalCount(total) {
        var purchaseRow = document.createElement('div')
        purchaseRow.classList.add('purchase-row')
        purchaseRow.innerText = proTit
        var purchaseItems = document.getElementsByClassName('purchase-items')[0]
        var itemPurchased =
            `<div class="purchase-total">
            <strong class="purchase-total-title">Total: ${total}đ</strong>
            </div>`;
        purchaseRow.innerHTML = itemPurchased
        purchaseItems.append(purchaseRow)
    } { /* <div style="text-align:center;width:100%;">Mã đơn hàng: ${receiptId}</div> */ }

    function itemList() {
        var purchaseRow = document.createElement('div')
        purchaseRow.classList.add('purchase-row')
        purchaseRow.innerText = proTit
        var purchaseItems = document.getElementsByClassName('purchase-items')[0]
        var itemPurchased = `
                    <span class="purchase-item purchase-header purchase-column">ITEM</span>
                    <span class="purchase-price purchase-header purchase-column">PRICE</span>
                    <span class="purchase-quantity purchase-header purchase-column">QUANTITY</span>
            `
        purchaseRow.innerHTML = itemPurchased
        purchaseItems.append(purchaseRow)
    }

    function purChasedid(receiptId) {
        var purchaseRow = document.createElement('div')
        purchaseRow.classList.add('purchase-row')
        purchaseRow.innerText = proTit
        var purchaseItems = document.getElementsByClassName('purchase-items')[0]
        var itemPurchased = `
        <p style="text-align: center; display: block; width:100%;">Mã đơn hàng: ${receiptId}</p>
        `
        purchaseRow.innerHTML = itemPurchased
        purchaseItems.append(purchaseRow)
    }

    function purChasedItem(proTit, proimgSrc, proPrice, proQuantity) {
        var purchaseRow = document.createElement('div')
        purchaseRow.classList.add('purchase-row')
        purchaseRow.innerText = proTit
        var purchaseItems = document.getElementsByClassName('purchase-items')[0]

        var itemPurchased = `
        <div class="purchase-item purchase-column" >
            <img class="purchase-item-image" src="${proimgSrc}" width="100" height="100">
            <span class="purchase-item-title">${proTit}</span>
            </div>
            <span class="purchase-price purchase-column">${proPrice}</span>
            <div class="purchase-quantity purchase-column">
            <div class="purchase-quantity-input">${proQuantity}</div>
            </div>
            
            
        </div>
        `
            // <span class = "purchase-receipt purchase-column" > $ { receiptID } < /span>
        purchaseRow.innerHTML = itemPurchased
        purchaseItems.append(purchaseRow)
    }

}