const rates = {};
const amountElement = document.getElementById("amount");
const currentFrom = document.getElementById("currencyFrom");
const currentTo  = document.getElementById("currencyTo");
const resultElement =  document.getElementById("result");
let result;

loadRates ();

async function loadRates () { 
  const response = await fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0");
  const data = await response.json();
  const result = data;
  
  rates.USD = result[5].Cur_OfficialRate;
  rates.EUR = result[6].Cur_OfficialRate;
  rates.PLN = result[7].Cur_OfficialRate / 10;
  rates.BYN = 1;
}
   
function calculate() {
  resultElement.innerHTML = `Result: ${convertAmount()}  ${getSymbol()}`;
}

function getSymbol () {
  return currentTo.value;
}

function convertAmount () {
  
   if (amountElement.value ===  "" ) {
    result = 0;
  }
  
   else if (currentFrom.value === currentTo.value) {    
    result = amountElement.value;
  }
  
  else if (currentFrom.value !== 'BYN') {
    const valueBYN = Number ( (amountElement.value * rates[currentFrom.value] ).toFixed(2) );
    result = (valueBYN / rates[currentTo.value]). toFixed(2);
  }

  else {
    result =  (amountElement.value / rates[currentTo.value] ).toFixed(2);
  }

  return result;
}

function doReset() {
  amountElement.value = "";
  resultElement.innerHTML = "Result:";
  currentFrom.selectedIndex = "0";
  currentTo.selectedIndex = "0";
}
