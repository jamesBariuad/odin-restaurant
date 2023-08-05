import locationIcon from "./map-marker-outline.svg";
import timeIcon from "./clock-time-eight-outline.svg";
import phoneIcon from "./phone.svg";

export default function displayContactPage() {
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
  locationImg.src = locationIcon;
  locationDiv.appendChild(locationImg);

  const timeDiv = document.createElement("div");
  timeDiv.textContent = `Mon-Sat:8am-9pm`;
  const timeImg = document.createElement("img");
  timeImg.src = timeIcon;
  timeDiv.appendChild(timeImg);

  const phoneDiv = document.createElement("div");
  phoneDiv.textContent = "(+63)916 304 2663";
  const phoneImg = document.createElement("img");
  phoneImg.src = phoneIcon;
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
