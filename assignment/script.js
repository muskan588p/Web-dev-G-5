// https://dummyjson.com/products
// async function fetchData() {
//     try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         console.log(data);

//     } 
//     catch (error) {
//         console.error("There has been a problem with your fetch operation:", error);
//     }
// }
function getproducts(products) {
    const productContainer = document.getElementById("product-container");
    products.map((product) => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <img src="${product.images}" alt="${product.title}" />
        `;
        productContainer.appendChild(productDiv);
    });
}

async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    getproducts(data.products);
    console.log(data);
}

fetchData();