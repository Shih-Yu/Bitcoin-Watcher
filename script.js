// Declaring DOM elements
let getPrice = document.querySelector("#btn");
let convert = document.querySelector("#price");
let coinDesk = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Fetching Requests
getPrice.addEventListener("click", () => {
  let currency = document.querySelector("input[name='currency']:checked").value;
  fetch(coinDesk)
  .then( response =>  response.json())
  .then( data => {
    let symbol = data.bpi[currency].symbol;
    let price = data.bpi[currency].rate_float;
    convert.innerHTML = `${symbol}${price}`
  })
  .catch((error) => {
    console.log("There is an error", error);
  });
})