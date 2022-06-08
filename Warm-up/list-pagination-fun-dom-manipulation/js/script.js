/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Fun DOM Manipulation - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to target the `body` element */
const body = document.querySelector('body');

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a `H1` element and store it in a variable
let h1 = document.createElement('H1');

  // 1a. Set the `H1` element's `innerHTML` equal to "Fun DOM Manipulation"
  document.h1.innerHTML = "Fun DOM Manipulation";

  // 1a. Set the `H1` element's `id` equal to "main-heading"

  document.getElementsByClassName(h1).id='main-heading';

  // 1b. Append the `H1` element to the `body` element - body variable created for you above
  h1.append(body);

// 2. Create a `DIV` element and store it in a variable
let div = document.createElement('DIV');


  // 2a. Set the `DIV` element's `id` attribute equal to "boat-container"
document.getElementsByClassName(div).id='boat-container'

  // 2b. Set the `DIV` element's `class` attribute equal to "boat-container"
document.getElementsByClassName(div).class='boat-container'
  // 2c. Append the `DIV` element to the `body` element - body variable created for you above
body.append(div);


// 3. Create an `IMG` element and store it in a variable
let img = document.createElement('IMG');

  // 3a. Set the `IMG` element's `src` attribute equal to "img/boat.png"
document.getElementsByClassName('img').src="img/boat.png"; 
   // 3b. Set the `IMG` element's `alt` attribute equal to "Tugboat"
document.getElementsByClassName(img).alt="Tugboat"; 

  // 3c. Set the `IMG` element's `id` attribute equal to "boat-img"
 document.getElementsByClassName(img).id="boat-img"; 

  // 3d. Append the `IMG` element to the `DIV` element you created above
body.append(img);


// 4. Create another `IMG` element and store it in a variable
let img2 = document.createElement('IMG2')
  // 4a. Set the `IMG` element's `src` attribute equal to "img/mike.png"
  // 4b. Set the `IMG` element's `alt` attribute equal to "Mike The Frog"

  // 4c. Set the `IMG` element's `id` attribute equal to "mike"

  // 4d. Set the `IMG` element's `class` attribute equal to "mike"

  // 4e. Append the `IMG` element to the `body` element
  body.append(img2);