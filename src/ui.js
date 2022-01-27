const content = document.querySelector('#content');

const header = document.createElement('div');
        header.classList.add('header');
content.appendChild(header);

    const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = "Battleship";
    header.appendChild(title);

const mainGame = document.createElement('div');
        mainGame.classList.add('main-game');
content.appendChild(mainGame);

    const p1Board = document.createElement('div');
        p1Board.classList.add('p1Board');
    mainGame.appendChild(p1Board);

    const p2Board = document.createElement('div');
        p2Board.classList.add('p2Board');
    mainGame.appendChild(p2Board);

let p1_board = ["", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "" ];

let p2_board = ["", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "" ];

const renderboards = (() => {
    const board_container1 = p1Board;
    board_container1.innerHTML = ""
    p1_board.forEach((e, i) => {
        board_container1.innerHTML += `<div id="block_${i}" class="block-item">${p1_board[i]}</div>`
    }); // render the board

    const board_container2 = p2Board;
    board_container2.innerHTML = ""
    p2_board.forEach((e, i) => {
        board_container2.innerHTML += `<div id="block_${i}" class="block-item">${p2_board[i]}</div>`
    }); // render the board
})();