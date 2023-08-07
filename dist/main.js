/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayContactPage)
/* harmony export */ });
/* harmony import */ var _map_marker_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-marker-outline.svg */ "./src/map-marker-outline.svg");
/* harmony import */ var _clock_time_eight_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock-time-eight-outline.svg */ "./src/clock-time-eight-outline.svg");
/* harmony import */ var _phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone.svg */ "./src/phone.svg");




function displayContactPage() {
  const main = document.querySelector("main");
  main.replaceChildren();
  const contactDetails = document.createElement("div");
  contactDetails.setAttribute("id", "contact-details");
  contactDetails.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.618807631144!2d120.99853777606856!3d14.563778085918221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c97709b5f655%3A0xa464ad44a5501332!2sSosing&#39;s%20Carinderia!5e0!3m2!1sfil!2sph!4v1691221226497!5m2!1sfil!2sph" width="300" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  const locationDiv = document.createElement("div");
  locationDiv.textContent = `
    1853 Dian St, Manila, 1235 Metro Manila
    `;
  const locationImg = document.createElement("img");
  locationImg.src = _map_marker_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
  locationDiv.appendChild(locationImg);

  const timeDiv = document.createElement("div");
  timeDiv.textContent = `Mon-Sat:8am-9pm`;
  const timeImg = document.createElement("img");
  timeImg.src = _clock_time_eight_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
  timeDiv.appendChild(timeImg);

  const phoneDiv = document.createElement("div");
  phoneDiv.textContent = "(+63)916 304 2663";
  const phoneImg = document.createElement("img");
  phoneImg.src = _phone_svg__WEBPACK_IMPORTED_MODULE_2__;
  phoneDiv.appendChild(phoneImg);

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("info");

  contactInfo.append(locationDiv, timeDiv, phoneDiv);
  contactDetails.append(contactInfo);

  main.append(contactDetails);

  //     Location
  // 12 Király Street

  // 1054, Budapest, Hungary

  // Hours
  // Tue – Thu, 8 am – 10 pm

  // Fri – Sun, 8 am – 11 pm

  // Closed Mondays

  // Contact
  // (512) 555-0110

  // LarteDellaPizza@gmail.com
}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHome)
/* harmony export */ });
function displayHome(){
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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _liempo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liempo.jpg */ "./src/liempo.jpg");
/* harmony import */ var _tilapia_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tilapia.jpg */ "./src/tilapia.jpg");
/* harmony import */ var _pinakbet_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pinakbet.jpg */ "./src/pinakbet.jpg");
/* harmony import */ var _kaldereta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kaldereta.jpg */ "./src/kaldereta.jpg");
/* harmony import */ var _pusit_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pusit.png */ "./src/pusit.png");
/* harmony import */ var _bbq_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bbq.jpg */ "./src/bbq.jpg");
/* harmony import */ var _sabaw_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sabaw.jpg */ "./src/sabaw.jpg");








const menu = [
  {
    name: "Grilled Tilapia",
    price: 100,
    description:
      "Flaky fillet, expertly seasoned, served with signature sauce.",
      image: _tilapia_jpg__WEBPACK_IMPORTED_MODULE_1__
  },
  {
    name: "Grilled Pork Belly",
    price: 150,
    description: "Succulent, seasoned, sensational.",
    image: _liempo_jpg__WEBPACK_IMPORTED_MODULE_0__
  },
  {
    name: "Pinakbet",
    price: 70,
    description: "Vibrant veggies, tender shrimp, rich Filipino flavors.",
    image: _pinakbet_jpg__WEBPACK_IMPORTED_MODULE_2__
  },
  {
    name: "Kaldereta",
    price: 150,
    description: "Hearty goat meat stew with bold, savory flavors.",
    image: _kaldereta_jpg__WEBPACK_IMPORTED_MODULE_3__
  },
  {
    name: "Adobong Pusit",
    price: 130,
    description: "Tangy, tender, and irresistible",
    image: _pusit_png__WEBPACK_IMPORTED_MODULE_4__
  },
  {
    name: "Pork BBQ",
    price: 140,
    description: "Grilled perfection, smoky-sweet and succulent.",
    image: _bbq_jpg__WEBPACK_IMPORTED_MODULE_5__
  },
  {
    name: "House Soup",
    price: "FREE",
    description: " Comforting, flavorful, home in a bowl. Unli refills",
    image: _sabaw_jpg__WEBPACK_IMPORTED_MODULE_6__
  },
];

