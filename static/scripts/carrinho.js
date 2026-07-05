let listaCompras = JSON.parse(localStorage.getItem("listaCompras")) || [];

function adicionarCarrinho(id){
    listaCompras.push(id);
    localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
}



if (document.getElementById("sla")) {
    document.getElementById("sla").innerText = listaCompras;
}