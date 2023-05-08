const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);
    

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    pageContent.appendChild(menuContainer);
    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Menu';
    menuContainer.appendChild(menuHeading);


    const menuImgContainer = document.createElement('div');
    menuImgContainer.classList.add('menu-img-container');
    menuContainer.appendChild(menuImgContainer);

    const dish1ImgContainer = document.createElement('div');
    dish1ImgContainer.classList.add('dish1-img-container');
    menuContainer.appendChild(dish1ImgContainer);
    const dish1 = document.createElement('img');
    dish1.classList.add('dish1');
    dish1.src = '../src/assets/imgs/dish1.jpg';
    dish1ImgContainer.appendChild(dish1);
    const dish1Title = document.createElement('p');
    dish1Title.textContent = 'Wagyu Steak and Chips';
    dish1Title.classList.add('dish1-title');
    dish1ImgContainer.appendChild(dish1Title);
    const dish1Text = document.createElement('p');
    dish1Text.textContent = 'A5 Wagyu Steak cooked to your liking, served with a plentiful side of specialy seasoned chips';
    dish1Text.classList.add('dish1-text');
    dish1ImgContainer.appendChild(dish1Text);

    const dish2ImgContainer = document.createElement('div');
    dish2ImgContainer.classList.add('dish2-img-container');
    menuContainer.appendChild(dish2ImgContainer);
    const dish2 = document.createElement('img');
    dish2.classList.add('dish2');
    dish2.src = '../src/assets/imgs/dish2.jpg';
    dish2ImgContainer.appendChild(dish2);
    const dish2Title = document.createElement('p');
    dish2Title.textContent = 'Meat Set';
    dish2Title.classList.add('dish2-title');
    dish2ImgContainer.appendChild(dish2Title);
    const dish2Text = document.createElement('p');
    dish2Text.textContent = 'Special meat set variety, incl. Steak-Chicken-Lamb skewers, Cutlets, assorted roast vegetables and a selection of our special sauces';
    dish2Text.classList.add('dish2-text');
    dish2ImgContainer.appendChild(dish2Text);

    const dish3ImgContainer = document.createElement('div');
    dish3ImgContainer.classList.add('dish3-img-container');
    menuContainer.appendChild(dish3ImgContainer);
    const dish3 = document.createElement('img');
    dish3.classList.add('dish3');
    dish3.src = '../src/assets/imgs/dish3.jpg';
    dish3ImgContainer.appendChild(dish3);
    const dish3Title = document.createElement('p');
    dish3Title.textContent = 'Red Pearl Ribs';
    dish3Title.classList.add('dish3-title');
    dish3ImgContainer.appendChild(dish3Title);
    const dish3Text = document.createElement('p');
    dish3Text.textContent = 'RIBSSS';
    dish3Text.classList.add('dish3-text');
    dish3ImgContainer.appendChild(dish3Text);

}

export default createRestaurantHomePage;
