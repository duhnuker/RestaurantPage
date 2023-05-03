

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Ruby Pearl Roadhouse';
    pageContent.appendChild(heading);
}

export default createRestaurantHomePage;