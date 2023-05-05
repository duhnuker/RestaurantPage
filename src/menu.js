const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);
    

    const headContainer = document.createElement('div');
    headContainer.classList.add('head-container');
    pageContent.appendChild(headContainer);
    const heading = document.createElement('h1');
    heading.textContent = 'Ruby Pearl Diner';
    headContainer.appendChild(heading);


    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    pageContent.appendChild(aboutContainer);
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Welcome ';
    aboutContainer.appendChild(aboutText);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    pageContent.appendChild(footerContainer);


}

export default createRestaurantHomePage;
