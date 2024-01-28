let thumbnailContainer = document.getElementById("thumbnailcontainer");

let displayImage = document.getElementById("display");

let images = [
  {
    url: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "field",
  },
  {
    url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "mountains",
  },
];

const createThumbnails = (arrayOfImages) => {
  arrayOfImages.forEach((image) => {
    let imageElement = document.createElement("img");

    imageElement.src = image.url;

    imageElement.alt = image.alt;

    thumbnailContainer.appendChild(imageElement);
  });
};
createThumbnails(images);

displayImage.addEventListener;
arrayOfImages;
