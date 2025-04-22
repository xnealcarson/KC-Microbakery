//SEARCH BAR FUNCTIONALITY//
document.getElementById('search-toggle').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent link default behavior
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
});

//MY CODE FOR MENU GALLERY FUNCTIONALITY//
/*document.getElementById('image-tile').addEventListener('click', function(event) {
   console.log("image clicked!")

});

document.getElementById('image-tile2').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile3').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile4').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile5').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile6').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile7').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile8').addEventListener('click', function(event) {
    console.log("image clicked!")
});

document.getElementById('image-tile9').addEventListener('click', function(event) {
    console.log("image clicked!")
});*/

// First, let's update your HTML structure to add IDs to all images
// Each image container should have a unique ID like 'image-tile-1', 'image-tile-2', etc.



//CLAUDE'S RECOMMENDATION//
// JavaScript for creating modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal elements once and append to body
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalImage = document.createElement('img');
    modalContent.appendChild(modalImage);
    
    const closeButton = document.createElement('span');
    closeButton.className = 'modal-close';
    closeButton.innerHTML = '&times;';
    modalContent.appendChild(closeButton);
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Get all image tiles
    const imageTiles = document.querySelectorAll('.image-item');
    
    // Add click event to each image tile
    imageTiles.forEach(function(tile, index) {
      tile.addEventListener('click', function() {
        console.log("Image clicked: " + index);
        
        // Get the source of the clicked image
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        
        // Set the modal image source
        modalImage.src = imgSrc;
        modalImage.alt = imgAlt;
        
        // Display the caption if it exists
        const caption = this.querySelector('.caption');
        if (caption) {
          const modalCaption = document.createElement('div');
          modalCaption.className = 'modal-caption';
          modalCaption.textContent = caption.textContent;
          
          // Remove any existing caption before adding new one
          const existingCaption = modalContent.querySelector('.modal-caption');
          if (existingCaption) {
            modalContent.removeChild(existingCaption);
          }
          
          modalContent.appendChild(modalCaption);
        }
        
        // Show the modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
      });
    });
    
    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside the image
    modalOverlay.addEventListener('click', function(event) {
      if (event.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

