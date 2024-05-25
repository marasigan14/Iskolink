function changeTextAndIcon() {
    var heading = document.getElementById('matchHeading');
    var instruction = document.getElementById('matchInstruction');
    var icon = document.getElementById('matchIcon');
    var button = document.getElementById('matchButton');
    var matchedUserProfile = document.getElementById('matchedUserProfile');

    // Disable the button and change the cursor to default
    button.disabled = true;
    button.style.cursor = 'default';

    // Start searching...
    heading.innerHTML = "Looking for a link...";
    instruction.innerHTML = "Please wait for a moment...";
    icon.src = 'searching-link.png'; // Change to your 'searching' icon path

    // Simulate finding a link after some time
    setTimeout(function() {
        // Change the heading text to prompt the user to click the icon
        heading.innerHTML = "Press the icon to show who you are linked with";
        instruction.innerHTML = "Link found!";
        icon.src = 'found-link.png'; // Change to your 'link found' icon path

        // Stop the animation
        icon.style.animation = 'none';

        // Trigger confetti effect
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Re-enable the button and change the cursor to pointer
        button.disabled = false;
        button.style.cursor = 'pointer';

        // Add an event listener to handle click after finding a link
        button.onclick = function() {
            // Replace the content with the matched user profile
            heading.style.display = 'none';
            instruction.style.display = 'none';
            button.style.display = 'none'; // Hide the button itself
                    
            // Trigger confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            // Display the matched user profile
            matchedUserProfile.style.display = 'block';
            document.getElementById('userProfile').style.backgroundImage = 'url(male.png)';
            document.getElementById('matchedProfile').style.backgroundImage = 'url(female.png)';
            document.getElementById('matchedUsername').textContent = '[username]'; // Replace with the actual matched username
            document.getElementById('connectionIcon').src = 'linkages-icon.png'; // Replace with the actual path to your connection icon image

            // Scroll into view if needed
            matchedUserProfile.scrollIntoView({ behavior: 'smooth' });
        };
    }, 5000); // Adjust time as needed for your application
}
