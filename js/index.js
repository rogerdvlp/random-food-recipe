import * as recetas from "./data.mjs"


const seleccionar = document.getElementById('seleccionar-plato')
const sectionPlato = document.getElementById('plato-seleccionado')
const sectionIngre = document.getElementById('ingredientes')
const introducir = document.getElementById('introducir-plato')
const titulo = document.getElementById('main-title')


function estilos() {
  titulo.style.marginTop = "auto"
  titulo.style.marginLeft = "0px"
  titulo.style.textAlign = "center"
  seleccionar.style.display = "none"
  introducir.remove()

}

function randomMeal() {
  estilos()
  let comidas = recetas.almuerzos
  let i = comidas.length

  //Lógica random  bucle deleteadora
  if (i >= 0) {
    i--
    let randomNumber = comidas.splice(Math.floor(Math.random() * comidas.length), 1);
    console.log(randomNumber)

    //Titulo, precio y porciones
    sectionPlato.innerHTML = `
      <p id="nombre-comida">${randomNumber[0].nombre}</p>
      <img src="${randomNumber[0].img}" alt="" width="300px" height="200px">
      <p id="precio-total">${randomNumber[0].precioTotal} <br> ${randomNumber[0].porciones}</p>`;

    //Boton Otro Plato
    let boton = document.createElement("h2")
    sectionPlato.appendChild(boton)
    boton.textContent = "Otro plato"
    boton.style.width = "180px"
    boton.addEventListener("click", randomMeal)
    //Botones Ingredientes y pasos
    sectionIngre.innerHTML = `<h2 id="ingre-title-1">Ingredientes</h2><h2 id="ingre-title-2">Pasos</h2> <div class="ingre"></div><div class="pasos"></div>`;
    seleccionar.textContent = ""
    seleccionar.removeEventListener('click', randomMeal)


    // AMbos toggle
    const ingre = document.getElementById('ingre-title-1')
    const pasos = document.getElementById('ingre-title-2')

    //Toggle Ingredientes
    ingre.addEventListener('click', () => {
      const ingreDos = document.querySelector('.ingre')
      ingreDos.innerHTML = `${randomNumber[0].ingredientes.join("")}`

      //Remover pasos al cliquear ingredientes
      const pasosDos = document.querySelector('.pasos')
      pasosDos.style.display = "none"
      ingreDos.style.display = "block"

      //Dejarlo "toggled"
      ingre.style.backgroundColor = "#569199"
      pasos.style.backgroundColor = "#94c573"
    })
    //Toggle Pasos
    pasos.addEventListener('click', () => {
      const pasosDos = document.querySelector('.pasos')
      pasosDos.innerHTML = `<p id="pasos">${randomNumber[0].pasos.join("")}</p>`

      //Ajustar margin top de la lista
      const listaPasos = document.getElementById('pasos')
      listaPasos.style.marginTop = "30px"

      //Remover Ingredientes al clickquear pasos
      const ingreDos = document.querySelector('.ingre')
      ingreDos.style.display = "none"
      pasosDos.style.display = "block"

      //Dejarlo "toggled"
      ingre.style.backgroundColor = "#94c573"
      pasos.style.backgroundColor = "#569199"
    })
    //Final del bucle
    if (i == 0) {
      //Boton
      boton.removeEventListener("click", randomMeal)
      boton.remove()
      removerTodo()
      mensajeFinalEstilos()
      seleccionar.appendChild(boton)
      boton.textContent = "Reiniciar"
      boton.style.color = "white"
      boton.style.backgroundColor = "#f41c59"
      boton.style.margin = "auto"
      boton.addEventListener('click', () => {
        location.reload()
      })
      //Que el usuario pueda meter más platos
    }
  } else {
    console.error("Se jodió la vaina")
  }
}

function nuevoPlato() {
  document.body.setAttribute('id', 'body')
  const body = document.getElementById('body')
  body.style.backgroundColor = "#2e302d"
  body.innerHTML = `<p id="alerta">Por ahora, esta opción no está disponible.</p>`
  const alerta = document.getElementById('alerta')
  alerta.addEventListener('click', () => {
    location.reload()
  })
}


function mensajeFinalEstilos() {
  seleccionar.style.display = "block"
  seleccionar.style.backgroundColor = "#94c573"
  seleccionar.style.color = "#f41c59"
  seleccionar.style.marginTop = "92%"
}

function removerTodo() {
  titulo.remove()
  sectionPlato.remove()
  sectionIngre.remove()
}

seleccionar.addEventListener('click', randomMeal)
introducir.addEventListener('click', nuevoPlato)