const main = document.querySelector("section");

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

const getPlayer = (() => {
    
})();