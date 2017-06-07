request = require('request');
require('dotenv').config();
var URL_ENDPOINT = 'http://apilayer.net/api/live\?access_key\=' + process.env.API_KEY;
request(URL_ENDPOINT, (error, response, body) => {
    if (response.statusCode === 200 ){
        console.log(NairaEquivalent(body));
    } else {
        console.log(error);
    }
    
});
const NairaEquivalent = (resp)=>{
    exchange_rates = JSON.parse(resp);
    return exchange_rates.quotes.USDNGN;
};
