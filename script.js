let categories = [
    { categoryId: 1, categoryName: "Fruits" },
    { categoryId: 2, categoryName: "Beverages" }
];

let inventory = [
    { productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
    { productId: 2, productName: "Orange Juice", category: 2, price: 3.49, stock: 40 }
];

// 2. Adding a Product
function addProduct(product) {
    if (!product.productId || !product.productName || !product.category || !product.price || !product.stock) {
        console.log("Error: Product object must have all required properties.");
        return;
    } 
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].productId === product.productId) {
            console.log("Error: Product ID must be unique.");
            return;
        }
    }
    inventory.push(product);
    console.log("Product added successfully.");
}

addProduct({ productId: 4, productName: "Banana", category: 1, price: 10, stock: 10});

// 3. Finding a Product
function findProduct(productId) {
const product = inventory.find(p => p.productId === productId);
    if (!product) {
        console.log("Error: Product not found.");
        return;
    }
    return product;
}

console.log(findProduct(2));

// 4. Updating Stock
function updateStock(productId, newStock) {
    if (newStock < 0) {
        console.log("Error: Stock cannot be less than 0.");
        return;
    }
    const product = findProduct(productId);
    if (!product) {
        console.log("Enter the wrong product_id.");
        return;
    } else {
        product.stock = newStock;
        console.log("Stock updated successfully.");
        return;
    }
}

updateStock(1, 10)

//5. Deleting Product
function deleteProduct(productId) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].productId === productId) {
            inventory.splice(i, 1);
            console.log("Product deleted successfully.");
            return;
        }
    }
    console.log("Error: Product not found.");
}

deleteProduct(2)