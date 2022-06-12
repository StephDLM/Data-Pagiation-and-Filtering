/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


console.log(data);
/*
Create the `showPage` function that accepts the parameters list and page which will create and insert the elements needed to display a "page" of nine students
Create a parameter with the class of '.student-list', and set it equal to an empty string to remove student previously displayed
*/
function showPage(list, page) {
   const studentList = document.querySelector(".student-list")
   studentList.innerHTML = '';
//create 2 variables that will make only 9 students appear on one page.
//Then, loop this so it will repeat it through the entire list
    for (let i=0; i < list.length; i++ ){
      const startIndex = page * 9 - 9;
      const endIndex = page * 9;
//make a conditional statement that tests if the index is between 1-8. Then, create the DOM element to display the students    
      if (i >= startIndex && i < endIndex) {
         let studentItem = 
         `
         <li class=student-item cf}>
         <div class="student-details">
           <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class = 'email'>${list[i].email}</span>
         </div>
         <div "joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
         </li> 
        `;
        //insert the DOM element into the DOM using insertAdjacentHTML
      studentList.insertAdjacentHTML('beforeend', studentItem);
      };
   };
};

//Create ta function that will insert the elements needed for the pagination buttons
//Create variables that provide number of pages based on list length and what selects link list
function addPagination (list){
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

//Create a loop that will create a button for every page for the list 
   for (let i=1; i <= numOfPages; i++){
      const button = 
         `<li>
         <button type="button">${i}</button>
         </li>`;
//insert the DOM element
      linkList.insertAdjacentHTML('beforeend', button);
//create a variable that represents the first button and select it's active class
      let firstButton = document.querySelector('li button');
      firstButton.className = 'active';
   };
/*
Create an eventListener that will be become active when the button is clicked
If clicked, use existing active button to get rid of active class */
      linkList.addEventListener('click', (e) =>{
         if (e.target.tagName === 'BUTTON'){
            let active_button = document.querySelector('.active'); 
            active_button.className = '';
            e.target.className ='active';
            showPage (list, e.target.textContent);
         }
      });
   }
//call functions to make data appear in each page 
showPage(data, 1);
addPagination(data);

//Create a search bar and add the class list. Use the document query selector to select the first item from the header
const header = document.querySelector('header');
//Create a label element that contains the student list- this will allow the search button to look for students 
const studentList = document.createElement('label');
//studentList.textContent = 'Search'
//Add the class list for the student list 
studentList.classList.add('.student-search')
//Insert the html that will show in the search bar to the studentList label 
studentList.innerHTML =
   `<label for="search" class="student-search">
   <span>Search by name</span>
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`;
//append the studentList to header
header.appendChild(studentList);
// header.insertAdjacentHTML('beforeend', inputValue);


//function that will input 2 parameters, one for the input value and the other to access the list data
function searchComponent (input, list){
   let newList = [];
// for loop that goes through list and meets the conditions to find student
   for ( let i=0; i < list.length; i++ ){
      let firstInput = list[i].name.first.toLowerCase();
      let secondInput = list[i].name.last.toLowerCase();
      
//console.log(list[i]);   
//create a conditional statement that checks if 2 the inputs are a value in the data, then add to the new array
      if ( firstInput.includes(input.value.toLowerCase()) || secondInput.includes(input.value.toLowerCase()) ){
         newList.push(list[i]);

          }
      }
//call functions
showPage(newList, 1);
addPagination(newList);
};

//Add an event listener to the header for each input 
search.addEventListener("keyup", () => {
//Create a conditional statement that shoes if the value is not 0, use the function SearchComponent, and if there is not input, show the list of students on the page
   if(search.value.length != 0) {
      searchComponent(search, data);
   } else {
      showPage(data, 1)
      addPagination(data);
//call the function in EventListener
//searchComponent (search, data);
// console.log(search);


   }})





