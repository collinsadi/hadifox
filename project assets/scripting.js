




// Setting the function to handle the add to cart buttons 









// Setting the Products for the Best Deals Section in the Home Page

// Setting the row wrapper into a variable to append latter

let bestdealsrowrap = document.getElementById("bestdeals");

// Setting the products in an array with all the necessary informations as an object

let BestDeals = [
    {
    image : "../images/home-pod-mini.png",
    prodname : "HomePod Mini",
    prodprice : 239,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "hardifoxbestdeals1"

},
{
    image : "../images/instax-mini9.png",
    prodname : "InstaX Mini 9",
    prodprice : 99,
    Desc: "Selfie Mode",
    prodid: "hardifoxbestdeals2"

},
{
    image : "../images/tote-medium.png",
    prodname : "Tot e Medium",
    prodprice : 29,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "hardifoxbestdeals3"

},
{
    image : "../images/base-camp-duffel-m.png",
    prodname : "Base camp Duffel M",
    prodprice : 159,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "hardifoxbestdeals4"

},
{
    image : "../images/headiphone-mini.png",
    prodname : "HeadPhone Mini",
    prodprice : 50,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "hardifoxbestdeals5"

},
{
    image : "../images/wrist-watch.png",
    prodname : "Wrist Watch",
    prodprice : 1000,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "hardifoxbestdeals6"

}






];


// Setting a variable with functions that sets the inner html of our wrapper to the array of products

let bestdealsproducts = ()=>{
    return  (bestdealsrowrap.innerHTML = BestDeals.map((x)=>{

        let {prodid} = x;

        return `
        
        
        <div id=${x.prodid} class="best-deals-single-item">

        <div class="single-item-heart">

            <i class="fa-regular fa-heart"></i>

        </div>

        <div class="single-item-image">

            <img src=${x.image} alt="">

        </div>


        <div class="single-item-footer">
            <div class="footer-top">
             <h3>${x.prodname}</h3>   
             <h4>$ <span>${x.prodprice}</span>.00</h4>
            </div>
            
            <p>${x.Desc}</p>

            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <div class="footer-button">
            <a href="javascript:void(0);" class = "addtocart" onclick ="additemstocart(${prodid})">Add to Cart</a>
            </div>
        </div>
    </div>
        
        
        
        
        `

    }).join(" "));

}

// We Just declared the function sop it would run automatically on page load

bestdealsproducts();


//  The weekly popular products


// Declaring the weekly popular products in an array just like we diod beforfe 
// so we can use them again later on  

 let WeeklyProducts = [
{
    image : "../images/headiphone-mini.png",
    prodname : "Head Phone Mini",
    prodprice : 29,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "weeklyproducts1",

},
{
    image : "../images/base-camp-duffel-m.png",
    prodname : "Base camp Duffel M",
    prodprice : 159,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "weeklyproducts2",

},
{
    image : "../images/wrist-watch.png",
    prodname : "Wrist Watch",
    prodprice : 1000,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "weeklyproducts3"

},
{
    image : "../images/cabin.png",
    prodname : "Cabin",
    prodprice : 1000,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "weeklyproducts4",

},
{
    image : "../images/waterbottle.png",
    prodname : "Pendleton Water Bottle",
    prodprice : 1000,
    Desc: "Table With Air Purifier, stained veneer-Black",
    prodid: "weeklyproducts5",

}






];

// Calling the div where we are going to display them inside

let weeklyproductswrap = document.getElementById("weeklyproducts");

// Create a variable function that retuns our product inside of the html element

let weeklypopularproducts = ()=>{

return (weeklyproductswrap.innerHTML = WeeklyProducts.map((x)=>{


    let {prodid} = x;

    return `
    
    
        
        
        <div class="weekly-products-single-item" id = ${prodid}>

        <div class="single-item-heart">

            <i class="fa-regular fa-heart"></i>

        </div>

        <div class="single-item-image">

            <img src=${x.image} alt="">

        </div>


        <div class="single-item-footer">
            <div class="footer-top">
             <h3>${x.prodname}</h3>   
             <h4>$ <span>${x.prodprice}</span>.00</h4>
            </div>
            
            <p>${x.Desc}</p>

            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <div class="footer-button">
            <a href="javascript:void(0);" class = "addtocart" onclick = "additemstocart(${prodid})" >Add to Cart</a>
            </div>
        </div>
    </div>
        
        
        
        
        
    
    
    
    
    
    
    
    
    `

}).join(""))

};


// Calling the function so it executes automaticaly on page load

weeklypopularproducts();


// he todaysbest deals section


