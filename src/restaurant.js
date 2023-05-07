const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');
    pageContent.appendChild(tabContainer);

    const headContainer = document.createElement('div');
    headContainer.classList.add('head-container');
    pageContent.appendChild(headContainer);
    const heading = document.createElement('h1');
    heading.textContent = 'Ruby Pearl';
    headContainer.appendChild(heading);


    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    pageContent.appendChild(aboutContainer);
    const aboutWelcomeText = document.createElement('p');
    aboutWelcomeText.classList.add('about-welcome');
    aboutWelcomeText.textContent = 'Welcome';
    aboutContainer.appendChild(aboutWelcomeText);
    const aboutText = document.createElement('p');
    aboutText.classList.add('about-description');
    aboutText.textContent = 'Discover our modern Afro-centric dining, with a range of curated menus - from our exlusive line of WAGYU by Ruby Pearl, to the delectable South Australian Wine list.';
    aboutContainer.appendChild(aboutText);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    pageContent.appendChild(footerContainer);


}

export default createRestaurantHomePage;
