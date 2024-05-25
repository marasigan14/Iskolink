// Get the modal
var modal = document.getElementById('termsModal');

// Get the button that opens the modal
var btn = document.getElementById('termsLink');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// JavaScript
// Get the privacy policy modal
var privacyModal = document.getElementById('privacyModal');

// Get the link that opens the privacy policy modal
var privacyBtn = document.getElementById('privacyLink');

// Get the <span> element that closes the modal
var closeBtns = document.getElementsByClassName('close'); // This will get all close buttons

// When the user clicks on the privacy policy link, open the modal 
privacyBtn.onclick = function() {
  privacyModal.style.display = 'block';
}

// When the user clicks on any (x), close the respective modal
for (var i = 0; i < closeBtns.length; i++) {
  closeBtns[i].onclick = function() {
    var modal = this.closest('.modal');
    modal.style.display = 'none';
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}