let TodayBestDeals = [

    {
        image : "../images/headiphone-mini.png",
        prodname : "Head Phone Mini",
        prodprice : 29,
        Desc: "Table With Air Purifier, stained veneer-Black",
        category: "tech-product",
        prodid: "todaybestdeals1",
    
    },
    {
        image : "../images/supreme-water-bottle.png",
        prodname : "Supreme Water Bottles",
        prodprice : 5,
        Desc: "Nice Supreme Water Bottles",
        category: "fitness-product",
        prodid: "todaybestdeals2",
    
    },
    {
        image : "../images/airpods-max.png",
        prodname : "AirPods Max",
        prodprice : 559,
        Desc: "A perfect balance of high-fidelity audio",
        category: "tech-product",
        prodid: "todaybestdeals3",
    
    },
    {
        image : "../images/laptop-sleeve.png",
        prodname : "Laptop Sleeve",
        prodprice : 50,
        Desc: "Organic Cotton, fairtrade certified",
        category: "tech-product",
        prodid: "todaybestdeals4",
    
    },
    {
        image : "../images/flower-laptop-sleeve.png",
        prodname : "Flower Laptop Sleeve",
        prodprice : 50,
        Desc: "15 in. x 10 in. -Flap top closure",
        category: "tech-product",
        prodid: "todaybestdeals5",
    
    },
    {
        image : "../images/macbook-13-min.png",
        prodname : 'Macbook pro 13" ',
        prodprice : 1099,
        Desc: "256, 8 core GPU, 8 GB",
        category: "tech-product",
        prodid: "todaybestdeals6",
    
    },
    {
        image : "../images/ipad-mini.png",
        prodname : "Ipad Mini",
        prodprice : 539,
        Desc: "Table with air purifier, stained veneer/black",
        category: "tech-product",
        prodid: "todaybestdeals7",
    
    },
    {
        image : "../images/home-pod-mini.png",
        prodname : "HomePod Mini",   
        prodprice : 59,
        Desc: "5 Colors Available",
        category: "tech-product",
        prodid: "todaybestdeals8",
    
    },

        // Fitness Products

    {
        image : "../images/dumbell-20kg.png",
        prodname : "20kg Dumbell",
        prodprice : 90,
        Desc: "20kg Adjustable Dumbell Set With Case",
        category: "fitness-product",
        prodid: "todaybestdeals9",
    
    },
    {
        image : "../images/skipping-rope.png",
        prodname : "Skipping Rope",
        prodprice : 5,
        Desc: "Adjustable Jump Skipping Rope Cable For Adults/Kids",
        category: "fitness-product",
        prodid: "todaybestdeals10",
    
    },


   
];

let todaybestdealscontainer = document.getElementById('todays-best-deals');


let generatetodaybestdeals = ()=>{

        return(todaybestdealscontainer.innerHTML = TodayBestDeals.map((x)=>{

            let {prodid} = x;

            return `
            
            
            <div class="today-best-deals-single-item ${x.category}" id = ${prodid}>
        
                <div class="single-item-heart">
        
                    <i class="fa-regular fa-heart"></i>
        
                </div>
        
                <div class="single-item-image">
        
                    <img src=${x.image} alt="">
        
                </div>
        
        
                <div class="single-item-footer">
                    <div class="footer-top">
                     <h3>${x.prodname}</h3>   
                     <h4>$ <span>${x.prodprice}</span>.00</h4>
                    </div>
                    
                    <p>${x.Desc}</p>
        
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
        
                    <div class="footer-button">
                    <a href="javascript:void(0);" class='addtocart' onclick = "additemstocart(${prodid})">Add to Cart</a>
                    </div>
                </div>
            </div>
            
            
            
            
            `
            
        }).join(''))
};


generatetodaybestdeals();


// Getting the wrap for the most selling products
let mostsellingproductwrap = document.getElementById('most-selling-products')

let MostSellingProducts = [

    {
        image : "../images/instax-mini11.png",
        prodname : "Instax Mini 11",
        prodprice : 89,
        Desc: "Selfie Mode and Selfie Mirror Micro Mode",
        prodid: "mostselling1",
    },
    {
        image : "../images/hand-watch.png",
        prodname : "Hand Watch",
        prodprice : 59,
        Desc: "Citizen 650M, W-69g",
        prodid: "mostselling2",
    },
    {
        image : "../images/adidas-sneakers.png",
        prodname : "Adidas Sneakers",
        prodprice : 159,
        Desc: "X Sean Wotherspoon Superstar sneakers",
        prodid: "mostselling3",
    },
    {
        image : "../images/waterbottle.png",
        prodname : "Pendleton Water Bottle",
        prodprice : 89,
        Desc: "Stainless Steel, Food safe, Hand Wash",
        prodid: "mostselling4",
    },
    {
        image : "../images/cabin.png",
        prodname : "Cabin",
        prodprice : 239,
        Desc: "Table With Air Purifier, stained veneer-Black",
        prodid: "mostselling5",
    }
]


