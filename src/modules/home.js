function homeAdd(status) {
  const content = document.querySelector('#content');
  const homeSection = document.createElement('div');
  homeSection.setAttribute('id', 'homeSection');

  const homeContent1 = document.createElement('div');
  homeContent1.classList.add('home-content');
  homeContent1.innerHTML += `<h1>Restaurant Galaxy</h1>`;
  homeContent1.innerHTML += `<p>
  Tellus pellentesque eu tincidunt tortor aliquam nulla. Sed pulvinar
  proin gravida hendrerit lectus a. Convallis a cras semper auctor
  neque vitae tempus quam. Massa ultricies mi quis hendrerit. Nunc sed
  augue lacus viverra vitae congue eu consequat ac. Gravida neque
  convallis a cras semper auctor. Sed pulvinar proin gravida hendrerit
  lectus. Sed elementum tempus egestas sed sed risus. Iaculis urna id
  volutpat lacus laoreet. Tortor dignissim convallis aenean et tortor
  at. Vestibulum rhoncus est pellentesque elit.
</p>`;

  const homeContent2 = document.createElement('div');
  homeContent2.classList.add('home-content');
  homeContent2.innerHTML += `<h1>About Us</h1>`;
  homeContent2.innerHTML += `<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            viverra accumsan in nisl. Lacinia at quis risus sed vulputate odio
            ut enim. Sollicitudin nibh sit amet commodo. Bibendum at varius vel
            pharetra vel turpis nunc eget. Lacus vel facilisis volutpat est
            velit egestas dui id. Nisi porta lorem mollis aliquam ut porttitor
            leo. Justo laoreet sit amet cursus sit. Suspendisse sed nisi lacus
            sed viverra tellus in hac habitasse. Ut tortor pretium viverra
            suspendisse potenti. Elementum facilisis leo vel fringilla est
            ullamcorper. Ipsum consequat nisl vel pretium lectus quam id leo.
            Sollicitudin ac orci phasellus egestas tellus rutrum tellus
            pellentesque. In ante metus dictum at tempor commodo ullamcorper a
            lacus. Rhoncus est pellentesque elit ullamcorper dignissim cras
            tincidunt lobortis. Eget nunc scelerisque viverra mauris in.
</p>`;

  homeSection.appendChild(homeContent1);
  homeSection.appendChild(homeContent2);

  content.appendChild(homeSection);

  if (status === false) {
    homeSection.style.display = 'none';
  }
}

function homeIsVisible(status) {
  const homeSection = document.querySelector('#homeSection');

  if (status === false) {
    homeSection.style.display = 'none';
  } else if (status === true) {
    homeSection.style.display = 'initial';
  }
}

export { homeAdd, homeIsVisible };
