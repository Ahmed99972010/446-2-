let phones = ["iphone x", "iphone 11", "iphone 12"];
let prices = [500, 600, 700];
function showPhones() {
  console.clear();
  console.table(phones);
  console.table(prices);
}
function addNewPhone() {
  let newName = prompt("enter new phone name");
  let newPrice = +prompt("enter new phone price");
  phones.push(newName);
  prices.push(newPrice);
  showPhones();
}
function deletePhone() {
  let phoneIndex = +prompt("Enter phone index you want to delete") - 1;
  delete phones[phoneIndex];
  delete prices[phoneIndex];
  showPhones();
}
function editPhoneName() {
    let nameEdit = prompt("enter phone index to edit") - 1;
    let newPhoneName = prompt("enter phone Name");
    phones.splice(nameEdit, 1, newPhoneName);
    showPhones();
  }
function editPhonePrice() {
  let priceEdit = prompt("enter phone index to edit") - 1;
  let newPhonePrice = +prompt("enter phone price");
  prices.splice(priceEdit, 1, newPhonePrice);
  showPhones();
}