let generatemostsellingproducts = ()=>{


    return(mostsellingproductwrap.innerHTML = MostSellingProducts.map((x)=>{

        let {prodid} = x;

        return `
        
        <div class="most-selling-products-single-item" id = ${prodid}>
        
                <div class="single-item-heart">
        
                    <i class="fa-regular fa-heart"></i>
        
                </div>
        
                <div class="single-item-image">
        
                    <img src=${x.image} alt="">
        
                </div>
        
        
                <div class="single-item-footer">
                    <div class="footer-top">
                     <h3>${x.prodname}</h3>   
                     <h4>$ <span>${x.prodprice}</span>.00</h4>
                    </div>
                    
                    <p>${x.Desc}</p>
        
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
        
                    <div class="footer-button">
                    <a href="javascript:void(0);" class='addtocart' onclick = "additemstocart(${prodid})">Add to Cart</a>
                    </div>
                </div>
            </div>
            
        
        
        
        `
    }).join(""))
}

generatemostsellingproducts();


// getting the buttons to filter the todays best deals section

let allbutton = document.querySelector('.all-btn');
let fashionButton = document.querySelector('.fashion-btn');
let techButton = document.querySelector('.tech-btn');
let educationButton = document.querySelector('.education-btn');
let BeautyButton = document.querySelector('.beauty-btn');
let fitnessButton = document.querySelector('.fitness-btn');
let sneakersButton = document.querySelector('sneakers-btn');




techButton.addEventListener('click', (e)=>{

    e.preventDefault();




    let items = TodayBestDeals.filter(el => el.category === "tech-product" );
    // items.map(x => 
    //     return )
    todaybestdealscontainer.innerHTML = items.map((x)=>{

        let {prodid} = x;

        return `
        
        
        <div class="today-best-deals-single-item ${x.category}" id = ${prodid}>
    
            <div class="single-item-heart">
    
                <i class="fa-regular fa-heart"></i>
    
            </div>
    
            <div class="single-item-image">
    
                <img src=${x.image} alt="">
    
            </div>
    
    
            <div class="single-item-footer">
                <div class="footer-top">
                 <h3>${x.prodname}</h3>   
                 <h4>$ <span>${x.prodprice}</span>.00</h4>
                </div>
                
                <p>${x.Desc}</p>
    
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
    
                <div class="footer-button">
                <a href="javascript:void(0);" class='addtocart' onclick = "additemstocart(${prodid})" >Add to Cart</a>
                </div>
            </div>
        </div>
        
        
        
        
        `
        
    }).join('');
    
    
    


        techButton.classList.add('active-btn')
        allbutton.classList.remove('active-btn')
        fashionButton.classList.remove('active-btn')
        educationButton.classList.remove('active-btn')
        BeautyButton.classList.remove('active-btn')
        furnitureButton.classList.remove('active-btn')
        sneakersButton.classList.remove('active-btn')
        

});

fitnessButton.addEventListener("click", (e)=>{

    e.preventDefault();

    let items = TodayBestDeals.filter(el => el.category === "fitness-product")

    todaybestdealscontainer.innerHTML = items.map((x)=>{

        let {prodid} = x;

        return `
        
        
        <div class="today-best-deals-single-item ${x.category}" id = ${prodid}>
    
            <div class="single-item-heart">
    
                <i class="fa-regular fa-heart"></i>
    
            </div>
    
            <div class="single-item-image">
    
                <img src=${x.image} alt="">
    
            </div>
    
    
            <div class="single-item-footer">
                <div class="footer-top">
                 <h3>${x.prodname}</h3>   
                 <h4>$ <span>${x.prodprice}</span>.00</h4>
                </div>
                
                <p>${x.Desc}</p>
    
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
    
                <div class="footer-button">
                <a href="javascript:void(0);" class='addtocart' onclick = "additemstocart(${prodid})">Add to Cart</a>
                </div>
            </div>
        </div>
        
        
        
        
        `
        
    }).join('');
    
    
    
    

    
});



allbutton.addEventListener('click', (e)=>{

    e.preventDefault();

    todaybestdealscontainer.innerHTML = TodayBestDeals.map((x)=>{

        let {prodid} = x;

        return `
        
        
        <div class="today-best-deals-single-item ${x.category}" id = ${prodid}>
    
            <div class="single-item-heart">
    
                <i class="fa-regular fa-heart"></i>
    
            </div>
    
            <div class="single-item-image">
    
                <img src=${x.image} alt="">
    
            </div>
    
    
            <div class="single-item-footer">
                <div class="footer-top">
                 <h3>${x.prodname}</h3>   
                 <h4>$ <span>${x.prodprice}</span>.00</h4>
                </div>
                
                <p>${x.Desc}</p>
    
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
    
                <div class="footer-button">
                <a href="javascript:void(0);" class='addtocart' onclick = "additemstocart(${prodid})">Add to Cart</a>
                </div>
            </div>
        </div>
        
        
        
        
        `
        
    }).join('');


});



