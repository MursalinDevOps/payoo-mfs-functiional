// PIN
pinNumber = getInputPinById("add-money-pin");
 // AVAILABLE BALANCE
//  
// ADD MONEY ARITHMETICS
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    addMoney = getInputValueById("add-money-amount");
    availableBalance = getInnerTextById("available-balance");
    pinNumber = getInputValueById("add-money-pin");

    if (pinNumber === 1234) {
      const newBalance = availableBalance + addMoney;
      document.getElementById("available-balance").innerText = newBalance;
      //   TRANSACTION HISTORY
      const p = document.createElement("p");
    p.innerHTML = `
    <p class="bg-green-800 rounded-xl text-white p-4">Add money Tk.${addMoney}, New balance Tk.${newBalance}</p>
    `
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Wrong credentials! Try again.");
    }
  });

//   WITHDRAW ARITHMETICS

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  availableBalance = getInnerTextById("available-balance");
  withdrawAmount = getInputValueById("withdraw-amount");
  pinNumber = getInputPinById('withdraw-money-pin');
  if (pinNumber === 1234) {
    if( withdrawAmount > availableBalance){
        alert('Insufficient Balance');
        return;
    }
    const newBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText = newBalance;

    
        //   TRANSACTION HISTORY
        const p = document.createElement("p");
        p.innerHTML = ` 
        <p class="bg-red-800 rounded-xl text-white p-4">
        Withdraw Tk.${withdrawAmount}, New balance Tk.${newBalance}
        </p>
        `
        document.getElementById("transaction-container").appendChild(p);
      }
});

// TOGGLE
document.getElementById("btn-add-money").addEventListener("click", function () {
  btnToggle("add-money-form");
});
document.getElementById("btn-withdraw").addEventListener("click", function () {
  btnToggle("withdraw-form");
});
document
  .getElementById("btn-transaction")
  .addEventListener("click", function () {
    btnToggle("transaction-history-container");
  });
