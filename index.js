let phones = ["iphone x" , "iphone 11" , "iphone 12" ]
let prices = [" 500 , 600 , 700"]
function showPhones() {
    console.log(phones)
    console.log(prices)
}
function addNewPhone() {
    let newName = prompt("enter new phone name")
    let newPrice = +prompt("enter new phone price")
    phones.push(newName)
    prices.push(newPrice)
    showPhones();
}