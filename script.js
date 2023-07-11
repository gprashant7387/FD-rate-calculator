var banks = [
    { name: "Bank A", interestRate: 6 },
    { name: "Bank B", interestRate: 7 },
    { name: "Bank C", interestRate: 7.5 },
    // Add more banks and their interest rates here
];

function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var bankIndex = document.getElementById('bank').selectedIndex;
    var rate = banks[bankIndex].interestRate;
    var time = parseFloat(document.getElementById('time').value);

    var interest = (principal * rate * time) / 100;
    var maturityAmount = principal + interest;

    document.getElementById('result').innerHTML = "Maturity Amount: " + maturityAmount.toFixed(2);
}
