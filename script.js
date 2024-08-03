const emojis = ["😁", "😂", "🤣", "😅", "😆", "😊", "😋", "😎"];
let shuf_emojis = emojis.concat(emojis).sort(() => (Math.random() > 0.5) ? 1 : -1);

for (let i = 0; i < shuf_emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.dataset.emoji = shuf_emojis[i];
    

    box.onclick = function() {
        if (this.classList.contains('boxOpen') || this.classList.contains('boxMatch')) return;
        this.classList.add('boxOpen');
        this.innerHTML= this.dataset.emoji;

        let openBoxes = document.querySelectorAll('.boxOpen');
        if (openBoxes.length === 2) {
            setTimeout(function() {
                if (openBoxes[0].dataset.emoji === openBoxes[1].dataset.emoji) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                } else {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                    openBoxes[0].innerHTML = '';
                    openBoxes[1].innerHTML = '';
                }
                if (document.querySelectorAll('.boxMatch').length === shuf_emojis.length) {
                    alert('You win!');
                }
            }, 500);
        }
    };

    document.querySelector('.game').appendChild(box);
}