//Daily Challenge: Groceries
/// let groceries2 = { ...groceries }; --> shallow copy
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Copy this object using the method that was taught in today’s lesson.
let newObject = groceries; 
// Change the value of totalPrice to 35$. 
groceries.totalPrice = "$35";
// Will we also see this modification in the copied objects?
///Yes, the copy is a reference to the original
// Change the value of payed to false. 
groceries.other.payed = false; 
//Will we also see this modification in the copied objects? Why?
///Yes, because they share the same memory address