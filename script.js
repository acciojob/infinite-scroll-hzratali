//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  const listItemHeight = 50; // Height of each list item in pixels
  let itemCount = 10; // Initial number of list items
  let isLoading = false;

  // Function to add more list items
  function addMoreItems() {
    isLoading = true;
    // Simulate loading delay
    setTimeout(() => {
      for (let i = 0; i < 2; i++) {
        const li = document.createElement("li");
        li.textContent = "Item " + (++itemCount);
        list.appendChild(li);
      }
      isLoading = false;
    }, 1000); // Change delay time as needed
  }

  // Initial population of list items
  for (let i = 1; i <= itemCount; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }

  // Event listener for scroll
  list.addEventListener("scroll", function () {
    if (!isLoading && list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addMoreItems();
    }
  });
});
