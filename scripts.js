//° Transicion de opacidad del boton certificados en artículo cursos 

const cursos = document.getElementById('cursos') //Delegamos el evento solamente cuando la seccion cursos este desplegada ()
cursos.addEventListener('mouseover', (e) => e.target.matches('.certificado_btn') && e.target.firstElementChild.classList.remove('hidden'))    //Volvemos a agregar hidden
cursos.addEventListener('mouseout', (e) => e.target.matches('.certificado_btn') && e.target.firstElementChild.classList.add('hidden'))    //Volvemos a agregar hidden

/* Control de animaciones */
const redes = document.getElementById('redes')
redes.addEventListener('mouseover', (e) => {
  console.log('en section redes')
})