const body = document.querySelector("body");
const main = document.createElement("section");
body.appendChild(main);

const gameBoard = (() => {
    let gameBoard = ["X", "X", "X", "X", "O", "O", "O", "O", "X"];
    return {gameBoard}
})();

const game = (() => {
    const displayGame = (() => {
        gameBoard.gameBoard.forEach(mark => {
            const div = document.createElement("div");
            main.appendChild(div);
            div.textContent = `${mark}`
        });
    })();

})();

const getPlayer = () => {
    
};