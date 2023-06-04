(() => {
    const main = document.querySelector("section");
    const form = document.querySelector("form");

    const game = (() => {
        const div = []
        let mark = []
        let count
        function checkWinner(player) {
            let cells = document.querySelectorAll("div");
            let i = 0;
            
            if (isVictory(cells)) {
                alert(`${player.name} wins!`);
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
                div[i].addEventListener("click", (e) => {
                    if (e.target.textContent !== "") return;
                    else  {
                        e.target.textContent = `${player.mark}`;
                        checkWinner(player)
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

            
        });
        
        function reset() {
            const divs = document.querySelectorAll("div");
            divs.forEach(div => main.removeChild(div));
            mark = []
        }

        const getPlayer = (name, mark) => {
            return {name, mark}
        };

    })();

})();