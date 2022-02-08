function getCurrencyQuote(currency){
  return $.ajax({
      url: `https://api.binance.com/api/v3/avgPrice?symbol=${currency}USDT`
    });
};


function convertUsdToCrypto(usd, to_currency){
  getCurrencyQuote(to_currency).then( response => {
    return alert(usd / parseFloat(response['price']));
  });
};


function convertCryptoToUsd(crypto_amount, crypto_currency){
  return (crypto_amount * getCurrencyQuote(crypto_currency))
};

// function convertCurrency(from_currency, from_amount, to_currency){
  
// };
