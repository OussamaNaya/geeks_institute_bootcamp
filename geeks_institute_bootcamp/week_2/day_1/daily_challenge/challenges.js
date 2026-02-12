// ====== Daily Challenge  : Groceries
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = (groceries) => {
    groceries.fruits.forEach(item => {
        console.log(item)
    });
}

const cloneGroceries = () => {
    let user = client;
    console.log(`user : ${user}`);
    console.log(`client : ${client}`);

    client = "Betty";
    console.log(`user : ${user}`);
    console.log(`client : ${client}`);
    // Response => Passage by value

    let shopping = groceries;
    console.log(`shopping : ${shopping.totalPrice}`);
    console.log(`groceries : ${groceries.totalPrice}`);
    // Response => Passage by reference

    shopping.totalPrice = "35$";
    console.log(`shopping : ${shopping.totalPrice}`);
    console.log(`groceries : ${groceries.totalPrice}`);
    // Response => Passage by reference 
    
    shopping.other.paid = false;
    console.log(`shopping : ${shopping.other.paid}`);
    console.log(`groceries : ${groceries.other.paid}`); 
    // Response => Passage by reference
}

displayGroceries(groceries);
cloneGroceries(); 