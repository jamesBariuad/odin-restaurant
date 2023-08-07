console.log("olleh drolw hey this works");
import './styles.css'
import displayMenu  from './menu';
import displayHome from './home';
import displayContactPage from './contact';

function homepage() {
  const body = document.querySelector('body')
  const content = document.createElement("div");
  content.setAttribute('id','content')
  body.appendChild(content)
  const header = document.createElement("header");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "L'A CARINDERIA"
 
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const homeListItem = document.createElement("li");
  const menuListItem = document.createElement("li");
  const contactListItem = document.createElement("li");

  menuListItem.addEventListener('click',displayMenu)
  homeListItem.addEventListener('click', displayHome)
  contactListItem.addEventListener('click', displayContactPage)

  homeListItem.textContent = "Home";
  menuListItem.textContent = "Menu";
  contactListItem.textContent = "Contact";
  ul.append(homeListItem, menuListItem, contactListItem);

  header.append(restaurantName,nav);
  nav.appendChild(ul);

  content.appendChild(header);

  //main
  const main = document.createElement("main");
 
  content.appendChild(main)
  // displayMenu()

  //footer

  const footer = document.createElement("footer");
  footer.textContent = 'photos taken from: https://migrationology.com/filipino-food-carinderia/' 
    content.appendChild(footer)
}
homepage();
displayHome()
