
let clickSound = new Audio("click.mp3");
clickSound.preload = "auto"; 

let selectSound = new Audio("click.mp3");
selectSound.preload = "auto";

let badSound = new Audio("bad.mp3"); 
badSound.preload = "auto";


function playClickSound() {
    clickSound.currentTime = 0; 
    clickSound.play().catch(error => console.log("Click sound blocked:", error));
}


function playSelectSound() {
    selectSound.currentTime = 0; 
    selectSound.play().catch(error => console.log("Select sound blocked:", error));
}


function playBadSound() {
    badSound.currentTime = 0;
    badSound.play().catch(error => console.log("Bad sound blocked:", error));
}

function goToPage(page) { 
    
   
    setTimeout(() => {
        window.location.href = page;
    }, 300); 
}



function goBack() {
    window.history.back();
}

// Play birthday music
function playMusic() {
    document.getElementById("birthdayMusic").play();
}

function revealMystery() {
    document.getElementById("mystery-button").style.display = "none"; 
    document.getElementById("mystery-result").style.display = "block"; 
}



