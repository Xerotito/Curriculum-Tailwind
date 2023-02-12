//°Responsive para la sección cursos el desplegable esta expandido en resoluciones lg y contraido en moviles
const desplegable = document.getElementById("desplegable")
const mediaQuery = window.matchMedia("(max-width: 1024px)");

const changeDesplegable = (e) => { //Fn que coloca el atributo html checked al input desplegable encargado de mostrar u ocutlar los cursos
  if (e.matches) desplegable.removeAttribute("checked")
  else desplegable.setAttribute("checked", "")
};

mediaQuery.addEventListener("change", changeDesplegable); //Listener que reacciona al cambio de mediaQuery especificado

//° Agregamos el tooltip ver certficado a los links de la seccion cursos 
const cursos = document.getElementById("cursos") //Delegamos el evento solamente cuando la seccion cursos este desplegada ()
cursos.addEventListener("mouseover", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.remove("hidden")) //Al pasar el cursor se hace visible
cursos.addEventListener("mouseout", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.add("hidden")) //Al quitar el cursor volvemos a desaparecerlo

//° Animaciones section contacto
document.addEventListener("mouseover", e => {
  if (e.target.matches(".contacto_aside")) {    //Al pasar el mouse por elemento de contacto agregamos la clase css de la animación
    const img = e.target.children[ 0 ]          //El primero hijo del eleemnto es el logo correspondiente al que le agrgamos la clase
    img.classList.add("rotate360")
    img.addEventListener("animationend", () => img.classList.remove("rotate360")) //Al terminar la animacion le sacamos la clase que anima con esto evitamos que se deje de reproducir al sacar el mouse
  }
})

