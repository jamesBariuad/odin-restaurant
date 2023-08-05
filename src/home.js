export default function displayHome(){
    const main =document.querySelector('main')
    main.replaceChildren()
    const restaurantNameSubtext = document.createElement('span')
    const restaurantNameCentre = document.createElement('h1')
   
    restaurantNameCentre.textContent = `L'A CARINDERIA`
    restaurantNameSubtext.textContent = "Savor the Essence of Local Flavors: Where Every Meal Tells a Story.";
  
    const mainDiv = document.createElement("div");
    mainDiv.classList.add('restaurant-name')
    mainDiv.append(restaurantNameCentre,restaurantNameSubtext,)
    main.append(mainDiv)
} 