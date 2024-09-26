function App(){}
// eh cuando carga la pantalla
window.onload = function(event){
    var app = new App();
    window.app = app;

}
// prototipe algo ya existente y sirve para agregarle variables al objeto
App.prototype.processingButton = function(event){
    // current target es la accion que se esta haciendo en el momento
    // node: un elemento en html  parent note solo puede leer el elemento
    // query selector permire selecionar un id o class de un html
    const btn = event.currentTarget;
    const carrusellist = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = track.querySelectorAll('.carrusel');

    const carruselwidht = carrusel[0].offsetWidth;
    const trackWidth = track.offsetWidth;
    const listWidth = carrusellist.offsetWidth;
// izquierda es solo comabiar la posicion de los estilos
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition  = parseFloat(track.style.left.slice(0,-2) * -1);
    // no se que sea el dataset 
    btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselwidht, track) : nextAction(leftPosition, trackWidth, listWidth, carruselwidht, track);
}

// mover a la izquierda
let prevAction = (leftPosition, carruselwidht, track) => {
    if (leftPosition > 0){
        track.style.left = `${-1 * (leftPosition - carruselwidht)}px`;
    }
}
// mover a la derecha
let nextAction = (leftPosition , trackWidth, listWidth, carruselwidht, track) => {

    if (leftPosition < (trackWidth - listWidth)){
        track.style.left = `${-1 * (leftPosition + carruselwidht)}px`;
    }
}