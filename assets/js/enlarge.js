// Open modal and show the clicked image
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("enlargedImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target !== modalImg) {
            closeModal();
        }
    });
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
