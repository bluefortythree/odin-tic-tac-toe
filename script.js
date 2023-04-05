let welcome = {
    modeSelect: function () {
        let player = document.getElementById('player');
        player.addEventListener('click', () => {
            let welcome = document.getElementById('welcome');
            welcome.style.display = "none";
            let names = document.getElementById('names');
            names.style.display = "flex";
        })
        let computer = document.getElementById('computer');
        computer.addEventListener('click', () => {
            let welcome = document.getElementById('welcome');
            welcome.style.display = "none";
            let game = document.getElementById('game');
            game.style.display = "flex";
            let gameboard = document.getElementById('gameboard');
            gameboard.style.display = "flex";
        })
    }
}

welcome.modeSelect();

let players = {
    playGame: function () {
        let form = document.getElementById('names');
        let names = document.getElementById('names');
        let game = document.getElementById('game');
        let gameboard = document.getElementById('gameboard');
        let playerOne = document.getElementById('player-one');
        let playerTwo = document.getElementById('player-two');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let p1 = document.getElementById('p1').value;
            let p2 = document.getElementById('p2').value;
            names.style.display = "none";
            gameboard.style.display = "flex";
            game.style.display = "flex";
            playerOne.innerText = p1;
            playerTwo.innerText = p2;
        }
    )}
}

players.playGame();

let gameboard = {
    placeMarker: function() {
        let turns = 0;
        let playerOneScore = 0;
        let playerTwoScore = 0;
        let one = document.getElementById('p1-score');
        one.innerText = playerOneScore;
        let two = document.getElementById('p2-score');
        two.innerText = playerTwoScore;
        for(i = 0; i < 9; i++) {
            let marker = document.getElementsByClassName('square')[i];
            marker.addEventListener('click', () => {
                if(marker.innerText === '' && turns % 2 === 0 && turns < 8) {
                    marker.innerText = 'X';
                    turns ++;
                    this.checkWinner();
                    if(this.checkWinner()) {
                        setTimeout("alert('game over!')", 200);
                        turns = 10;
                        playerOneScore ++;
                        let one = document.getElementById('p1-score');
                        one.innerText = playerOneScore;
                        let two = document.getElementById('p2-score');
                        two.innerText = playerTwoScore;
                        console.log('P1:' + playerOneScore);
                    }
                } else if(marker.innerText === '' && turns % 2 !== 0 && turns < 8) {
                    marker.innerText = 'O';
                    turns ++;
                    this.checkWinner();
                    if(this.checkWinner()) {
                        setTimeout("alert('game over!')", 200);
                        turns = 10;
                        playerTwoScore ++;
                        let one = document.getElementById('p1-score');
                        one.innerText = playerOneScore;
                        let two = document.getElementById('p2-score');
                        two.innerText = playerTwoScore;
                        console.log('P2:' + playerTwoScore);
                    }
                } else if(marker.innerText === '' && turns >= 8) {
                    marker.innerText = 'X';
                    turns ++;
                    this.checkWinner();
                    if(this.checkWinner()) {
                        setTimeout("alert('game over!')", 200);
                        turns = 10;
                        playerOneScore ++;
                        let one = document.getElementById('p1-score');
                        one.innerText = playerOneScore;
                        let two = document.getElementById('p2-score');
                        two.innerText = playerTwoScore;
                        console.log('P1:' + playerOneScore);
                    } else {
                        setTimeout("alert('tie!')", 200);
                        turns = 10;
                    }
                }
                return {
                    turns: turns,
                    playerOneScore: playerOneScore,
                    playerTwoScore: playerTwoScore,
                }
            })
            
        }


        
        let reset = document.getElementById('reset');
        reset.addEventListener('click', () => {
            turns = 0;
            for(i = 0; i < 9; i++) {
                let marker = document.getElementsByClassName('square')[i];
                marker.innerText = ''
            }
        })
    },

    checkWinner: function() {
        let one = document.getElementById('one').innerText;
        let two = document.getElementById('two').innerText;
        let three = document.getElementById('three').innerText;
        let four = document.getElementById('four').innerText;
        let five = document.getElementById('five').innerText;
        let six = document.getElementById('six').innerText;
        let seven = document.getElementById('seven').innerText;
        let eight = document.getElementById('eight').innerText;
        let nine = document.getElementById('nine').innerText;

        if(one === 'X' && two === 'X' && three === 'X' || four === 'X' && five === 'X' && six === 'X' || seven === 'X' && eight === 'X' && nine === 'X' 
        || one === 'X' && four === 'X' && seven ==='X' || two === 'X' && five === 'X' && eight === 'X' || three === 'X' && six === 'X' && nine === 'X' 
        || one === 'X' && five === 'X' && nine === 'X' || three === 'X' && five === 'X' && seven === 'X') {
            return true;
        } else if(one === 'O' && two === 'O' && three === 'O' 
        || four === 'O' && five === 'O' && six === 'O' || seven === 'O' && eight === 'O' && nine === 'O' 
        || one === 'O' && four === 'O' && seven ==='O' || two === 'O' && five === 'O' && eight === 'O' || three === 'O' && six === 'O' && nine === 'O' 
        || one === 'O' && five === 'O' && nine === 'O' || three === 'O' && five === 'O' && seven === 'O') {
            return true;
        } else {
            return false;
        }
        },
    }

gameboard.placeMarker();

