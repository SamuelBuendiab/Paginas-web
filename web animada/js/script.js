
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let playerstate ;
const canvas_width = canvas.width = 600;
const canvas_Height = canvas.height = 600;


const playimagen = new Image();
playimagen.src = 'all.png';
//size of the sprite sheet
const spriteWidth = 320;
const spriteHeight = 570;
//changes the sprites in the sprite sheet
//horizontal no completamente necesesarias probablemente
let frameX = 0;
//vertical
let frameY = 0;

let gameFrame = 0;
//amount of frames
const staggerFramer = 1;



function animate() {
    ctx.clearRect(0,0,canvas_width,canvas_Height);
   
   let position = Math.floor(gameFrame/staggerFramer)% 1;
    // let  frameX = spriteWidth *position;
    //let frameY = spriteanimation["SI"].loc[position].y;
    ctx.drawImage(playimagen, frameX * spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);

    requestAnimationFrame(animate);
    
};
animate();


const btn = document.getElementById('bot1');

btn.addEventListener('click', function() {
    const buttonValue = btn.value;
    change(buttonValue); 
});

function change(buttonValue) {
    if (buttonValue === "SI") {
        frameX = 1;   
}
};

const btn2 = document.getElementById('bot2');

btn2.addEventListener('click', function() {
    const buttonValue2 = btn2.value;
    change2(buttonValue2); 
});

function change2(buttonValue2) {
    if (buttonValue2 === "NO") {
        frameX = 1;
        frameY = 1;  
}
}


const btn3 = document.getElementById('bot3');

btn3.addEventListener('click', function() {
    const buttonValue3 = btn3.value;
    change3(buttonValue3); 
});

function change3(buttonValue3) {
    if (buttonValue3 === "volver") {
        frameX = 0;
        frameY = 0;  
}
}

