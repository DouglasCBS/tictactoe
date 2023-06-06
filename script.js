(() => {
    const main = document.querySelector("section");
    const form = document.querySelector("form");

    const game = (() => {
        const div = []
        let mark = []
        function checkWinner(winnerMark, player) {
            let cells = document.querySelectorAll("div");
            let i = 0;

            if (winnerMark == player.mark) {winner = player.name}
            else if (winnerMark != player.mark) {winner = "CPU"}
            
            if (isVictory(cells)) {
                alert(`${winner} wins!`);
                reset()
            }
        

            function isVictory(cells) {
                let combs = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6],
                ]
                for (let comb of combs) {
                    if (
                        cells[comb[0]].textContent == cells[comb[1]].textContent &&
                        cells[comb[1]].textContent == cells[comb[2]].textContent &&
                        cells[comb[0]].textContent != ""
                    ) { return true;
                    }
    
                }
                return false;
            }
        }

        const displayGame = (player) => {
            for (i = 0; i < 9; i++) {
                div[i] = document.createElement("div");
                div[i].classList.add(`class-${i}`);
                div[i].addEventListener("click", (e) => {
                    if (e.target.textContent !== "") return;
                    else  {
                        e.target.textContent = `${player.mark}`;
                        let winnerMark = e.target.textContent;
                        checkWinner(winnerMark, player);
                        playRound(winnerMark, player);
                    }
                });
                main.appendChild(div[i]);
                div[i].textContent = "";
            };
        };

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            reset()

            const playerMark = `${document.querySelector("input[name='mark']:checked").value}`;
            const playerName = `${document.querySelector("input[name='playerName']").value}`;
    
            const player = getPlayer(playerName, playerMark);
            displayGame(player);
            getPriority(player);
            
        });

        function getPriority(player) {
            if (player.mark === "X") {return}
            else {
                let choice = Math.floor(Math.random() * 9);
                document.querySelector(`.class-${choice}`).textContent = "X"
            }
        }
        
        function reset() {
            const divs = document.querySelectorAll("div");
            divs.forEach(div => main.removeChild(div));
            mark = []
        }

        const getPlayer = (name, mark) => {
            return {name, mark}
        };

        function playRound(winnerMark, player) {
            let choice = Math.floor(Math.random() * 9);
            let enemyMark;
            if (player.mark === "X") {enemyMark = "O"}
            else if (player.mark === "O") {enemyMark = "X"};
            winnerMark = enemyMark;
            if (document.querySelector(`.class-${choice}`).textContent !== "") {
                do {
                    choice = Math.floor(Math.random() * 9);
                }
                while (document.querySelector(`.class-${choice}`).textContent !== "");
                document.querySelector(`.class-${choice}`).textContent = `${enemyMark}`;
                checkWinner(winnerMark, player);
            }
            else if (document.querySelector(`.class-${choice}`).textContent === "") {
                document.querySelector(`.class-${choice}`).textContent = `${enemyMark}`;
                checkWinner(winnerMark, player);
            }
        };

    })();

})();