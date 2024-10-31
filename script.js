// Ambil elemen saldo
let balanceElement = document.getElementById("balance-amount");
let balanceUsdElement = document.getElementById("balance-usd");

// Inisialisasi saldo awal
let balance = 0.00; // dalam ETH

// Fungsi Receive untuk menambahkan saldo
function receive() {
    let amount = parseFloat(prompt("Enter amount to receive (ETH):"));
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalanceDisplay();
    } else {
        alert("Invalid amount.");
    }
}

// Fungsi Send untuk mengurangi saldo
function send() {
    let amount = parseFloat(prompt("Enter amount to send (ETH):"));
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            updateBalanceDisplay();
        } else {
            alert("Insufficient balance.");
        }
    } else {
        alert("Invalid amount.");
    }
}

// Fungsi untuk memperbarui tampilan saldo
function updateBalanceDisplay() {
    balanceElement.textContent = `${balance.toFixed(2)} ETH`;
    balanceUsdElement.textContent = `≈ $${(balance * 2500).toFixed(2)} USD`; // Estimasi ETH ke USD
}
