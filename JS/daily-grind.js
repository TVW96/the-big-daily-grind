//alert("It's working!");

/*

    One unique image, with appropriate and matching content in the alt tag.  

    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)

    A unique color that supports the image and paragraph of content

Here are the items we need to change for each coffee:

    image - src of pic
    alt - alt tag of pic
    description - a paragraph of content about the coffee
    name - a name of today's coffee
    color - a color representing the coffee

    We may also use the following, but not part of the coffee itself

    today - the current day of the week

*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += 
    `
        <p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>. ${coffee.desc}
        </p>
    `;

    return myReturn;
}



let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//data vailable? show data from url
    myDay = urlParams.get("day");
}

//force to be an integer
myDay = parseInt(myDay);





switch(myDay){

    case 0:
         today = "Sunday";
         coffee = {
            color: "brown",
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a Mocha Coffee",
            day: "Sunday",
            desc: `The mocha is the best coffee of choice. Dark chocolate if the right quality is one of the most delicious candies. Not to mention the nutritional values. High in fiber, iron, & magnesium. Dark chocolate has been known to be a very powerful source of antioxidants. Just get the mocha.`
        };
    break;

    case 1:
         today = "Monday";
         coffee = {
            color: "burly-wood",
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a Cold Brew Coffee",
            day: "Monday",
            desc: `This will 100% gurantee that you get a cramp within the following hour. Cold brew is a great pick me up on a moody day. Can easily be consumed and will give you the energy you need without delay. Caffeine appears to boost the metabolic rate by increasing how quickly the body burns fat. If you can get that caffiene in you quicker the quicker you should benefit. My only quarrel with cold brew is the cramps and stomach aches you get if you drink too much.`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "orange",
            name: "Pumpkin spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a Pumpkin spice latte",
            day: "Tuesday",
            desc: `No comment. Everyone knows about the effin pumpkin spice latte already. This thing is more widely advertised than Jesus.`
        };
    break;

    case 3:
         today = "Wednesday";
         coffee = {
             color: "pink",
             name: "Bubble tea",
             pic: "images/bubble-tea.jpg",
             alt: "A picture of a Bubble Tea",
             day: "Wednesday",
             desc: `You'll need your stomach flushed if you eat the boba balls too often. End of story.`
         };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "black",
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a Caramel latte",
            day: "Thursday",
            desc: `Although this is a great choice of coffee, it will give you the shits unexpectedly. Also too much sugar.`
        };
   break;

   case 5:
        today = "Friday";
        coffee = {
            color: "whitesmoke",
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A picture of a Drip coffee",
            day: "Friday",
            desc: `This gives you bad breath if you didn't eat breakfast. I don't like drip coffee. Contrary to popular belief(my own) drip coffee is the number one choice for most aged citizens. Possibly just another staple in the art of coffee making. Hmmm, i'll just take the regular black coffee. You can keep the drip.`
        };
   break;

   case 6:
    today = "Saturday";
    coffee = {
        color: "gray",
        name: "Frappaccino",
        pic: "images/frappaccino.jpg",
        alt: "A picture of a frappaccino coffee",
        day: "Saturday",
        desc: `This will get you shamed.`
    };
break;


    default:
         today = "Something went wrong!";
}


//let coffeeData = coffeeTemplate(coffee);
//alert(coffeeData);

// LOAD COFFEE DATA TO PAGE
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

//console.log(coffee)



