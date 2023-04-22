// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //get all relevant input and calculate the numbers
  const price = document.querySelector(".price span").innerHTML;
  const quantity = document.querySelector(".quantity input").value;
  const calculatedSubTotal = Number(price) * Number(quantity);

  //first to get access to the "sub total" element
  //update the sub total element of subTotal
  //assign the new subtotal to the DOM
  let subTotal = document.querySelector(".subtotal span");
  subTotal.textContent = `${calculatedSubTotal}`;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
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
