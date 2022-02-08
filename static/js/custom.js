function getCurrencyQuote(currency, callback){
  $.ajax({
      url: `https://api.binance.com/api/v3/avgPrice?symbol=${currency}USDT`,
      success: callback
    });
};



function updateConversor(){
  var from_currency = 'USD';
  var from_amount = 12;
  var to_currency = 'TRX';

  if(from_currency === 'USD'){
    getCurrencyQuote(to_currency, function(response){
      var quote = (from_amount / parseFloat(response['price']);
      console.log(to_currency, quote);
    });
  };
};


// function convertCurrency(from_currency, from_amount, to_currency){
  
// };
