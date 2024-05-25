document.getElementById('editProfilePic').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('profilePic').src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById('submitAbout').addEventListener('click', function() {
    var aboutText = document.getElementById('aboutContent').innerText;
    // You can now save aboutText to your database or server
    // For now, we'll just log it to the console
    console.log(aboutText);
});

document.getElementById('uploadImage').addEventListener('click', function() {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const galleryContainer = document.getElementById('galleryContainer');

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100px'; // Adjust the size as needed
            img.style.height = '100px'; // Adjust the size as needed
            img.style.margin = '10px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '10px';
            galleryContainer.appendChild(img);
        };
        reader.readAsDataURL(files[i]);
    }
});