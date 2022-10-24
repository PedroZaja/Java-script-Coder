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


const PcEdicion = [
    {
        pc: "1",
        precio: "$50000",
        caracteristicas: "i3, 16gb de ram, rx 550, 500w, 240 ssd",
        img: "img src= img/pc1.jpg",
    },
    {
        pc: "2",
        precio: "$100000",
        caracteristicas: "i5, 16gb de ram, rtx 3050, 650w, 1tb hdd, 240gb ssd",
        img: "img src= img/pc2.jpg",
    },
    {
        pc: "3",
        precio: "$200000",
        caracteristicas: "i7, 16gb de ram, rx 6650, 850w, 1tb ssd",
        img: "img src= img/pc3.jpg",
    },
];

const PcStreaming = [
    {
        pc: "1",
        precio: "$50000",
        caracteristicas: "i3, 16gb de ram, rx 550, 500w, 240 ssd",
        img: "img src= img/pc1.jpg",
    },
    {
        pc: "2",
        precio: "$100000",
        caracteristicas: "i5, 16gb de ram, rtx 3050, 650w, 1tb hdd, 240gb ssd",
        img: "img src= img/pc2.jpg",
    },
    {
        pc: "3",
        precio: "$200000",
        caracteristicas: "i7, 16gb de ram, rx 6650, 850w, 1tb ssd",
        img: "img src= img/pc3.jpg",
    },
];

function guardarLocal(PcGamer) {
    localStorage.setItem("PcGamer", JSON.stringify(PcGamer))
}

function guardarLocal(PcEdicion) {
    localStorage.setItem("PcEdicion", JSON.stringify(PcEdicion))
}

function guardarLocal(PcStreaming) {
    localStorage.setItem("PcStreaming", JSON.stringify(PcStreaming))
}

function recuperarLocal(PcGamer) {
    return JSON.parse(localStorage.getItem(PcGamer))
}

function recuperarLocal(PcEdicion) {
    return JSON.parse(localStorage.getItem(PcEdicion))
}

function recuperarLocal(PcStreaming) {
    return JSON.parse(localStorage.getItem(PcStreaming))
}

function buscar() {
    if (document.getElementById("input").value == "gamer", "Gamer", "1") {
        document.getElementById("caja1").innerHTML = `
        <${PcGamer1.img} alt="" class="img"
        <p>${PcGamer1.caracteristicas}</p>
        <h2>${PcGamer1.precio}</h2>
        `;

    }

};