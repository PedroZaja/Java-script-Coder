const cardContainer = document.querySelector("#caja1"),
btnBuscar = document.querySelector("#btnBuscar"),
inputBuscar = document.querySelector("#input");

function Pc(pc, precio, caracteristicas, img) {
    this.pc = pc;
    this.precio = precio;
    this.caracteristicas = caracteristicas;
    this.img = img;
}

const opcion = document.getElementById("input");
const contenedor = document.getElementById("caja1");

document.querySelector("#subInfo").addEventListener("click", guardarUs);

function guardarUs() {
    const
        guardarUsuario = document.querySelector("#nombreUs").value,
        guardarEmail = document.querySelector("#emailUs").value;
    localStorage.setItem("nombreUs", guardarUsuario);
    localStorage.setItem("emailUs", guardarEmail);

}

function PopUpGamer() {

    swal({
        title: "Una Pc Gamer esta enfocada al mundo de los videojuegos, multimedia y una estetica mas vistosa, ya sea con luces o componentes visibles.",
        icon: "success",
    });

}

function PopUpEdicion() {
    swal({
        title: "Una Pc para edicion es aquella enfocada al mundo profesional, ya sea para editar/renderizar videos o fotos.",
        icon: "success",
    });
}

function PopUpStreaming() {
    swal({
        title: "Las Pc de streaming son aquellas enfocadas al mundo de la creacion de contenido, ya sea para subir transmisiones en el momento o grabar tus gameplays para las distintas plataformas.",
        icon: "success",
    });

}

function buscar() {
    swal("Buscando! :)", {
        buttons: false,
        timer: 2000,
    });
}

function PopUpLogIn() {
    swal({
        title: "Registrado con Exito!",
        icon: "success",
    });
}

const URLgamer = './Pc/pcGamer.json';
const fetchGamer = async (URLgamer) => {
    const respuestaGamer = await fetch(URLgamer);
    const pcGamer = await respuestaGamer.json();
}

const URLstreaming = './Pc/pcStreaming.json';
const fetchStreaming = async (URLstreaming) => {
    const respuestaStreaming = await fetch(URLstreaming);
    const pcStreaming = await respuestaStreaming.json();

}

const URLedicion = './Pc/pcEdicion.json';
const fetchEdicion = async () => {
    const respuestaEdicion = await fetch(URLedicion);
    const pcEdicion = await respuestaEdicion.json();

}


function buscarPc(){
    if(document.getElementById("input").value == "1"){
        document.getElementById("caja1").innerHTML = `
        <div class="card">
      <img src="${img}" alt="">
      <div class="card-body">
          <h3>${precio}</h3>
          <p>${caracteristicas}</p>
      </div>
  </div>
        `
    }
}

const mostrarPc = (arr) => {
    let html;
    for (const item of arr) {
      const { precio, img, caracteristicas } = item;
  
      html = `
        <div class="card">
            <div class="card-image">
             <img src="../img/${img}">
            </div>
          <div class="card-content">
            <span class="card-title">${precio}</span>
            <p>$${caracteristicas}</p>
          </div>
        </div>
       `;
  
      contenedor.innerHTML += html;
    }
  };