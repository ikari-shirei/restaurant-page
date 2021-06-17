import { homeAdd, homeIsVisible } from './home';
import { menuAdd, menuIsVisible } from './menu';

function tabEvents() {
  const content = document.querySelector('#content');

  const tabs = document.createElement('div');
  tabs.setAttribute('id', 'tabs');

  const home = document.createElement('div');
  home.classList.add('tab');
  home.setAttribute('id', 'home');
  home.textContent = 'HOME';

  const menu = document.createElement('div');
  menu.classList.add('tab');
  menu.setAttribute('id', 'menu');
  menu.textContent = 'MENU';

  const contact = document.createElement('div');
  contact.classList.add('tab');
  contact.setAttribute('id', 'contact');
  contact.textContent = 'CONTACT';

  tabs.appendChild(home);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  content.appendChild(tabs);

  //default active tab
  home.classList.add('active-tab');

  //home tab content
  homeAdd();

  //menu tab content
  menuAdd(false);

  //home onclick
  home.addEventListener('click', (e) => {
    e.target.classList.add('active-tab');
    if (menu.classList.contains('active-tab')) {
      menu.classList.remove('active-tab');
    } else if (contact.classList.contains('active-tab')) {
      contact.classList.remove('active-tab');
    }

    menuIsVisible(false);

    if (e.target.classList.contains('active-tab')) homeIsVisible(true);
    else return;
  });

  //menu onclick
  menu.addEventListener('click', (e) => {
    e.target.classList.add('active-tab');
    if (home.classList.contains('active-tab')) {
      home.classList.remove('active-tab');
    } else if (contact.classList.contains('active-tab')) {
      contact.classList.remove('active-tab');
    }

    homeIsVisible(false);

    if (e.target.classList.contains('active-tab')) menuIsVisible(true);
    else return;
  });

  //contact onclick
  contact.addEventListener('click', (e) => {
    e.target.classList.add('active-tab');
    if (home.classList.contains('active-tab')) {
      home.classList.remove('active-tab');
    } else if (menu.classList.contains('active-tab')) {
      menu.classList.remove('active-tab');
    }

    homeIsVisible(false);
    menuIsVisible(false);
  });
}

export default tabEvents;
