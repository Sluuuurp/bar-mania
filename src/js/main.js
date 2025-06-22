const carre   = document.querySelector('#carre');
const levier  = document.querySelector('#levier');

let vitesse   = 0;     // pixels par frame
let positionY = 20;    // position initiale (px)
let isMoving  = false; // état de l’animation



levier.addEventListener('input', () => {
    vitesse = +levier.value;      

    // Si vitesse > 0 et qu’on n’est pas déjà en train d’animer, on démarre
    if (vitesse > 0 && !isMoving) {
        isMoving = true;
        requestAnimationFrame(moveUp);
    }

    // Si vitesse retombe à 0, on stoppe l’animation
    if (vitesse === 0) {
        isMoving = false;
    }
});

levier.addEventListener('change', ()=> {
    vitesse = 0
    levier.value = 0
    isMoving = false
})

    
function moveUp() {
    if (isMoving) {
        positionY += vitesse +0.4;   //valeur a modifier pour influer sur la vitesse de remplissage
        carre.style.bottom = positionY + 'px';
        requestAnimationFrame(moveUp);    
    }
}