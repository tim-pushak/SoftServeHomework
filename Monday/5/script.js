"use strict";

// task 1

const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (link.getAttribute('href').startsWith('https://')) {
    link.setAttribute('target', '_blank');
  }
}

// //// /

// task 2

// Find all h2 elements with class 'head' and set their background color to green
const headerElements = document.querySelectorAll("h2.head");
headerElements.forEach((element) => {
  element.style.backgroundColor = "green";
});

// Find all elements with class 'inner' inside h2 elements and set their font size to 35px
const innerElements = document.querySelectorAll("h2 .inner");
innerElements.forEach((element) => {
  element.style.fontSize = "35px";
});

// //// /

// task 3

const headers = document.querySelectorAll('h3');

headers.forEach(header => {
  const div = header.nextElementSibling;
  if (div.tagName.toLowerCase() === 'div') {
    header.parentNode.insertBefore(div, header);
  }
});

// //// /

// task 4

const checkboxes = document.querySelectorAll('input[type=checkbox]'); // get all checkboxes
let countChecked = 0; // initialize counter for checked checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => { // add event listener for change event
        if (checkbox.checked) { // if checkbox is checked
            countChecked++; // increment checked counter
            if (countChecked >= 3) { // if at least 3 checkboxes are checked
                checkboxes.forEach((checkbox) => { // loop through all checkboxes
                    if (!checkbox.checked) { // if checkbox is not checked
                        checkbox.disabled = true; // disable checkbox
                    }
                });
            }
        } else { // if checkbox is unchecked
            countChecked--; // decrement checked counter
            if (countChecked < 3) { // if less than 3 checkboxes are checked
                checkboxes.forEach((checkbox) => { // loop through all checkboxes
                    checkbox.disabled = false; // enable all checkboxes
                });
            }
        }
    });
});

// //// /