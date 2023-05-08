const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div')
    pageContent.classList.add("page-content");
    content.appendChild(pageContent);
    

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    pageContent.appendChild(contactContainer);
    const contactHeading = document.createElement('h3');
    contactHeading.textContent = 'Contact';
    contactContainer.appendChild(contactHeading);


    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    pageContent.appendChild(formContainer);

    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'submit.php');
    formContainer.appendChild(form);

    const FN = document.createElement("input");
    FN.classList.add('full-name');
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");
    form.appendChild(FN);

    const EID = document.createElement("input");
    EID.classList.add('email');
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "emailID");
    EID.setAttribute("placeholder", "E-Mail");
    form.appendChild(EID);

    const ask = document.createElement("input");
    ask.classList.add('input-ask');
    ask.setAttribute("type", "textarea");
    ask.setAttribute("placeholder", "How may we help?");
    form.appendChild(ask);

    const submit = document.createElement("input");
    submit.classList.add('submit');
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    form.appendChild(submit);
   


}

export default createRestaurantHomePage;
