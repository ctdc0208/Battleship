const content = document.querySelector('#content');

const header = document.createElement('div');
        header.classList.add('header');
    content.appendChild(header);

    const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = "Battleship";
    header.appendChild(title);