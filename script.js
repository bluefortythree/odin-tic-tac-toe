let gameboard = {
    placeMarker: function() {
        let turns = 0;
        for(i = 0; i < 9; i++) {
            let marker = document.getElementsByClassName('square')[i];
            marker.addEventListener('click', () => {
                if(marker.innerText === '' && turns % 2 === 0 && turns < 9) {
                    marker.innerText = 'X';
                    turns ++;
                    setTimeout(this.checkWinner, 300)
                } else if(marker.innerText === '' && turns % 2 != 0 && turns < 9) {
                    marker.innerText = 'O';
                    turns ++;
                    setTimeout(this.checkWinner, 300)
                } 
                return turns;
            })
        }
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
        || one === 'X' && five === 'X' && nine === 'X' || three === 'X' && five === 'X' && seven === 'X' || one === 'O' && two === 'O' && three === 'O' 
        || four === 'O' && five === 'O' && six === 'O' || seven === 'O' && eight === 'O' && nine === 'O' 
        || one === 'O' && four === 'O' && seven ==='O' || two === 'O' && five === 'O' && eight === 'O' || three === 'O' && six === 'O' && nine === 'O' 
        || one === 'O' && five === 'O' && nine === 'O' || three === 'O' && five === 'O' && seven === 'O') {
            alert('game over!')
        }
    }
};

gameboard.placeMarker();