let Basket = [];




function additemstocart(prodid){

let buttons = document.querySelectorAll('.addtocart');

    buttons.forEach(button =>{
    button.addEventListener('click', (event)=>{

        event.currentTarget.innerHTML = "Add More"


        

    })
});



   let selectedItem = prodid;
   let search = Basket.find((x)=> x.id === selectedItem.id)

    if (search === undefined){

        Basket.push({
                id: selectedItem.id,
                item: 1,
            });

    }
    else{

        search.item +=1;
    }

    


    calculation();

    //let addtocartbutton = document.getElementsByClassName('addtocart');
    
    // for(i=0; i < addtocartbutton.length ; i++){
    
    //     addtocartbutton[i].addEventListener('click', (e)=>{
    
    //         e.preventDefault();
    
    //        //addtocartbutton[i].innerHTML = "add more";
            
    //         //alert('working?');
    
    //         let button = e.target;

    //         button.innerHTML = "Adding..";

    //         button.disabled = true;

    //         setTimeout(()=>{

    //             button.disabled = false;
    //             button.innerHTML = "Add More";

                

    //         }, 1000);
            
    //         increasecartnumber ();
            
            
    
    
    //     })
    // }
    
    }

function calculation(){

    let cartIcon = document.getElementById('cart-counter');

    // This commented code would only add the number of products int
    // instead of calculating the total number of times the add to cart function had ran


    //cartIcon.innerHTML = Basket.length;

    cartIcon.innerHTML = Basket.map((x)=> x.item).reduce((x, y)=> x+y,0)

   // console.log(Basket.map((x)=> x.item).reduce((x, y)=> x+y,0))

    }





    // Giving an onclick style to the search space


$(document).ready(function(){

    $("#top-search").focus(function(){
        $(".search-space").css("border", "1px solid blue", function(){
            $("#top-search").mouseleave(function(){
                $(".search-space").css("border", "1px solid gray")
            })
        })
    })
});





// Displaying and Hiding the Mega Menu

$(".categories-btn").click(function(){
    
    $(".categories-dropdown").slideToggle();

    $("#downpoint").toggleClass("fa-chevron-down fa-chevron-up ")

});


// Displaying and hiding the mobile menu

$(".mobile-menu").click(function(){

    $(".mobile-menu-panel").slideToggle();


    $("#mobile-harmburger").toggleClass("fa-bars fa-arrow-up")
});

    let thanksbutton = document.getElementById('thankyou');
    let popup = document.getElementById('thepopup');

    thanksbutton.addEventListener('click', _=>{
        popup.style.display = "none";

        localStorage.setItem("Seen", "Ihave seen")
    })

window.addEventListener("scroll", ()=>{

if(window.scrollY >= 2015 && localStorage.getItem('Seen') === null){

   popup.classList.add("displaypopup");

   //alert("reached")
}


    
})



let modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener("click", _=>{

    const body = document.querySelector('body');

    //modeToggle.classList.toggle("fa-moon", "fa-sun")

    if(body.classList.contains("dark")){
        body.classList.remove("dark")

        body.style.setProperty("--black-color", "black")
        body.style.setProperty("--black-text", "black")
        body.style.setProperty("--white-color", "white")
        body.style.setProperty("--white-text", "white")
        body.style.setProperty("--gray", "#F5F6F6")
        body.style.setProperty("--exceptional", "rgb(233, 233, 233)")

        localStorage.setItem("mode", "Light");
        
    } else{

        body.classList.add("dark");


        body.style.setProperty("--black-color", "white")
        body.style.setProperty("--black-text", "white")
        body.style.setProperty("--white-color", "black")
        body.style.setProperty("--white-text", "black")
        body.style.setProperty("--gray", "#656666")
        body.style.setProperty("--exceptional", " rgb(37, 37, 37)")


        localStorage.setItem("mode", "Dark");
    }

})


window.addEventListener('load',_=>{

    const body = document.querySelector('body');
    
    if(localStorage.getItem("mode") === "Dark"){

        document.getElementById("classtoggle").classList.remove("fa-sun");
        document.getElementById("classtoggle").classList.add("fa-moon");

        body.classList.add("dark");


        body.style.setProperty("--black-color", "white")
        body.style.setProperty("--black-text", "white")
        body.style.setProperty("--white-color", "black")
        body.style.setProperty("--white-text", "black")
        body.style.setProperty("--gray", "#656666")
        body.style.setProperty("--exceptional", " rgb(37, 37, 37)")

    }


});

$("#mode-toggle").click(function(){

    $("#classtoggle").toggleClass("fa-sun fa-moon")

});


function removepreloader(){

    document.getElementById("preloader").style.display = "none";

}



window.addEventListener("load", _=>{

    setTimeout(removepreloader, 2000)


})



