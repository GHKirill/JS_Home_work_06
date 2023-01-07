const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//option without insertAdjacentHTML

// function createCollectionElement({ url, alt }) {
//   let elementContainer = document.createElement("li");
//   elementContainer.classList.add("flex-element");
//   let elementImage = document.createElement("img");
//   elementImage.classList.add("flex-photo");
//   elementImage.src = url;
//   elementImage.alt = alt;
//   elementContainer.append(elementImage);
//   return elementContainer;
// }

function createCollectionElement({ url, alt }) {
  let elementContainer = document.createElement("li");
  elementContainer.classList.add("flex-element");
  elementContainer.insertAdjacentHTML(
    "beforeend",
    `<img class = 'flex-photo' src = '${url}'  alt = '${alt}' ></li>`
  );
  return elementContainer;
}

function createCollection(images) {
  let galleryRef = document.querySelector(".gallery");
  galleryRef.classList.add("flex-container");

  const collection = images.map(createCollectionElement);
  galleryRef.append(...collection);
}
createCollection(images);
