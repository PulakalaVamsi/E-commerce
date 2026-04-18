document.addEventListener("DOMContentLoaded", function(){

    const bar = document.getElementById('bar');
    const nav = document.querySelector('#navbar ul');
    const close = document.getElementById('close');

    if(bar){
        bar.addEventListener('click', ()=>{
            nav.classList.add('active');
        });
    }

    if(close){
        close.addEventListener("click", ()=>{
            nav.classList.remove("active");
        });
    }

    const products = [
        { id: 1, name: "Cartoon Astronaut T-Shirt", price: 74, image: ["img/shirt1.webp","img/shirt2.jpeg","img/shirt3.jpg","img/shirt4.jpg"], description: "Premium cotton t-shirt" },
        { id: 2, name: "Stylish Shirt", price: 80, image: ["img/shirt2.jpeg","img/shirt3.jpg","img/shirt1.webp","img/shirt4.jpg"], description: "Modern stylish wear" },
        { id: 3, name: "Cool Shirt", price: 65, image: ["img/shirt3.jpg","img/shirt4.jpg","img/shirt1.webp","img/shirt2.jpeg",], description: "Comfortable casual shirt" },
        { id: 4, name: "Cartoon Astronaut T-Shirt", price: 74, image: ["img/shirt4.jpg","img/shirt1.webp","img/shirt2.jpeg","img/shirt3.jpg"], description: "Premium cotton t-shirt" },
        { id: 5, name: "Stylish Shirt", price: 80, image: ["img/shirt5.jpg","img/shirt2.jpeg","img/shirt3.jpg","img/shirt4.jpg"], description: "Modern stylish wear" },
        { id: 6, name: "Cool Shirt", price: 65, image: ["img/shirt6.jpeg","img/shirt5.jpg","img/shirt2.jpeg","img/shirt3.jpg"], description: "Comfortable casual shirt" },
        { id: 7, name: "Cartoon Astronaut T-Shirt", price: 74, image:[ "img/shirt7.jpg","img/shirt5.jpg","img/shirt2.jpeg","img/shirt3.jpg"], description: "Premium cotton t-shirt" },
        { id: 8, name: "Stylish Shirt", price: 80, image: ["img/shirt8.jpg","img/shirt7.jpg","img/shirt5.jpg","img/shirt2.jpeg"], description: "Modern stylish wear" },
        { id: 9, name: "Cool Shirt", price: 65, image: "img/newArrival/dress5.webp", description: "Comfortable casual shirt" },
        { id: 10, name: "Cartoon Astronaut T-Shirt", price: 74, image: "img/newArrival/dress7.webp", description: "Premium cotton t-shirt" },
        { id: 11, name: "Stylish Shirt", price: 80, image: "img/newArrival/dress2.jpg", description: "Modern stylish wear" },
        { id: 12, name: "Cool Shirt", price: 65, image: "img/newArrival/dress4.jpg", description: "Comfortable casual shirt" },
        { id: 13, name: "Cartoon Astronaut T-Shirt", price: 74, image: "img/newArrival/dress6.webp", description: "Premium cotton t-shirt" },
        { id: 14, name: "Stylish Shirt", price: 80, image: "img/newArrival/dress8.webp", description: "Modern stylish wear" },
        { id: 15, name: "Cool Shirt", price: 65, image: "img/newArrival/dress1.avif", description: "Comfortable casual shirt" },
        { id: 16, name: "Cool Shirt", price: 65, image: "img/newArrival/dress3.avif", description: "Comfortable casual shirt" }
    ];

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    const product = products.find(p => p.id === Number(productId));

   if(product){
        const pname = document.getElementById("pname");
        const pprice = document.getElementById("pprice");
        const mainp = document.getElementById("mainp");
        const pdesc = document.getElementById("pdesc");

        if(pname) pname.innerText = product.name;
        if(pprice) pprice.innerText = "$" + product.price;
        if(pdesc) pdesc.innerText = product.description;

        const smallContainer = document.querySelector(".spm");
        const smallImgs = document.querySelectorAll(".small");

        const image = Array.isArray(product.image) ? product.image : [product.image];

        if(mainp) mainp.src = image[0];

        if(image.length <= 1){
            if(smallContainer) smallContainer.style.display = "none";
        }else{
            if(smallContainer) smallContainer.style.display = "flex";

            smallImgs.forEach((img, index) => {
                if(image[index]){
                    img.src = image[index];
                }
            });
        }

    }else{
        document.getElementById("pname").innerText = "Product not found";
    }

});
