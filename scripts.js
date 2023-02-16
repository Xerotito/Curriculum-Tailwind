//# Responsive para todos los desplegables de la pagina  ------------------------------------------------------------
const desplegables = document.querySelectorAll(".desplegable")
const mediaQuery = window.matchMedia("(max-width: 1024px)");

//Primero analizamos la pantalla al cargar por primera vez la web, si no es móvil los desplegables aparecerán chequeados para mostrase desplegados. 
if (window.innerWidth >= 1024) desplegables.forEach(desplegable => desplegable.setAttribute("checked", ""))

//Luego agregamos la Fn que despliega o contrae los desplegables dependiendo de el tamaño de pantalla
const changeDesplegable = (e) => {
  if (e.matches) desplegables.forEach(desplegable => desplegable.removeAttribute("checked"))
  else desplegables.forEach(desplegable => desplegable.setAttribute("checked", ""))
};

// por ultimo un listener que responda al cambio de pantalla y haga los desplegables responsivos llamando a la función anterior.
mediaQuery.addEventListener("change", changeDesplegable);

//# Tooltip (ver certificado) a los links de la sección cursos ----------------------------------------------------
const cursos = document.getElementById("cursos") //Delegamos el evento solamente cuando la sección cursos este desplegada ()
cursos.addEventListener("mouseover", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.remove("hidden")) //Al pasar el cursor se hace visible
cursos.addEventListener("mouseout", e => e.target.matches(".certificado_btn") && e.target.firstElementChild.classList.add("hidden")) //Al quitar el cursor volvemos a desaparecerlo

//# Animaciones (sección contacto) --------------------------------------------------------------------------------
document.addEventListener("mouseover", e => {
  if (e.target.matches(".contacto_aside")) {    //Al pasar el mouse por elemento de contacto agregamos la clase css de la animación
    const img = e.target.children[ 0 ]          //El primero hijo del elemento es el logo correspondiente al que le agregamos la clase
    img.classList.add("rotate360")
    img.addEventListener("animationend", () => img.classList.remove("rotate360")) //Al terminar la animación le sacamos la clase que anima con esto evitamos que se deje de reproducir al sacar el mouse
  }
})

//# Detección de elementos entrantes y animaciones (sección de skills) ----------------------------------------------
//Detectamos cuando los elementos skill entran en pantalla para agregarle su animación. Usamos la API de Intersection observer
const skills = document.querySelectorAll(".animation-bar") //Guardamos en un nodeList (símil array) todas las progress-bar de los skills

const cargarBarra = (entradas) => { //entradas es el evento que nos devuelve un array con todos los elementos observados
  entradas.forEach(entrada => {     //Al ser un array podemos iterarlo
    if (entrada.isIntersecting) {   //Por defecto el observador se ejecuta cuando el elemento entra y sale de la pantalla, solo queremos que lo haga cuando entra
      const { target } = entrada    //Desestructuramos entrada para mas prolijidad
      const tamaño = target.style.width  //Sacamos el valor del ancho máximo (width) que tendrá la barra animada de cada elemento (Esto fue definido manualmente cuando lo creamos en html)
      target.animate([                   //La animación es creada con js esto nos permite que el valor width sea dinámico y responda por cada elemento.
        { width: '0%' },
        { width: `${ tamaño }` }         //Le pasamos el tamaño que es hasta donde deberá "cargar" en cada skill
      ], {
        duration: 3000,
        iterations: 1,
      });
    }
  })
}

const observador = new IntersectionObserver(cargarBarra, {}); //Creamos un observador, el cual ejecuta una función cuando el elemento "observado" entre en pantalla
skills.forEach(skill => observador.observe(skill))            //Asignamos ese observador para cada elemento skill iterando en el array de nodeList

/* La animación pero en  css seria 
.progress{                      //Clase
  animation: progress-animation 3s linear;
}

@keyframes progress-animation { //Animación
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
} */