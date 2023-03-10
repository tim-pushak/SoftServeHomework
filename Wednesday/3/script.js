"use strict";

// task 1
// one way
const elem = document.getElementById("test");
elem.innerHTML = "Last";

``` another way ```
const newElem = document.querySelector("#test");
newElem.innerHTML = "Last";

// //// /

// task 2

const image = document.querySelector('.image');
image.setAttribute('src', 'cat.jpg');

// //// /

// task 3

const generalDiv = document.getElementById("text");
const paragraphs = generalDiv.querySelectorAll("p");

paragraphs.forEach((paragraph, index) => {
  console.log(`Selector text ${index}: ${paragraph.textContent}`);
});

// //// /

// task 4

function showModal() {
      const list = document.getElementById('list');
      const items = Array.from(list.children);
    
      const modalList = document.getElementById('modal-list');
      modalList.innerHTML = '';
    
      // Add items to modal list in specified order
      modalList.innerHTML += `<li>${items[0].innerHTML}</li>`;
      modalList.innerHTML += `<li>${items[items.length - 1].innerHTML}</li>`;
      modalList.innerHTML += `<li>${items[1].innerHTML}</li>`;
      modalList.innerHTML += `<li>${items[3].innerHTML}</li>`;
      modalList.innerHTML += `<li>${items[2].innerHTML}</li>`;
    
      // Show modal
      const modal = document.getElementById('myModal');
      modal.style.display = "block";
    
      // When the user clicks on <span> (x), close the modal
      const span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
    
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}
    
    
// task 5

const header = document.querySelector("h1");
      header.remove();

const fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
      fourthParagraph.remove();

// //// /

// task 6

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let temp;

let message1 = prompt("Enter message 1:");
input1.value = message1;
let message2 = prompt("Enter message 2:");
input2.value = message2;

temp = input1.value;
input1.value = input2.value;
input2.value = temp;

// //// /

// task 7

// Create a new HTML document
const doc = document.implementation.createHTMLDocument();

// Get the <html> element
const html = doc.documentElement;

// Get the <body> element
const body = doc.body;

// Create a new <main> element with class attribute "mainClass check item"
const main = doc.createElement('main');
main.setAttribute('class', 'mainClass check item');

// Create a new <div> element with id attribute "myDiv"
const div = doc.createElement('div');
div.setAttribute('id', 'myDiv');

// Create a new <p> element with text content "First paragraph"
const p = doc.createElement('p');
p.textContent = 'First paragraph';

// Append the <p> element to the <div> element
div.appendChild(p);

// Append the <div> element to the <main> element
main.appendChild(div);

// Append the <main> element to the <body> element
body.appendChild(main);

// Append the <body> element to the <html> element
html.appendChild(body);

// Output the HTML code of the document
console.log(doc.documentElement.outerHTML);


// //// /