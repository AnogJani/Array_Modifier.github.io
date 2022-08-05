"use strict";
/*
let arr = {
    youtube: ["קישור ליוטיוב","https://www.youtube.com","https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg"],
    facebook: ["קישור לפייסבוק","https://www.facebook.com","https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg"],
    instagram: ["קישור לאינסטגרם","https://www.instagram.com","https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg"],
    website: ["קישור לאתר שלנו","https://processing.org","https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg"],
};
*/

//ARRAY FOR EXAMPLE
let arr = [
  [
    "קישור ליוטיוב",
    "https://www.youtube.com",
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg",
  ],
  [
    "קישור לפייסבוק",
    "https://www.facebook.com",
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg",
  ],
  [
    "קישור לאינסטגרם",
    "https://www.instagram.com",
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg",
  ],
  [
    "קישור לאתר שלנו",
    "https://processing.org",
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/Logo_youtube_ios_%28cropped%29.jpg",
  ],
];

//Toggling the active statue
var activeEl; //global value from function for later use
let el; // do not touch, for pre-initialization.
const activeToggle = function (index) {
    if (activeEl != index) {
        if (activeEl != undefined) {
            el.classList.remove("active");
        }
        el = document.getElementById(`element${index}`);
        el.classList.add("active");
        activeEl = index;
        updateButtons(activeEl);
        return activeEl, el;
    }
};

const updateButtons = function (index) {
    if (activeEl != undefined) { //any of the elements are active
        let all_buttons = document.getElementsByClassName("action_button");
        for (let i = 0 ; i < 4 ; i++) {
            all_buttons[i].classList.add("usable");
        }
        if (index == 0) { //if at the top of the list (we want to not give the option to move up)
           const upBtn = document.getElementById('up_button');
           upBtn.classList.remove("usable")
        }
        if (index == arr.length-1) { //if at the bottom of the list (we want to not give the option to move down)
            const downBtn = document.getElementById('down_button');
           downBtn.classList.remove("usable")
            
        }
    } else {
        console.log("debugging: No active element.")
    }
};

/*
//Toggling the active statue
// k is the index inside the array of each element that we want to display
*/
const createElements = function (array, k) {
  let array_elements = document.querySelector("#array_elements");
  for (let i = 0; i < array.length; i++) {
    let new_element = document.createElement("div");
    new_element.setAttribute("id", "element" + i);
    new_element.setAttribute("class", "element");
    new_element.setAttribute("onClick", `activeToggle(${i})`); //Added an onclick attribute to each element that calls the function
    new_element.innerHTML = `<p class="order_number">${i + 1}.<p></p>
                                <p class="text">${array[i][k]}<p>`;
    array_elements.appendChild(new_element);
  }
};

/*
// MAIN ACTION BUTTON FUNCTIONS
*/
const button_move_up = function () {

};

const button_move_down = function () {

};

const button_edit = function () {

};

const button_delete = function () {

};

//calling the functions
createElements(arr, 0);
