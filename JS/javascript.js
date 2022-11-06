const contenedor = document.querySelector(".contenedor"),
    btnBuscar = document.querySelector("#btnBuscar"),
    inputBuscar = document.querySelector("#input");

function Pc(pc, precio, caracteristicas, img) {
    this.pc = pc;
    this.precio = precio;
    this.caracteristicas = caracteristicas;
    this.img = img;
}

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


const mostrarPc = (arr) => {
    let html;
    for (const item of arr) {
        const { precio, img, caracteristicas } = item;

        html = `
        <div class="card">
            <div class="card-image">
             <img class="img" src="./img/${img}">
            </div>
          <div class="card-content">
            <span class="card-title precio">${precio}</span>
            <p class="precio">${caracteristicas}</p>
          </div>
        </div>
       `;

        contenedor.innerHTML += html;
    }
};

function buscarPc(){
    if(document.getElementById("input").value == "1"){
        verPcGamer();
    }
}

async function verPcGamer() {
    const response = await fetch('./Pc/pcGamer.json')
    const datos = await response.json()
    mostrarPc(datos);
}

async function verPcStreaming() {
    const response = await fetch('./Pc/pcStreaming.json')
    const datos = await response.json()
    mostrarPc(datos);
}

async function verPcEdicion() {
    const response = await fetch('./Pc/pcEdicion.json')
    const datos = await response.json()
    mostrarPc(datos);
}