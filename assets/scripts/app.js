// products list 
let  products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "../../assets/images/air.png",
        },
        {
          code: "darkblue",
          img: "./../assets/images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./../assets/images/jordan.png",
        },
        {
          code: "green",
          img: "./../assets/images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./../assets/images/blazer.png",
        },
        {
          code: "green",
          img: "./../assets/images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./../assets/images/crater.png",
        },
        {
          code: "lightgray",
          img: "./../assets/images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./../assets/images/hippie.png",
        },
        {
          code: "black",
          img: "./../assets/images/hippie2.png",
        },
      ],
    },
  ];

//the slider
const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");
//product
const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

let choosenProduct = products[0];

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change  the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosenProduct
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    });
});

//changing product img color
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

//select size
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white";
            size.style.color="black"
        })
        size.style.backgroundColor= "black";
        size.style.color="white"
    })
})


//payment model
const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});