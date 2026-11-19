// Hobbies object to hold registered hobbies, will add more or change function to be handled on the firebase storage backend. 
let hobbies = [
    {
        title: "Chess",
        image: "images/chess.jpg",
        description: "A two player strategy board game where each player has 16 pieces and the goal of the game is to trap the opponent's king in checkmate.",
        // will replace with actual registered mentors and their profile info
        mentors: ["N/A"]
    },
    {
        title: "Video Games",
        image: "images/pcgaming.jpg",
        description: "Using a device to play games on a screen and using a controller or keyboard. PC, Consoles, handheld consoles. Some examples include using a personal computer, Playstation, Switch.",
        // will replace with actual registered mentors and their profile info
        mentors: ["N/A"]
    },
    {
        title: "Guitar",
        image: "images/playing-guitar.jpg",
        description: "A creative way to make music using various styles.",
        // will replace with actual registered mentors and their profile info
        mentors: ["N/A"]
    },
    {
        title: "Cooking",
        image: "images/cooking.jpg",
        description: "A creative method to experiment in the kitchen. Using different flavors and sharing food with others.",
        // will replace with actual registered mentors and their profile info
        mentors: ["N/A"]
    },
    {
        title: "Drawing",
        image: "images/drawing.jpg",
        description: "On paper or digital canvas, making creative images by using various techniques to showcase a person's talent and skill.",
        // will replace with actual registered mentors and their profile info
        mentors: ["N/A"]
    }
];

// variables to store the search input, search button, and results container
let searchInput = document.querySelector(".search-bar input");
let searchButton = document.getElementById("search");
let resultsContainer = document.querySelector(".search-results");

// search function declaration
function runSearch(event) {
// prevents the page from refreshing when the search button is clicked
  if (event) event.preventDefault();

// trims user input, converts to lowercase, and checks for a blank search block
  let userQuery = searchInput.value.toLowerCase().trim();
  if(userQuery === ""){
    resultsContainer.innerHTML = "<p>Please search for a hobby</p>";
    return;
  }
}
