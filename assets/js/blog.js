// TODO: Create a variable that selects the main element, and a variable that selects the back button element
let mainContent = document.getElementById('main');
let backButton = document.getElementById('back');






//--------------------------------------------------------------
// TODO: Create a function that builds an element and appends it to the DOM
function addToDOM(elementID, elementContent) {
const element = document.getElementById(elementID);
    if (element) {
            element.innerHTML += elementContent;
    } else {
            return {}
    }
}







//--------------------------------------------------------------
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPostHandling() {
    addToDOM("articles", "No Blog posts yet...");
}






//--------------------------------------------------------------
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// I had a lot of trouble with this function. I had to use the Xpert Learning assistant to help me troubleshoot and rewrite this function several times
// After I got the function working I had the learning assistant help me break down this function so that I could understand it

function readLocalStorage(key) {
const data = localStorage.getItem(key);
// Parse the JSON string into an array, or return an empty array if parsing fails
try {
    return JSON.parse(data) || [];
} catch (e) {
    console.error("Error parsing local storage data:", e);
    return [];
}
}

function renderBlogList() {
// Get the data from local storage
const blogPostData = readLocalStorage('blogs');

// Ensure blogPostData is an array
const posts = Array.isArray(blogPostData) ? blogPostData : [];
// dafine where I want the blog articles to appear on the page
const articles = document.getElementById('articles');

// If there is data, render each blog post
if (posts.length > 0) {
//for each post, create an <li> for each blog post it finds
    posts.forEach(post => {
        if (post && typeof post === 'object') {
            const { title, content, username } = post;
            if (title && content && username) {
                addToDOM('articles', `<li><article><h2>${title}</h2><blockquote>${content}</blockquote><p>Posted by: ${username}</p></article></li>`);
            } 
        } 
    });
} else {
    // Handle the case where there are no blog posts
    noBlogPostHandling();
}
}


//--------------------------------------------------------------
// TODO: Call the `renderBlogList` function
renderBlogList();


// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
document.getElementById('back').addEventListener('click', function(){
  redirectPage('index.html');
});
