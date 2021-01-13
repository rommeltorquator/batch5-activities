let store = {
    store: "Local Bookstore",
    inventory: [
        {
            title: "Noli Me Tangere",
            quantity: 5,
            price: 150
        },
        {
            title: "Harry Potter and the Deathly Hallows",
            quantity: 10,
            price: 250
        },
        {
            title: "Book of the Dead",
            quantity: 3,
            price: 100
        }
    ],
    earnings: 0
}

// add a book to the inventory
const addBook = (title, quantity, price) => {
    store.inventory.push({ "title": title, "quantity": quantity, "price": price });
}

// restock an existing book
const restockBook = (title, quantity) => {
    // checks if the book already exists in the inventory
    store.inventory.forEach(i => {
        if(i.title === title) {
            i.quantity = quantity;
        }
    })
}


const sellBook = (title, quantity) => {
    let notAvailable = true;
    store.inventory.forEach(i => {
        // checks if the books is available and has enough quantity
        if(i.title === title && i.quantity > quantity) {
            // decreases the quantity
            let subtractQuantity = i.quantity - quantity;
            i.quantity = subtractQuantity;

            // adds the price to the total earnings
            store.earnings += i.price * quantity;         
            notAvailable = false;
            console.log(`Successful transaction`);
        }
    });

    checkAvailability(notAvailable, title);    
};

// check if the book exists in the inventory
const checkAvailability = (b, t) => {
    if(b) {
        console.log(`${t} is out of stock`);
    }
}

// shows to total earning of the store
const totalEarnings = () => console.log(store.earnings);

// shows the list of books including the price and quantity
const listInventory = () => store.inventory.forEach(i => console.log(`Title: ${i.title}, Price: ${i.price}, Quantity: ${i.quantity}`));

// addBook("Eleven Rings: The Soul of Success", 50, 300);
// restockBook("Book of the Dead", 50);
sellBook("Harry Potter and the Deathly Hallows", 1);
totalEarnings();
listInventory();