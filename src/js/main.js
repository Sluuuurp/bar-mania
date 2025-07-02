const carre   = document.querySelector('#carre');
const levier  = document.querySelector('#levier');

let vitesse   = 0;     // pixels par frame
let positionY = 20;    // position initiale (px)
let isMoving  = false; // état de l’animation
console.dir(levier)


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




levier.addEventListener('mouseup', ()=> {
    vitesse = 0
    levier.value = 0
    isMoving = false

    if(positionY < 450){
        console.log("Pas assez rempli") // check le remplissage
        levier.disabled = true;
        
    }
    else if(positionY > 450 && positionY < 500){
        console.log("bien jouer !")
        levier.disabled = true;
    }
    
    ResetChope()

})


function moveUp() {
    if (isMoving) {
        positionY += vitesse +0.4;   //valeur a modifier pour influer sur la vitesse de remplissage
        carre.style.bottom = positionY + 'px';
        requestAnimationFrame(moveUp);  
    }

    if(positionY > 500){
        console.log("deborde")    //check le debordement 
        levier.disabled = true;
        isMoving = false
        ResetChope()
    }

}


// gere la remise a 0 après un remplissage
function ResetChope() {
    setTimeout( ()=>{
        carre.style.bottom = "20px"
        positionY = 20
        isMoving = false
        levier.disabled = false 
        levier.value = 0
    },2000)

}