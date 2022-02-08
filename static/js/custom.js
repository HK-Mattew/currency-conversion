function getCurrencyQuote(currency){
  var quote = null;
  $.ajax({
      url: `https://api.binance.com/api/v3/avgPrice?symbol=${currency}USDT`,
      success: function(result){
        quote = parseFloat(result['price']);
      }
    });
  return quote;
};

function convertUsdToCrypto(usd, to_currency){
  return (usd / getCurrencyQuote(to_currency))
};

function convertCryptoToUsd(crypto_amount, crypto_currency){
  return (crypto_amount * getCurrencyQuote(crypto_currency))
};
