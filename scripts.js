// Constant Variables
const TAX_RATE = 0.08;
const PHONE_PRICE = 700;
const ACCESSORY_PRICE = 20;
const SPENDING_THRESHOLD = 10000;

function totalPrice() {
  var bankBalance = parseInt(prompt("How much money is in your account?"));
  var phonePriceAfterTax = priceAfterTax(PHONE_PRICE);
  var purchasePrice = 0;

  function numberWithCommas(number) {
    return number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatPrice(price) {
    return "$" + numberWithCommas(price) ;
  }

  function priceAfterTax(price) {
    return price + (price * TAX_RATE);
  }

  while (bankBalance > phonePriceAfterTax) {
    bankBalance -= phonePriceAfterTax;
    purchasePrice += phonePriceAfterTax;

    if (bankBalance > SPENDING_THRESHOLD) {
      bankBalance -= 9;
      purchasePrice += 9;
    }
  }
  console.log(formatPrice(purchasePrice));
}