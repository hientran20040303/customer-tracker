// Create Customer Records
let customers = [
    {
    name: "Kenshi Yonezu",
    email: "info@kenshiyonezu.jp",
    purchases: ["Laptop", "MousePad", "USB-C Cable"]
    },
    {
    name: "Fujii Kaze",
    email: "info@mail.fujiikaze.com",
    purchases: ["Smartphone", "Screen Protector"]
    },
    {
    name: "Ado",
    email: "info@mail.ado-official.com",
    purchases: ["Headphones", "Bluetooth Adapter", "Charger"]
    }
];
console.log("Customers array: ", customers);
console.table(customers);

// Add and Remove Data
customers.push(
    {
        name: "Alice Johnson",
        email: "alice.j@gmail.com",
        purchases: ["Screen protector","Phone Case","Charger"]
    }
);
console.log("Updated customers array: ", customers);
console.table(customers);

customers.shift();
console.log("Updated customers array: ", customers);
console.table(customers);

// Update Customer Info
customers[0].email = "kaze_updated@mail.com";
customers[1].purchases.push("Limited Edition Vinyl");
console.log("Updated customers array: ", customers);
console.table(customers);

// Display Customer Information
customers.forEach(customer => {
    console.log(`Customer: ${customer.name} | Email: ${customer.email} | Total Purchases: ${customer.purchases.length}`);
});