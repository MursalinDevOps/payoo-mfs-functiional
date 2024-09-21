function getInputValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
};
function getInputPinById(id){
    const inputPin = parseFloat(document.getElementById(id).value);
    return inputPin;
};

function getInnerTextById(id){
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);
    return availableBalance; 
};

function btnToggle(id){
    document.getElementById('add-money-form').classList.add("hidden");
    document.getElementById('withdraw-form').classList.add("hidden");
    document.getElementById('transaction-history-container').classList.add("hidden");
    // toggle
    document.getElementById(id).classList.remove("hidden");
    
} 