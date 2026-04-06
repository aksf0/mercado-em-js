//ignore a bagunça desse codigo, alguma hora eu organizo
//o importante é que ta funcionando (não sei até quando)

const listaProdutos = JSON.parse(localStorage.getItem("elementos")) || [];

if (document.querySelector(".semProdutos")) {
    if (listaProdutos.length < 1) {
        document.querySelector(".semProdutos");
    }else {
        document.querySelector(".semProdutos").remove();
    }
}
  function novoProduto(nome, imagem, preco, descricao) {
    const produto = {
        nome: nome.value,
        imagem: imagem.src,
        preco: preco.value,
        descricao: descricao.value
    };
    listaProdutos.push(produto);
    criarOferta(produto);
};

if (document.getElementById("imagemInput")) {
document.getElementById("imagemInput").addEventListener("change", preview);
}

function preview() {
    const previewLocal = document.getElementById("previewOferta");
    const previewImg = document.getElementById("imagemInput");
    if (previewImg.checkValidity()) {
        previewLocal.src = previewImg.value;
    }else {
        previewLocal.src = ""
    }
}

 if (document.querySelector("form")) {
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const offerName = document.getElementById("nomeInput");
    const offerImg = document.getElementById("previewOferta");
    const offerPrice = document.getElementById("precoInput");
    const offerDesc = document.getElementById("descricaoInput");

    if (offerName.value.trim() != "" && offerImg.src.trim() != "" && offerPrice.value.trim() != "" && offerDesc.value.trim() != "") {
    novoProduto(offerName, offerImg, offerPrice, offerDesc);
    }

    const offerElements = [offerName.value, document.getElementById("imagemInput").value, offerPrice.value, offerDesc.value];
    const offerTexts = [document.getElementById("textoNome"), document.getElementById("textoImagem"), document.getElementById("textoPreco"), document.getElementById("textoDescricao")];

    
    localStorage.setItem("elementos", JSON.stringify(listaProdutos));
    //verificar se todos os requerimentos da oferta foram preenchidos
    for (var i = 0; i < offerElements.length; i++) {
        if (offerElements[i] === "") {
            offerTexts[i].innerText = "Preencha o campo";
        }else {
            offerTexts[i].innerText = "";
        }
    }

});
};
const elementos = JSON.parse(localStorage.getItem("elementos"));

if (elementos) {
    elementos.forEach(elements => {
       criarOferta(elements); 
    });
};

function criarOferta(dados) {
    
    const novoProduto = document.createElement("a");
    const produtoNome = document.createElement("h3");
    const produtoImg = document.createElement("img");
    const produtoPreco = document.createElement("p");
    const produtoDesc = document.createElement("p");

    novoProduto.classList.add("produto");
    novoProduto.href = "#";
    document.querySelector(".containerOfertas").appendChild(novoProduto);
    novoProduto.appendChild(produtoNome);
    produtoNome.innerText = dados.nome;
    novoProduto.appendChild(produtoImg);
    produtoImg.src = dados.imagem;
    novoProduto.appendChild(produtoPreco);
    produtoPreco.innerText = dados.preco;
    novoProduto.appendChild(produtoDesc);
    produtoDesc.innerText = dados.descricao;
}