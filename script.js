function calculateTotal() {
    let product = document.getElementById("product").value.trim();
    let price = document.getElementById("price").value;
    let qty = document.getElementById("quantity").value;
    let total = document.getElementById("total");

    if (product === "" || price === "" || qty === "" || price <= 0 || qty <= 0) {
        total.style.color = "#e84118";
        total.innerText = "❌ Please enter valid product, price & quantity";
    } else {
        let totalPrice = price * qty;
        total.style.color = "#4cd137";
        total.innerText =
            "✔ " + product + " Total = Rs. " + totalPrice;
    }
}
