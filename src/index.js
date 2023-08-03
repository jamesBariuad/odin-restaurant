console.log("olleh drolw hey this works");
import './styles.css'

function homepage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

 

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const homeListItem = document.createElement("li");
  const menuListItem = document.createElement("li");
  const contactListItem = document.createElement("li");

  homeListItem.textContent = "Home";
  menuListItem.textContent = "Menu";
  contactListItem.textContent = "Contact";
  ul.append(homeListItem, menuListItem, contactListItem);

  header.append(nav);
  nav.appendChild(ul);

  content.appendChild(header);

  //main
  const main = document.createElement("main");
  const restaurantName = document.createElement("h1");
  const restaurantNameSubtext = document.createElement('span')
  restaurantName.textContent = "L'A CARINDERIA";
  restaurantNameSubtext.textContent = "Savor the Essence of Local Flavors: Where Every Meal Tells a Story.";

  const mainDiv = document.createElement("div");
  
  mainDiv.append(restaurantName,restaurantNameSubtext,)
  main.append(mainDiv)
  content.appendChild(main)

  //footer

  const footer = document.createElement("footer");
  footer.innerHTML =
    'Photo by <a href="https://unsplash.com/@kimdonkey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Manki Kim</a> on <a href="https://unsplash.com/photos/LFN0zydU6Uc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    content.appendChild(footer)
}
homepage();
