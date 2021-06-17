import breakfast1 from '/src/img/breakfast1.jpg';
import breakfast2 from '/src/img/breakfast2.jpg';
import breakfast3 from '/src/img/breakfast3.jpg';
import breakfast4 from '/src/img/breakfast4.jpg';
import breakfast5 from '/src/img/breakfast5.jpg';
import breakfast6 from '/src/img/breakfast6.jpg';
import breakfast7 from '/src/img/breakfast7.jpg';
import breakfast8 from '/src/img/breakfast8.jpg';
import breakfast9 from '/src/img/breakfast9.jpg';

import lunch1 from '/src/img/lunch1.jpg';
import lunch2 from '/src/img/lunch2.jpg';
import lunch3 from '/src/img/lunch3.jpg';
import lunch4 from '/src/img/lunch4.jpg';
import lunch5 from '/src/img/lunch5.jpg';
import lunch6 from '/src/img/lunch6.jpg';
import lunch7 from '/src/img/lunch7.jpg';
import lunch8 from '/src/img/lunch8.jpg';
import lunch9 from '/src/img/lunch9.jpg';

import dinner1 from '/src/img/dinner1.jpg';
import dinner2 from '/src/img/dinner2.jpg';
import dinner3 from '/src/img/dinner3.jpg';
import dinner4 from '/src/img/dinner4.jpg';
import dinner5 from '/src/img/dinner5.jpg';
import dinner6 from '/src/img/dinner6.jpg';
import dinner7 from '/src/img/dinner7.jpg';
import dinner8 from '/src/img/dinner8.jpg';
import dinner9 from '/src/img/dinner9.jpg';

function menuAdd(status) {
  function createMenuContent(background, menu, sectionContainer) {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuContent.style.backgroundImage = background;
    menuContent.style.backgroundSize = '340px 200px';

    const menuContentHeader = document.createElement('div');
    menuContentHeader.classList.add('menu-content-header');
    menuContent.appendChild(menuContentHeader);

    const menuName = document.createElement('h2');
    menuName.textContent = `${menu}`;
    menuContentHeader.appendChild(menuName);

    sectionContainer.appendChild(menuContent);
    menuSection.appendChild(sectionContainer);
  }

  const content = document.querySelector('#content');

  const menuSection = document.createElement('div');
  menuSection.setAttribute('id', 'menuSection');

  //Breakfast section

  const breakfast = document.createElement('div');
  breakfast.setAttribute('id', 'breakfast');
  menuSection.appendChild(breakfast);

  const breakfastTitle = document.createElement('h1');
  breakfastTitle.textContent = 'Breakfast';
  breakfast.appendChild(breakfastTitle);

  const breakfastContainer = document.createElement('div');
  breakfastContainer.classList.add('menu-container');
  breakfast.appendChild(breakfastContainer);

  createMenuContent(
    `url(${breakfast1})`,
    'Simple Milky Way',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast2})`,
    'Complex Milky Way',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast3})`,
    'Holy Jupiter Renewed',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast4})`,
    'Best Egg in The Space',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast5})`,
    'Little Asteroid',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast6})`,
    'Celestial Grand Pink',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast7})`,
    "Doppler's Pancake",
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast8})`,
    'Everything in the Universe',
    breakfastContainer
  );
  createMenuContent(
    `url(${breakfast9})`,
    "Fermi's Breakfast",
    breakfastContainer
  );

  breakfast.appendChild(breakfastContainer);

  //Lunch section

  const lunch = document.createElement('div');
  lunch.setAttribute('id', 'lunch');
  menuSection.appendChild(lunch);

  const lunchTitle = document.createElement('h1');
  lunchTitle.textContent = 'Lunch';
  lunch.appendChild(lunchTitle);

  const lunchContainer = document.createElement('div');
  lunchContainer.classList.add('menu-container');

  createMenuContent(`url(${lunch1})`, 'Our Only Satellite', lunchContainer);
  createMenuContent(`url(${lunch2})`, 'Trip Around Orbit', lunchContainer);
  createMenuContent(`url(${lunch3})`, 'Mixed as Universe', lunchContainer);
  createMenuContent(`url(${lunch4})`, 'Moon`s Gravity', lunchContainer);
  createMenuContent(`url(${lunch5})`, 'Supernova', lunchContainer);
  createMenuContent(`url(${lunch6})`, 'Brown Dwarf', lunchContainer);
  createMenuContent(`url(${lunch7})`, 'Comet', lunchContainer);
  createMenuContent(`url(${lunch8})`, 'Seven Stars', lunchContainer);
  createMenuContent(`url(${lunch9})`, 'Dark Energy', lunchContainer);

  lunch.appendChild(lunchContainer);

  //Dinner section

  const dinner = document.createElement('div');
  dinner.setAttribute('id', 'dinner');
  menuSection.appendChild(dinner);

  const dinnerTitle = document.createElement('h1');
  dinnerTitle.textContent = 'Dinner';
  dinner.appendChild(dinnerTitle);

  const dinnerContainer = document.createElement('div');
  dinnerContainer.classList.add('menu-container');

  createMenuContent(`url(${dinner1})`, 'Hot Mercury ', dinnerContainer);
  createMenuContent(`url(${dinner2})`, 'Venus Special', dinnerContainer);
  createMenuContent(`url(${dinner3})`, 'White Dwarf', dinnerContainer);
  createMenuContent(`url(${dinner4})`, 'Red Comet', dinnerContainer);
  createMenuContent(`url(${dinner5})`, 'Red Giant', dinnerContainer);
  createMenuContent(`url(${dinner6})`, 'Little Mars', dinnerContainer);
  createMenuContent(`url(${dinner7})`, "Saturn's Ring", dinnerContainer);
  createMenuContent(`url(${dinner8})`, 'Solar System', dinnerContainer);
  createMenuContent(`url(${dinner9})`, 'Sweet as Uranus ', dinnerContainer);

  dinner.appendChild(dinnerContainer);

  content.appendChild(menuSection);

  if (status === false) {
    menuSection.style.display = 'none';
  }
}

function menuIsVisible(status) {
  const menuSection = document.querySelector('#menuSection');

  if (status === false) {
    menuSection.style.display = 'none';
  } else if (status === true) {
    menuSection.style.display = 'initial';
  }
}

export { menuAdd, menuIsVisible };
