/* Al terminar de cargar todo el DOM agregarmos nuestro codigo js para evitar errores */
window.addEventListener('DOMContentLoaded', () => {
  console.log("El DOM cargo correctamente")
  const tooltip = document.querySelector('.tooltip-curso')
  const boton = document.querySelector('.certificado_btn')

  boton.addEventListener('mouseenter', e => console.log('entrando'))
  boton.addEventListener('mouseleave', e => console.log('saliendo'))

})