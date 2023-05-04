const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    const heading = document.createElement('h1');
    heading.textContent = 'Ruby Pearl';
    pageContent.appendChild(heading);


    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    content.appendChild(aboutContainer);
    const aboutText = document.createElement('p');
    aboutText.textContent = 'short quote';
    aboutContainer.appendChild(aboutText);

    const imgContainer = document.createElement('div');
    const restaurantimg = document.createElement('img');
    restaurantimg.src = "../src/assets/imgs/restaurantimg.jpg";
    restaurantimg.classList.add('restImg');
    imgContainer.appendChild(restaurantimg);
    imgContainer.classList.add('img-container');
    content.appendChild(imgContainer);


}

export default createRestaurantHomePage;