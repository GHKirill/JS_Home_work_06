function calculateCategories() {
  const categories = document.querySelectorAll(".item");
  console.log(`Number of categories: ${categories.length}`);
  [...categories].map((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(
      `Elements: ${item.firstElementChild.nextElementSibling.children.length}`
    );
  });
}
calculateCategories();
