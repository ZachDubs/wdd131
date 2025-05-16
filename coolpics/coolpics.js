const menuButton = document.querySelector("header button");
const nav = document.querySelector("header nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");
});

window.addEventListener("resize", handleResize);

function handleResize() {
    const menu = document.querySelector("header nav");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();

// Target the gallery
const gallery = document.querySelector('.gallery');

// Add a function to handle gallery image clicks
gallery.addEventListener('click', (event) => {
  // Find the closest <img> that was clicked
  const clickedImg = event.target.closest('img');
  if (!clickedImg) return;

  // Get the src and alt of the clicked image
  const thumbSrc = clickedImg.getAttribute('src');
  const altText = clickedImg.getAttribute('alt');

  // Convert thumbnail filename (e.g., "norris-sm.jpeg") to full size
  const baseName = thumbSrc.split('-')[0]; // "norris"
  const fullSrc = baseName + '-full.jpeg'; // "norris-full.jpeg"

  // Create the <dialog> element and add image and close button
  const modal = document.createElement('dialog');
  modal.classList.add('viewer');
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${altText}">
    <button class="close-viewer">X</button>
  `;

  // Append modal to the document and show it
  document.body.appendChild(modal);
  modal.showModal();

  // Close button closes and removes modal
  const closeBtn = modal.querySelector('.close-viewer');
  closeBtn.addEventListener('click', () => {
    modal.close();
    modal.remove();
  });

  // Clicking outside the image (on dialog background) closes modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
      modal.remove();
    }
  });
});

const closeBtn = modal.querySelector('.close-viewer');
closeBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})