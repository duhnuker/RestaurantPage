const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const headContainer = document.createElement('div');
    headContainer.classList.add('head-container');
    content.appendChild(headContainer);
    const heading = document.createElement('h1');
    heading.textContent = 'Ruby Pearl Diner';
    headContainer.appendChild(heading);


    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Welcome ';
    aboutContainer.appendChild(aboutText);

    const imgContainer = document.createElement('div');
    const restaurantimg = document.createElement('img');
    restaurantimg.src = "../src/assets/imgs/restaurantimg.jpg";
    restaurantimg.classList.add('restImg');
    imgContainer.appendChild(restaurantimg);
    imgContainer.classList.add('img-container');
    content.appendChild(imgContainer);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    content.appendChild(footerContainer);


}

export default createRestaurantHomePage;