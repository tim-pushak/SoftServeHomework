"use strict";

// task 1

//1 
const newWindow = window.open("", "", "width=300, height=300");

//2
setTimeout(() => {
    newWindow.resizeTo(500, 500);
  }, 2000);

//3
setTimeout(() => {
    newWindow.moveTo(200, 200);
  }, 4000);

//4
setTimeout(() => {
    newWindow.close();
  }, 6000);  

// //// /

// task 2

function changeCSS() {
    var textElement = document.getElementById("text");
    textElement.style.color = "orange";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "Comic Sans MS";
}  

// //// /

// task 3

// Event listener for button 1
document.getElementById("button1").addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});

// Event listener for button 2
document.getElementById("button2").addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "pink";
});

// Event listener for button 3
document.getElementById("button3").addEventListener("mousedown", function(){
    document.body.style.backgroundColor = "brown";
});

document.getElementById("button3").addEventListener("mouseup", function(){
    document.body.style.backgroundColor = "white";
});

// Event listener for link 1
document.getElementById("link1").addEventListener("mouseover", function(){
    document.body.style.backgroundColor = "yellow";
});

document.getElementById("link1").addEventListener("mouseout", function(){
    document.body.style.backgroundColor = "white";
});

// //// /

// task 4

function deleteItem() {
    var dropdown = document.getElementById("dropdown");
    var selectedIndex = dropdown.selectedIndex;
    dropdown.remove(selectedIndex);
}

// //// /

// task 5

const button = document.getElementById('my-button');

  button.addEventListener('click', function() {
    alert('I was pressed!');
  });

  button.addEventListener('mouseover', function() {
    alert('Mouse on me!');
  });

  button.addEventListener('mouseout', function() {
    alert('Mouse is not on me!');
  });

// //// /

// task 6

function updateWindowSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    document.getElementById("width").innerHTML = "Width: " + width + "px";
    document.getElementById("height").innerHTML = "Height: " + height + "px";
}

window.onload = function() {
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
};

// //// /

// task 7

const cities = {
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
    Ukraine: ["Kyiv", "Lviv", "Ivano-Frankivsk", "Dnipro"]
  };
 
const countryDropdown = document.getElementById("country");
const cityDropdown = document.getElementById("city");
  
countryDropdown.addEventListener("change", function() {

    cityDropdown.innerHTML = "<option value=''>Select a city</option>";

    const selectedCountry = countryDropdown.value;
    const cityList = cities[selectedCountry];
    cityList.forEach(function(city) {
        const option = document.createElement("option");
        option.text = city;
        option.value = city;
        cityDropdown.appendChild(option);
    });
});
  
  cityDropdown.addEventListener("change", function() {
    const selectedCountry = countryDropdown.value;
    const selectedCity = cityDropdown.value;
    const selectedDiv = document.getElementById("selected");
    selectedDiv.innerHTML = "Selected country: " + selectedCountry + "<br>Selected city: " + selectedCity;
  });
  

// //// /