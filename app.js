const gender = 'boy'; 

function revealGender() {
    const revealElement = document.getElementById('reveal');
    const textElement = document.getElementById('h1');
    const bgmusic = document.getElementById('bgmusic');

    if (gender == 'boy') {
        revealElement.innerHTML = image;
        textElement.innerHTML = text;
        textElement.style.fontSize = '36px'; 
        textElement.style.color = 'black'; 
        textElement.style.fontFamily = 'cursive';
        document.body.style.color = '#89cff0';
        document.body.style.background = 'white';
        bgmusic.play();
    } else {
        revealElement.innerHTML = girlSVG;
        document.body.style.color = 'pink';
        document.body.style.background = 'pink';
    }

    const revealButton = document.getElementById('gifButton');
    revealButton.style.display = 'none';
}

const revealButton = document.getElementById('gifButton');
revealButton.addEventListener('click', revealGender);

var image = `<div class='baby'><div class='container'><div class='row'><img src='dancing-whoop.gif'></div></div></div>`

var text = `IT'S A BOY`
