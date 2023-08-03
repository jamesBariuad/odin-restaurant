const menu = [
  {
    name: "Grilled Tilapia",
    price: 100,
    desc: "Flaky fillet, expertly seasoned, served with signature sauce and veggies.",
  },
  {
    name: "Grilled Pork Belly",
    price: 150,
    desc: "Succulent, seasoned, sensational.",
  },
  {
    name: "Pinakbet",
    price: 70,
    desc: "Vibrant veggies, tender shrimp, rich Filipino flavors.",
  },
  {
    name: "Kaldereta",
    price: 150,
    desc: "Hearty meat stew with bold, savory flavors.",
  },
  {
    name: "Adobong Pusit",
    price: 130,
    desc: "Tangy, tender, and irresistible",
  },
  {
    name: "Pork BBQ",
    price: 140,
    desc: "Grilled perfection, smoky-sweet and succulent.",
  },
  {
    name: "House Soup",
    price: "FREE",
    desc: " Comforting, flavorful, home in a bowl. Unli refills",
  },
];

export function displayMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");
  const menuCard = document.createElement("menu-card");
  menuCard.setAttribute("class", "card");

  for (i = 0; i < menu.length; i++) {
    const menuCard = document.createElement("menu-card");
    menuCard.setAttribute("class", "card");
  }
}
