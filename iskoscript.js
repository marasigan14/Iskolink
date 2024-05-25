document.addEventListener('DOMContentLoaded', (event) => {
    const postContentInput = document.getElementById('post-content');
    const postImageInput = document.getElementById('post-image');
    const newsfeedContainer = document.querySelector('.newsfeed-container');
    const userPhotoSrc = 'male.png'; // The path to the user's profile photo
    const currentUsername = 'CurrentUsername'; // Replace with the actual username
    let imageSrc = ''; // Variable to store the image source

    // Call this function for existing posts in the newsfeed
document.querySelectorAll('.newsfeed-item .post-image').forEach(function(img) {
  img.onclick = function() {
    openFullSizeImage(img.src, img.alt);
  };
});
  
    // Function to create a new post element
    function createPostElement(text, imageSrc) {
      const newsfeedItem = document.createElement('div');
      newsfeedItem.classList.add('newsfeed-item');
  
      // User Info
      const userInfo = document.createElement('div');
      userInfo.classList.add('user-info');
      const userPhoto = document.createElement('img');
      userPhoto.setAttribute('src', userPhotoSrc);
      userPhoto.classList.add('profile-icon');
      const userDetails = document.createElement('div');
      userDetails.classList.add('user-details');
      const username = document.createElement('div');
      username.classList.add('username');
      username.textContent = currentUsername;
      const timePosted = document.createElement('div');
      timePosted.classList.add('time-posted');
      timePosted.textContent = 'Just now'; // You can replace this with actual time logic
      userDetails.appendChild(username);
      userDetails.appendChild(timePosted);
      userInfo.appendChild(userPhoto);
      userInfo.appendChild(userDetails);
  
      // Post Content
      const postContent = document.createElement('div');
      postContent.classList.add('post-content');
      
      // Replace line breaks with <br> tags before adding to postContent
      if (text) {
        const formattedText = text.replace(/\n/g, '<br>'); // Use regular expression to replace all occurrences of \n with <br>
        const postText = document.createElement('div'); // Use div instead of p to allow innerHTML
        postText.classList.add('post-text');
        postText.innerHTML = formattedText; // Use innerHTML to parse <br> tags
        postContent.appendChild(postText);
      }
      if (imageSrc) {
        const postImage = document.createElement('img');
        postImage.classList.add('post-image');
        postImage.src = imageSrc;
        postImage.alt = 'User Post'; // Add an appropriate alt text
        postImage.onclick = function() {
          openFullSizeImage(imageSrc, postImage.alt);
        };
        postContent.appendChild(postImage);
      }

      
      // Interaction Buttons
      const interactionButtons = document.createElement('div');
      interactionButtons.classList.add('interaction-buttons');
      const heartButton = document.createElement('button');
      heartButton.classList.add('heart-button');
      heartButton.textContent = '❤️';
      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-button');
      commentButton.textContent = '💬';
      const shareButton = document.createElement('button');
      shareButton.classList.add('share-button');
      shareButton.textContent = '🔗';
      interactionButtons.appendChild(heartButton);
      interactionButtons.appendChild(commentButton);
      interactionButtons.appendChild(shareButton);
  
      // Append user info, post content, and interaction buttons to new post
      newsfeedItem.appendChild(userInfo);
      newsfeedItem.appendChild(postContent);
      newsfeedItem.appendChild(interactionButtons);
  
      // Insert the new post at the beginning of the newsfeed container
      newsfeedContainer.insertBefore(newsfeedItem, newsfeedContainer.firstChild);
    }

    // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

function openFullSizeImage(src, alt) {
  modal.style.display = "block";
  modalImg.src = src;
  captionText.innerHTML = alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user presses the Escape key, close the modal
document.onkeydown = function(event) {
  if (event.key === "Escape") { // Check if the key pressed is "Escape"
    modal.style.display = "none";
  }
}
  
// Event listener for the textarea
postContentInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (!event.shiftKey) {
      event.preventDefault();
      // Submit the post only if Enter is pressed without Shift
      const text = postContentInput.value.trim();
      if (text || imageSrc) {
        createPostElement(text, imageSrc);
        imageSrc = ''; // Clear the image source after posting
        postContentInput.value = ''; // Clear the textarea
      }
    }
    // If Shift+Enter is pressed, allow the default behavior of line break
  }
});


  // Event listener for the image input
  postImageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        imageSrc = e.target.result;
        // Optionally, display the selected image to the user here
      };
      reader.readAsDataURL(file);
    }
  });
});
  
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a');

  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default link behavior
          var destination = this.href;

          document.body.classList.add('fade-out'); // Add the fade-out class

          setTimeout(function() {
              window.location.href = destination;
          }, 500); // Match the timeout with the CSS animation duration
      });
  });
});
