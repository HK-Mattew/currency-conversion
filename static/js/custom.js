function getCurrencyQuote(currency, callback){
  $.ajax({
      url: `https://api.binance.com/api/v3/avgPrice?symbol=${currency}USDT`,
      success: callback
    });
};



function updateConversor(){
  var from_currency = $('#from').val();
  var from_amount = parseFloat($('#amount-from').val());
  var to_currency = $('#to').val();
  
  if(!from_currency | !from_amount | !to_currency){
    return;
  };
  
  $('#div-result').attr('style', 'display:none;');

  if(from_currency === 'USD'){
    getCurrencyQuote(to_currency, function(response){
      var quote = (from_amount / parseFloat(response['price']));
      $('#result').attr('value', `${quote} ${to_currency} `);
      $('#div-result').removeAttr('style');
      console.log(to_currency, quote);
    });
  };
};



$("#from, #to, #amount-from").on("change", updateConversor);
