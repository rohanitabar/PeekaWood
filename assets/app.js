// SearchBox
    // Variables  
    const searchBar=document.querySelector('.searchBar')
    const searchInput = document.getElementById('search-inp');  
    const submit = document.getElementById('search-btn');  
    const divs = document.getElementsByTagName('div');   

        // Events & Works
        function SearchBox(){
            submit.addEventListener('click', e => {  
                e.preventDefault(); // Prevent default form submission  

                const query = searchInput.value.toLowerCase().trim(); // Trim whitespace  
                const isEmptyQuery = query === ""; // if query is empty  

                for (let i = 0; i < divs.length; i++) {  
                    const content = divs[i].textContent.toLowerCase();  

                    if (isEmptyQuery || content.includes(query) || i === 0) {  
                        divs[i].classList.remove('hidden'); // Show element  
                    } else {  
                        divs[i].classList.add('hidden'); // Hide element  
                    }  
                }  
            });
        }
// End Search Box

// Comment Box  

    // Variables  

    const ButtonSend = document.getElementById('buttonSend');  
    const User = document.getElementById('user'.valueOf);  
    const CommentBox = document.getElementById('commentBox'.valueOf);  
    const commentsSection = document.getElementById('commentsSection');   

    // Function to display comments from localStorage  

    function displayComments() {  
        // Get comments from localStorage  

        const comments = JSON.parse(localStorage.getItem('comments')) || [];  
        comments.forEach(comment => {  
            appendComment(comment.user, comment.text);  
        });  
    }  

    // Function to append a single comment  

    function appendComment(user, text) {  
        const commentDiv = document.createElement('div');  
        commentDiv.className = 'comBox';   
        commentDiv.innerHTML =   
        `<h3 class="comTitle">${user}</h3>  
        <p class="comBody">${text}</p>`;  
        commentsSection.appendChild(commentDiv);  
    }  
  
            //if input fields are filled  
        if (User.value.trim() !== '' && CommentBox.value.trim() !== '') {  
            // Create a comment object  
    const comment = {  
        user: User.value.trim(),  // Trim whitespace  
        text: CommentBox.value.trim()  // Trim whitespace  
    };  

            // Basic validation to ensure both fields are filled  
    if (comment.user && comment.text) {  
            // Retrieve existing comments from localStorage  
        let comments = [];  
        try {  
            const storedComments = localStorage.getItem('comments');  
            comments = storedComments ? JSON.parse(storedComments) : [];  
        } catch (error) {  
            console.error("Could not parse comments from localStorage:", error);  
        }  

            // Add the new comment  
        comments.push(comment);  

            // Save comments back to localStorage  
        try {  
            localStorage.setItem('comments', JSON.stringify(comments));  
        } catch (error) {  
            console.error("Could not save comments to localStorage:", error);  
        }  
    } else {  
        console.warn("Both user and comment text must be provided.");  
    }

            // Append new comment to comments section  
            appendComment(comment.user, comment.text);  

            // Clear input fields after send   
            User.value = '';  
            CommentBox.value = '';  
        } else {  
            alert("لطفا همه قسمت ها را پر کنید");   
        }

        // Attach the event listener only once  
    ButtonSend.addEventListener('click', sendComm);  

        // Display comments on page load  
    window.onload = displayComments;
// End Comment Box