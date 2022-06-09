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
//make a conditional statement that tests if the index is between 1-8. The, create the DOM element to display the students    
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
showPage(data, 1);

//Create the `addPagination` that will insert the elements needed for the pagination buttons
//Create variables that provide number of pages based on list length and what selects link list

function addPagination (list){
   const numOfPages = Math.ceil(list.length / 9);
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
//Create a loop that will create a button for every page for the list 
   for (let i=1; i <= numOfPages; i++){
      let button = `
         <li>
         <button type="button">${i}</button>
         </li>
        `;
//insert the DOM element
        linkList.insertAdjacentHTML('beforeend', button);
      }
      //create a variable that adds active class to the first button
      let firstButton = linkList.querySelector('button','active');
/*
Create an eventListener that will be become active when the button is clicked
Use 
*/
      linkList.addEventListener('click', (e) =>{
         if (e.target.tagName === 'BUTTON'){
            let buttonClicked = document.querySelector('.active') 
            buttonClicked = '';
            e.target.classList.add ('active');
            showPage (list, e.target.textContent);

      }
   })
};

// Call functions

showPage(data, 1);
addPagination(data);