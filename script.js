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