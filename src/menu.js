import liempo from './liempo.jpg'
import tilapia from './tilapia.jpg'
import pinakbet from './pinakbet.jpg'
import kaldereta from './kaldereta.jpg'
import pusit from './pusit.png'
import bbq from './bbq.jpg'
import sabaw from './sabaw.jpg'

const menu = [
  {
    name: "Grilled Tilapia",
    price: 100,
    description:
      "Flaky fillet, expertly seasoned, served with signature sauce and veggies.",
      image: tilapia
  },
  {
    name: "Grilled Pork Belly",
    price: 150,
    description: "Succulent, seasoned, sensational.",
    image: liempo
  },
  {
    name: "Pinakbet",
    price: 70,
    description: "Vibrant veggies, tender shrimp, rich Filipino flavors.",
    image: pinakbet
  },
  {
    name: "Kaldereta",
    price: 150,
    description: "Hearty goat meat stew with bold, savory flavors.",
    image: kaldereta
  },
  {
    name: "Adobong Pusit",
    price: 130,
    description: "Tangy, tender, and irresistible",
    image: pusit
  },
  {
    name: "Pork BBQ",
    price: 140,
    description: "Grilled perfection, smoky-sweet and succulent.",
    image: bbq
  },
  {
    name: "House Soup",
    price: "FREE",
    description: " Comforting, flavorful, home in a bowl. Unli refills",
    image: sabaw
  },
];

export default function displayMenu() {
  const main = document.querySelector('main')
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  const menuCard = document.createElement("div");
  menuCard.setAttribute("class", "card");

  for (let i = 0; i < menu.length; i++) {
    const menuItem = document.createElement("div");
    menuItem.setAttribute("class", "card");
    const menuItemImage = document.createElement("img");
    const details = document.createElement('div')
    details.setAttribute('class','details')
    const menuItemName = document.createElement("h4");
    const menuItemPrice = document.createElement("span");
    const menuItemDescription = document.createElement("p");

    menuItemImage.src= menu[i].image;
    menuItemName.textContent = menu[i].name;
    menuItemPrice.textContent = "₱"+ menu[i].price;
    const menuItemTopContent = document.createElement('div')
    menuItemTopContent.classList.add('menu-item-top-content')

    menuItemDescription.textContent = menu[i].description;

    menuItemTopContent.append(menuItemName,menuItemPrice)
    details.append(menuItemTopContent,menuItemDescription)
    menuItem.append(menuItemImage, details )
    menuContainer.appendChild(menuItem)
  }

  main.replaceChildren()
  main.appendChild(menuContainer)

  
}
