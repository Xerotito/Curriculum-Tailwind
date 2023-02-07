/* Ya que no encontre la forma de delegar un hover a otra animación desde tailwin y no queria mesclar con css puro
delege el evento de mouseover a cada boton de certificado de certificado para mostrar el tooltip */
const cursos = document.getElementById('cursos')

cursos.addEventListener('mouseover', (e) => e.target.matches('.certificado_btn') && e.target.firstElementChild.classList.remove('hidden')) //Removemos hidden
cursos.addEventListener('mouseout', (e) => e.target.matches('.certificado_btn') && e.target.firstElementChild.classList.add('hidden'))    //Volvemos a agregar hidden

