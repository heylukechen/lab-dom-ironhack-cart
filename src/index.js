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
  const allProducts = document.getElementsByClassName("product");
  let totalPrice = 0;

  for (let i = 0; i < allProducts.length; i++) {
    totalPrice += updateSubtotal(allProducts[i]);
  }
  // ITERATION 3
  let totalValue = document.querySelector("#total-value span");
  totalValue.textContent = `${totalPrice}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
  //calculate after removing a line
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //accessing the input value from the user
  let givenProductName = document.querySelector(
    '.create-product input[type="text"]'
  ).value;

  let givenProductPrice = document.querySelector(
    '.create-product input[type="number"]'
  ).value;

  //create new row
  let newItemRow = document.createElement("tr");
  newItemRow.setAttribute("class", "product");

  //create individual columns
  for (let i = 0; i < 5; i++) {
    const td = document.createElement("td");
    newItemRow.appendChild(td);
  }

  // create content inside each td
  // first column
  newItemRow.children[0].setAttribute("class", "name");
  const productNameSpan = document.createElement("span");
  productNameSpan.textContent = givenProductName;
  newItemRow.children[0].appendChild(productNameSpan);

  //second column
  newItemRow.children[1].setAttribute("class", "price");
  const priceSpan = document.createElement("span");
  priceSpan.textContent = Number(givenProductPrice).toFixed(2);
  newItemRow.children[1].innerHTML = "$";
  newItemRow.children[1].appendChild(priceSpan);

  //third column
  newItemRow.children[2].setAttribute("class", "quantity");
  const newQuantInput = document.createElement("input");
  newQuantInput.setAttribute("type", "number");
  newQuantInput.setAttribute("value", "0");
  newQuantInput.setAttribute("min", "0");
  newQuantInput.setAttribute("placeholder", "Quantity");
  newItemRow.children[2].appendChild(newQuantInput);

  //forth column
  newItemRow.children[3].setAttribute("class", "subtotal");
  const subTotal = document.createElement("span");
  subTotal.textContent = "0";
  newItemRow.children[3].innerHTML = "$";
  newItemRow.children[3].appendChild(subTotal);

  //five column
  newItemRow.children[4].setAttribute("class", "action");
  const actionBtn = document.createElement("button");
  actionBtn.setAttribute("class", "btn btn-remove");
  actionBtn.textContent = "Remove";
  newItemRow.children[4].appendChild(actionBtn);
  //append new tr into tbody
  const tbody = document.querySelector("#cart tbody");
  tbody.appendChild(newItemRow);

  document.querySelector('.create-product input[type="text"]').value = "";

  document.querySelector('.create-product input[type="number"]').value = "0";

  //still looping the remove funciton, to keep the index update-to-date
  const removal = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < removal.length; i++) {
    removal[i].addEventListener("click", removeProduct);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removal = document.getElementsByClassName("btn btn-remove");
  for (let i = 0; i < removal.length; i++) {
    removal[i].addEventListener("click", removeProduct);
  }

  const createNewBtn = document.getElementById("create");
  createNewBtn.addEventListener("click", createProduct);
  //... your code goes here
});

// let createNewBtn = document.getElementById("create");
// createNewBtn.classList.add("btn-disable");
// // createNewBtn.disabled = true;

// let givenProductName = document.querySelector(
//   '.create-product input[type="text"]'
// );

// let givenProductPrice = document.querySelector(
//   '.create-product input[type="number"]'
// );

// console.log(givenProductName);

// function checkInput() {
//   if (givenProductName.value !== null && givenProductPrice !== null) {
//     createNewBtn.setAttribute("disabled", false);
//   } else {
//     createNewBtn.setAttribute("disabled", true);
//   }
// }

// console.log(createNewBtn, typeof createNewBtn);
// console.log(givenProductName.value, typeof givenProductName);
// console.log(givenProductPrice.value, typeof givenProductPrice);

// givenProductName.addEventListener("input", checkInput);
// givenProductPrice.addEventListener("input", checkInput);
// createNewBtn.addEventListener("click", createProduct);
