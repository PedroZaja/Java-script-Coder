function Pc(pc, precio, caracteristicas, img) {
    this.pc = pc;
    this.precio = precio;
    this.caracteristicas = caracteristicas;
    this.img = img;
}

let PcGamer1 = {
    pc: "1",
    precio: "$50000",
    caracteristicas: "i3, 16gb de ram, rx 550, 500w, 240 ssd",
    img: "img src= img/pc1.jpg",
}
let PcGamer2 = {
    pc: "2",
    precio: "$100000",
    caracteristicas: "i5, 16gb de ram, rtx 3050, 650w, 1tb hdd, 240gb ssd",
    img: "img src= img/pc2.jpg",
}
let PcGamer3 = {
    pc: "3",
    precio: "$200000",
    caracteristicas: "i7, 16gb de ram, rx 6650, 850w, 1tb ssd",
    img: "img src= img/pc3.jpg",
}


let PcEdicion1 =
{
    pc: "1",
    precio: "$50000",
    caracteristicas: "i3, 16gb de ram, rx 550, 500w, 240 ssd",
    img: "img src= img/pc1.jpg",
}
let PcEdicion2 = {
    pc: "2",
    precio: "$100000",
    caracteristicas: "i5, 16gb de ram, rtx 3050, 650w, 1tb hdd, 240gb ssd",
    img: "img src= img/pc2.jpg",
}
let PcEdicion3 = {
    pc: "3",
    precio: "$200000",
    caracteristicas: "i7, 16gb de ram, rx 6650, 850w, 1tb ssd",
    img: "img src= img/pc3.jpg",
}


let PcStreaming1 =
{
    pc: "1",
    precio: "$50000",
    caracteristicas: "i3, 16gb de ram, rx 550, 500w, 240 ssd",
    img: "img src= img/pc1.jpg",
}
let PcStreaming2 = {
    pc: "2",
    precio: "$100000",
    caracteristicas: "i5, 16gb de ram, rtx 3050, 650w, 1tb hdd, 240gb ssd",
    img: "img src= img/pc2.jpg",
}
let PcStreaming3 = {
    pc: "3",
    precio: "$200000",
    caracteristicas: "i7, 16gb de ram, rx 6650, 850w, 1tb ssd",
    img: "img src= img/pc3.jpg",
}



function buscar() {
    if (document.getElementById("input").value === "gamer", "Gamer", "1") {
        document.getElementById("caja1").innerHTML = `
        <${PcGamer1.img} alt="" class="img">
        <h2 class="precio">${PcGamer1.precio}</h2>
        <${PcGamer2.img} alt="" class="img">
        <h2 class="precio">${PcGamer2.precio}</h2>
        <${PcGamer3.img} alt="" class="img">
        <h2 class="precio">${PcGamer3.precio}</h2>
        `;
    }
    else if (document.getElementById("input").value === "Edicion", "edicion", "2") {
        document.getElementById("caja1").innerHTML = `
        <${PcEdicion1.img} alt="" class="img">
        <h2 class="precio">${PcEdicion1.precio}</h2>
        <${PcEdicion2.img} alt="" class="img">
        <h2 class="precio">${PcEdicion2.precio}</h2>
        <${PcEdicion3.img} alt = "" class="img">
        <h2 class="precio">${PcEdicion3.precio}</h2>
        `;

    }
    else if (document.getElementById("input").value === "streaming", "Streaming", "stream", "3") {
        document.getElementById("caja1").innerHTML = `
        <${PcStreaming1.img} alt="" class="img">
        <h2 class="precio">${PcStreaming1.precio}</h2>
        <${PcStreaming2.img} alt="" class="img">
        <h2 class="precio">${PcStreaming2.precio}</h2>
        <${PcStreaming3.img} alt = "" class="img">
        <h2 class="precio">${PcStreaming3.precio}</h2>
        `;

    }
    else if (document.getElementById("input").value !== "gamer", "Gamer", "1", "Edicion", "edicion", "2", "streaming", "Streaming", "stream", "3") {
        document.getElementById("caja1").innerHTML =
            `<p class="noResultado">No se encontro ningun resultado en su busqueda</p>`
    } 
    else if (document.getElementById("input").value === "") {
        `<p class="noResultado">No se encontro ningun resultado en su busqueda</p>`
    }
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

function popUp() {
    if (document.getElementById("nombreUs").value !== " ") {
        swal({
            title: "Resgistro completo!",
            icon: "success",
          });
    }
}


