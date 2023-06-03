const main = document.querySelector("section");
const form = document.querySelector("form");

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
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let mark = `${document.querySelector("input[name='mark']:checked").value}`;
        let name = `${document.querySelector("input[name='playerName']").value}`;
        
    })

})();