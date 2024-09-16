// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Add an event listener, wait for the page content to be loaded
document.addEventListener('DOMContentLoaded', () => {

    // Define a few constants we will reference later in this function
          const toggleButton = document.getElementById('toggle');
          const pageBody = document.body;

    // I used w3 schools to figure out how to read data from local storage 
 // Link: https://www.w3schools.com/jsref/prop_win_localstorage.asp
          const currentMode = localStorage.getItem('mode');

 // Create an if statement on what to do initially based on what is in local storage
        if (currentMode == "dark") {
             pageBody.classList.remove('light');
              pageBody.classList.add('dark');
        }
    else {
              pageBody.classList.remove('dark');
              pageBody.classList.add('light');
        }

     // Add an on click event listener to change the mode by clicking a button
        toggleButton.addEventListener('click', () => {

  // If it is currently on light mode:
     // Remove the light mode, set it to dark mode, store it locally
          if (pageBody.classList.contains('light')) {
                pageBody.classList.remove('light');
                pageBody.classList.add('dark');
                localStorage.setItem('mode', 'dark');
          }

   // Else: it is currently on dark mode
   // remove the dark mode, set it to light mode, store it locally
          else {
                pageBody.classList.remove('dark');
                pageBody.classList.add('light');
                localStorage.setItem('mode', 'light');
          }
    });

});


// -------------------------------------------------------------
// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// I used W3 schools to figure out how to get data from local storage 
// Link: https://www.w3schools.com/jsref/prop_win_localstorage.asp

function readLocalStorage(key){
// get data from local storage
          const localData = localStorage.getItem(key);

          // If statements for error handling
          // If no data is found, return an empty array
          if (localData === null) {
                return {};
          }
 
      // If data is found try to return the data
          try {
                return JSON.parse(localData);
          }

          // If data is not found, create a console error and return empty object
          catch (error) {
                return {};
          }
}






//--------------------------------------------------------------
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// Function to store new blog data in local storage
// Note from Dani: only take in data, not the key
function storeLocalStorage(blog) {
  // Check if the blog object has all the required properties
  if (!blog.username || !blog.title || !blog.content) {
      console.error('Invalid blog post object. Must contain username, title, and content.');
      return [];
  }

  // Retrieve existing blog posts from local storage, or initialize an empty array if none exist
  let blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  // Add the new blog post to the array
  blogs.push(blog);

  // Store the updated array back in local storage
  localStorage.setItem('blogs', JSON.stringify(blogs));
}




//--------------------------------------------------------------
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'blog.html';

const redirectPage = function (url) {
redirectURL = url;
location.assign(url);
};
