//° Transicion de opacidad del boton certificados en setcion cursos

const cursos = document.getElementById("cursos") //Delegamos el evento solamente cuando la seccion cursos este desplegada ()
cursos.addEventListener("mouseover", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.remove("hidden")) //Volvemos a agregar hidden
cursos.addEventListener("mouseout", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.add("hidden")) //Volvemos a agregar hidden

//° Animaciones section contacto
document.addEventListener("mouseover", e => {
  if (e.target.matches(".contacto_aside")) {    //Al pasar el mouse por elemento de contacto agregamos la clase css de la animación
    const img = e.target.children[ 0 ]          //El primero hijo del elemnto es el logo correspondiente
    img.classList.add("rotate360")
    img.addEventListener("animationend", () => img.classList.remove("rotate360")) //Al terminar la animacion le sacamos la clase que anima con esto evitamos que se deje de reproducir al sacar el mouse
  }
})
