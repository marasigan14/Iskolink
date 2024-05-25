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