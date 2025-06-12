/* HELLO I DIDNT THINK YOU WOULD CHECK THE SOURCE CODE BUT ANYWAYS: 
THIS GAME WAS MADE AFTER AN INSIDE JOKE ME AND MY BROTHER FOUND FUNNY
WHICH WAS DEDICATED TO THIS ONE THING I SAID THAT WAS LIKE 
"sahdow the hedgehog requests a game of five fingers up my ass" (typo included) 
BUT I HOPE YOU LIKE IT  ^^ */

const yesButton = document.getElementById('yes');
const coolButton = document.getElementById('urcool');

yesButton.onclick = cutScene2;
coolButton.onclick = cutscene3;

function cutScene2() {
    let scene1 = document.getElementById('shadowgame1');
    scene1.style.display = "none";

    let scene2 = document.getElementById('shadowgame2');
    scene2.style.display = "block";
}

function cutscene3() {
    let scene2 = document.getElementById('shadowgame2');
    scene2.style.display = "none";

    let scene3 = document.getElementById('shadowgame3');
    scene3.style.display = "block";
}
