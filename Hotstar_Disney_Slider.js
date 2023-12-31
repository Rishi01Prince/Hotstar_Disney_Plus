
//Our Array for the Slider
let movies = [
    {
      name: "A Thrusday",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 2.PNG"
    },
    {
      name: "Mahabharat",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 1.PNG"
    },
    {
      name: "Vikram",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 3.PNG"
    },
    {
      name: "Parampara S02",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 4.PNG"
    },
    {
      name: "Aarya S02",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 5.PNG"
    }
  ];
  
  const caraousel = document.querySelector(".caraousel");
  let sliders_arr = [];
  
  var slideIndex = 0; // track the current slide


  
  const createSlide = () => {
    //for infinite sliding effect
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
    
    // Creating our DOM Elements
    for(let i = 0;i<5;i++){

    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);

    
    slide.appendChild(imgElement);
   
    caraousel.appendChild(slide);
  
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classname
    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders_arr.push(slide);
  }

};
  
  
createSlide();
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider") ;

  for (i = 0; i < slides.length; i++) {
    // For Hiding all Slides
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  // For Enabling the current slide
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}







  
//card sliders
  
  let cardcontainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardcontainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });



  //Watch List



  $(document).ready(function () {



    $('.watchlist-btn').click(function () {
      alert("We will add this in future");
        
    });
  

});

