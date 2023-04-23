// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //get all relevant input and calculate the numbers
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const calculatedSubTotal = Number(price) * Number(quantity);

  //first to get access to the "sub total" elements
  //update the sub total element of subTotal
  //assign the new subtotal to the DOM
  let subTotal = product.querySelector(".subtotal span");
  subTotal.textContent = `${calculatedSubTotal}`;

  //return a "number" instead of subTotal, which is an object
  return calculatedSubTotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = 0;

  for (let i = 0; i< allProducts.length; i++){
    totalPrice += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  let totalValue = document.querySelector('#total-value span');
  totalValue.textContent = `${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