function displayMenu() {
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


/***/ }),

/***/ "./src/bbq.jpg":
/*!*********************!*\
  !*** ./src/bbq.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/bbq.jpg";

/***/ }),

/***/ "./src/clock-time-eight-outline.svg":
/*!******************************************!*\
  !*** ./src/clock-time-eight-outline.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/clock-time-eight-outline.svg";

/***/ }),

/***/ "./src/kaldereta.jpg":
/*!***************************!*\
  !*** ./src/kaldereta.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/kaldereta.jpg";

/***/ }),

/***/ "./src/liempo.jpg":
/*!************************!*\
  !*** ./src/liempo.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/liempo.jpg";

/***/ }),

/***/ "./src/map-marker-outline.svg":
/*!************************************!*\
  !*** ./src/map-marker-outline.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/map-marker-outline.svg";

/***/ }),

/***/ "./src/phone.svg":
/*!***********************!*\
  !*** ./src/phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/phone.svg";

/***/ }),

/***/ "./src/pinakbet.jpg":
/*!**************************!*\
  !*** ./src/pinakbet.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/pinakbet.jpg";

/***/ }),

/***/ "./src/pusit.png":
/*!***********************!*\
  !*** ./src/pusit.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/pusit.png";

/***/ }),

/***/ "./src/sabaw.jpg":
/*!***********************!*\
  !*** ./src/sabaw.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/sabaw.jpg";

/***/ }),

