function contactAdd(status) {
  const content = document.querySelector('#content');

  const contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contactSection');

  //Header
  const contactUsHeader = document.createElement('h1');
  contactUsHeader.textContent = 'Contact';
  contactSection.appendChild(contactUsHeader);

  //Information section
  const information = document.createElement('div');
  information.classList.add('information');

  //Tel
  const contactContent1 = document.createElement('div');
  contactContent1.classList.add('contact-content');

  const tel = document.createElement('div');
  tel.textContent = 'Number:';
  contactContent1.appendChild(tel);

  const telValue = document.createElement('div');
  telValue.textContent = '+999 999 999';
  contactContent1.appendChild(telValue);

  information.appendChild(contactContent1);

  //E-mail
  const contactContent2 = document.createElement('div');
  contactContent2.classList.add('contact-content');

  const eMail = document.createElement('div');
  eMail.textContent = 'E-mail:';
  contactContent2.appendChild(eMail);

  const eMailValue = document.createElement('div');
  eMailValue.textContent = 'restaurant.galaxy99@gmail.com';
  contactContent2.appendChild(eMailValue);

  information.appendChild(contactContent2);

  //Location
  const contactContent3 = document.createElement('div');
  contactContent3.classList.add('contact-content');

  const location = document.createElement('div');
  location.textContent = 'Location:';
  contactContent3.appendChild(location);

  const locationValue = document.createElement('div');
  locationValue.textContent = 'Piney, MB, Canada';
  contactContent3.appendChild(locationValue);

  information.appendChild(contactContent3);

  contactSection.appendChild(information);

  //End of information section

  content.appendChild(contactSection);

  if (status === false) {
    contactSection.style.display = 'none';
  }
}

function contactIsVisible(status) {
  const contactSection = document.querySelector('#contactSection');
  if (status === false) {
    contactSection.style.display = 'none';
  } else if (status === true) {
    contactSection.style.display = 'initial';
  }
}

export { contactAdd, contactIsVisible };
