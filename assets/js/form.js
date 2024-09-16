// TODO: Create a variable that selects the form element
      // Define two variables that I will use later in the code
      var blogForm = document.getElementById('blogForm');
      var errorBox = document.getElementById('error');







// -------------------------------------------------------------
function handleSubmission(event) {
    event.preventDefault();

    // Define some variables to use later
    var username = document.getElementById('username').value;
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var errorBox = document.getElementById('error'); // Ensure errorBox is defined

    // Error handling: if they do not input anything into a field create an error box
    if (username === "" || title === "" || content === "") {
        errorBox.textContent = 'Please complete the form.';
    } else {
        a= "hello";

        // Create a new blog post object
        var newPost = {
            username: username,
            title: title,
            content: content
        };

        // Store the new post using the storeLocalStorage function
        storeLocalStorage(newPost);


        // Redirect to the blog page
        redirectPage("blog.html");
    }
}







// -------------------------------------------------------------

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
    var blogForm = document.getElementById('blogForm');
    blogForm.addEventListener('submit', handleSubmission)