/***/ "./src/tilapia.jpg":
/*!*************************!*\
  !*** ./src/tilapia.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/images/tilapia.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
console.log("olleh drolw hey this works");





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

  menuListItem.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__["default"])
  homeListItem.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__["default"])
  contactListItem.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__["default"])

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
(0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgbG9jYXRpb25JY29uIGZyb20gXCIuL21hcC1tYXJrZXItb3V0bGluZS5zdmdcIjtcbmltcG9ydCB0aW1lSWNvbiBmcm9tIFwiLi9jbG9jay10aW1lLWVpZ2h0LW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gXCIuL3Bob25lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY29uc3QgY29udGFjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0RGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtZGV0YWlsc1wiKTtcbiAgY29udGFjdERldGFpbHMuaW5uZXJIVE1MID1cbiAgICAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzODYxLjYxODgwNzYzMTE0NCEyZDEyMC45OTg1Mzc3NzYwNjg1NiEzZDE0LjU2Mzc3ODA4NTkxODIyMSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MzM5N2M5NzcwOWI1ZjY1NSUzQTB4YTQ2NGFkNDRhNTUwMTMzMiEyc1Nvc2luZyYjMzk7cyUyMENhcmluZGVyaWEhNWUwITNtMiExc2ZpbCEyc3BoITR2MTY5MTIyMTIyNjQ5NyE1bTIhMXNmaWwhMnNwaFwiIHdpZHRoPVwiMzAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xuXG4gIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBgXG4gICAgMTg1MyBEaWFuIFN0LCBNYW5pbGEsIDEyMzUgTWV0cm8gTWFuaWxhXG4gICAgYDtcbiAgY29uc3QgbG9jYXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2NhdGlvbkltZy5zcmMgPSBsb2NhdGlvbkljb247XG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcblxuICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGltZURpdi50ZXh0Q29udGVudCA9IGBNb24tU2F0OjhhbS05cG1gO1xuICBjb25zdCB0aW1lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdGltZUltZy5zcmMgPSB0aW1lSWNvbjtcbiAgdGltZURpdi5hcHBlbmRDaGlsZCh0aW1lSW1nKTtcblxuICBjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lRGl2LnRleHRDb250ZW50ID0gXCIoKzYzKTkxNiAzMDQgMjY2M1wiO1xuICBjb25zdCBwaG9uZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBob25lSW1nLnNyYyA9IHBob25lSWNvbjtcbiAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJbWcpO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFjdEluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgY29udGFjdEluZm8uYXBwZW5kKGxvY2F0aW9uRGl2LCB0aW1lRGl2LCBwaG9uZURpdik7XG4gIGNvbnRhY3REZXRhaWxzLmFwcGVuZChjb250YWN0SW5mbyk7XG5cbiAgbWFpbi5hcHBlbmQoY29udGFjdERldGFpbHMpO1xuXG4gIC8vICAgICBMb2NhdGlvblxuICAvLyAxMiBLaXLDoWx5IFN0cmVldFxuXG4gIC8vIDEwNTQsIEJ1ZGFwZXN0LCBIdW5nYXJ5XG5cbiAgLy8gSG91cnNcbiAgLy8gVHVlIOKAkyBUaHUsIDggYW0g4oCTIDEwIHBtXG5cbiAgLy8gRnJpIOKAkyBTdW4sIDggYW0g4oCTIDExIHBtXG5cbiAgLy8gQ2xvc2VkIE1vbmRheXNcblxuICAvLyBDb250YWN0XG4gIC8vICg1MTIpIDU1NS0wMTEwXG5cbiAgLy8gTGFydGVEZWxsYVBpenphQGdtYWlsLmNvbVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhvbWUoKXtcbiAgICBjb25zdCBtYWluID1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnJlcGxhY2VDaGlsZHJlbigpXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVTdWJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVDZW50cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICBcbiAgICByZXN0YXVyYW50TmFtZUNlbnRyZS50ZXh0Q29udGVudCA9IGBMJ0EgQ0FSSU5ERVJJQWBcbiAgICByZXN0YXVyYW50TmFtZVN1YnRleHQudGV4dENvbnRlbnQgPSBcIlNhdm9yIHRoZSBFc3NlbmNlIG9mIExvY2FsIEZsYXZvcnM6IFdoZXJlIEV2ZXJ5IE1lYWwgVGVsbHMgYSBTdG9yeS5cIjtcbiAgXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKVxuICAgIG1haW5EaXYuYXBwZW5kKHJlc3RhdXJhbnROYW1lQ2VudHJlLHJlc3RhdXJhbnROYW1lU3VidGV4dCwpXG4gICAgbWFpbi5hcHBlbmQobWFpbkRpdilcbn0gIiwiaW1wb3J0IGxpZW1wbyBmcm9tICcuL2xpZW1wby5qcGcnXG5pbXBvcnQgdGlsYXBpYSBmcm9tICcuL3RpbGFwaWEuanBnJ1xuaW1wb3J0IHBpbmFrYmV0IGZyb20gJy4vcGluYWtiZXQuanBnJ1xuaW1wb3J0IGthbGRlcmV0YSBmcm9tICcuL2thbGRlcmV0YS5qcGcnXG5pbXBvcnQgcHVzaXQgZnJvbSAnLi9wdXNpdC5wbmcnXG5pbXBvcnQgYmJxIGZyb20gJy4vYmJxLmpwZydcbmltcG9ydCBzYWJhdyBmcm9tICcuL3NhYmF3LmpwZydcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIG5hbWU6IFwiR3JpbGxlZCBUaWxhcGlhXCIsXG4gICAgcHJpY2U6IDEwMCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRmxha3kgZmlsbGV0LCBleHBlcnRseSBzZWFzb25lZCwgc2VydmVkIHdpdGggc2lnbmF0dXJlIHNhdWNlLlwiLFxuICAgICAgaW1hZ2U6IHRpbGFwaWFcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR3JpbGxlZCBQb3JrIEJlbGx5XCIsXG4gICAgcHJpY2U6IDE1MCxcbiAgICBkZXNjcmlwdGlvbjogXCJTdWNjdWxlbnQsIHNlYXNvbmVkLCBzZW5zYXRpb25hbC5cIixcbiAgICBpbWFnZTogbGllbXBvXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlBpbmFrYmV0XCIsXG4gICAgcHJpY2U6IDcwLFxuICAgIGRlc2NyaXB0aW9uOiBcIlZpYnJhbnQgdmVnZ2llcywgdGVuZGVyIHNocmltcCwgcmljaCBGaWxpcGlubyBmbGF2b3JzLlwiLFxuICAgIGltYWdlOiBwaW5ha2JldFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLYWxkZXJldGFcIixcbiAgICBwcmljZTogMTUwLFxuICAgIGRlc2NyaXB0aW9uOiBcIkhlYXJ0eSBnb2F0IG1lYXQgc3RldyB3aXRoIGJvbGQsIHNhdm9yeSBmbGF2b3JzLlwiLFxuICAgIGltYWdlOiBrYWxkZXJldGFcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQWRvYm9uZyBQdXNpdFwiLFxuICAgIHByaWNlOiAxMzAsXG4gICAgZGVzY3JpcHRpb246IFwiVGFuZ3ksIHRlbmRlciwgYW5kIGlycmVzaXN0aWJsZVwiLFxuICAgIGltYWdlOiBwdXNpdFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQb3JrIEJCUVwiLFxuICAgIHByaWNlOiAxNDAsXG4gICAgZGVzY3JpcHRpb246IFwiR3JpbGxlZCBwZXJmZWN0aW9uLCBzbW9reS1zd2VldCBhbmQgc3VjY3VsZW50LlwiLFxuICAgIGltYWdlOiBiYnFcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSG91c2UgU291cFwiLFxuICAgIHByaWNlOiBcIkZSRUVcIixcbiAgICBkZXNjcmlwdGlvbjogXCIgQ29tZm9ydGluZywgZmxhdm9yZnVsLCBob21lIGluIGEgYm93bC4gVW5saSByZWZpbGxzXCIsXG4gICAgaW1hZ2U6IHNhYmF3XG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnUubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2RldGFpbHMnKVxuICAgIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgbWVudUl0ZW1JbWFnZS5zcmM9IG1lbnVbaV0uaW1hZ2U7XG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbWVudVtpXS5uYW1lO1xuICAgIG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBcIuKCsVwiKyBtZW51W2ldLnByaWNlO1xuICAgIGNvbnN0IG1lbnVJdGVtVG9wQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW1Ub3BDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS10b3AtY29udGVudCcpXG5cbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbWVudVtpXS5kZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtVG9wQ29udGVudC5hcHBlbmQobWVudUl0ZW1OYW1lLG1lbnVJdGVtUHJpY2UpXG4gICAgZGV0YWlscy5hcHBlbmQobWVudUl0ZW1Ub3BDb250ZW50LG1lbnVJdGVtRGVzY3JpcHRpb24pXG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJdGVtSW1hZ2UsIGRldGFpbHMgKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gIH1cblxuICBtYWluLnJlcGxhY2VDaGlsZHJlbigpXG4gIG1haW4uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcilcblxuICBcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJjb25zb2xlLmxvZyhcIm9sbGVoIGRyb2x3IGhleSB0aGlzIHdvcmtzXCIpO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgZGlzcGxheU1lbnUgIGZyb20gJy4vbWVudSc7XG5pbXBvcnQgZGlzcGxheUhvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBkaXNwbGF5Q29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKVxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJMJ0EgQ0FSSU5ERVJJQVwiXG4gXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIGNvbnN0IGhvbWVMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgbWVudUxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBjb250YWN0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgbWVudUxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxkaXNwbGF5TWVudSlcbiAgaG9tZUxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUhvbWUpXG4gIGNvbnRhY3RMaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlDb250YWN0UGFnZSlcblxuICBob21lTGlzdEl0ZW0udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudUxpc3RJdGVtLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnRhY3RMaXN0SXRlbS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICB1bC5hcHBlbmQoaG9tZUxpc3RJdGVtLCBtZW51TGlzdEl0ZW0sIGNvbnRhY3RMaXN0SXRlbSk7XG5cbiAgaGVhZGVyLmFwcGVuZChyZXN0YXVyYW50TmFtZSxuYXYpO1xuICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvL21haW5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuIFxuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG4gIC8vIGRpc3BsYXlNZW51KClcblxuICAvL2Zvb3RlclxuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICdwaG90b3MgdGFrZW4gZnJvbTogaHR0cHM6Ly9taWdyYXRpb25vbG9neS5jb20vZmlsaXBpbm8tZm9vZC1jYXJpbmRlcmlhLycgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpXG59XG5ob21lcGFnZSgpO1xuZGlzcGxheUhvbWUoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9