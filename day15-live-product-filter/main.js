const API_PRODUCT = "https://data-json-server-uxiu.onrender.com/api/products"
const htmlProducts = document.querySelector(".product-list");
let products = [];

async function getProducts(){
    try {
        const response = await fetch(API_PRODUCT);
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('Lỗi trong fetchApi:', error);
        throw error; // hoặc return null nếu bạn muốn gọi hàm không bị crash
    }
}

getProducts()
.then(data => {
    products = data;
    pushProducts(products);
});

function pushProducts(products){
    products.forEach(product => {
        drawProduct(product);
    });
}


/**filter */
const search = document.querySelector("#search");
search.addEventListener('input', (e)=>{
    htmlProducts.innerHTML = "";
    products.forEach(p=>{
        if(p.title.toLowerCase().includes(e.target.value.toLowerCase())){
            drawProduct(p);
        }
    })
    
});

function drawProduct(product){
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
            <div class="product-img">
                <img src="${product.thumbnail}" alt="...">
            </div>
            <div class="product-content">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">$${product.price}</p>
            </div>
    `;
    htmlProducts.appendChild(productItem);
}

