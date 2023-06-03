(() => {
    const main = document.querySelector("section");
    const form = document.querySelector("form");

    const game = (() => {
        const gameBoard = (() => {
            let gameBoard = ["X", "X", "X", "X", "O", "O", "O", "O", "X"];
            return {gameBoard}
        })();

        const displayGame = (() => {
            gameBoard.gameBoard.forEach(mark => {
                const div = document.createElement("div");
                main.appendChild(div);
                div.textContent = `${mark}`
            });
        })();

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const playerMark = `${document.querySelector("input[name='mark']:checked").value}`;
            const playerName = `${document.querySelector("input[name='playerName']").value}`;
    
            const player = getPlayer(playerName, playerMark)
            
        });

        const getPlayer = (name, mark) => {
            return {name, mark}
        };

    })();

})();