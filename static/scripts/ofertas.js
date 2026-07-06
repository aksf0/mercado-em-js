const offerName = document.getElementById("nomeInput");
const imgInput = document.getElementById("imagemInput");
const offerImg = document.getElementById("previewOferta");
const offerPrice = document.getElementById("precoInput");
const offerDesc = document.getElementById("descricaoInput");
const itemAdicionado = document.getElementById("itemAdicionado");

const offerElements = [offerName.value, document.getElementById("imagemInput").value, offerPrice.value, offerDesc.value];//lista com todos os elementos
//lista com os textos de aviso de cada elemento (os textos que são modificados indicando para preencher o campo etc.)
const offerTexts = [document.getElementById("textoNome"), document.getElementById("textoImagem"), document.getElementById("textoPreco"), document.getElementById("textoDescricao")];


//para mostrar um preview da imagem que está sendo enviada
if (document.getElementById("imagemInput")) {
document.getElementById("imagemInput").addEventListener("change", preview);
}

function preview() {
    const previewImg = document.getElementById("previewOferta");

    if (imgInput.checkValidity()) {
        previewImg.src = imgInput.value;
    } else {
        previewImg.src = ""
    }
}


//verificar se o formulario da oferta está corretamente preenchido, enviar os dados preenchidos para o python, ou sinalizar para preencher o campo
if (document.querySelector("form")) {
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
            
        //se tudo estiver devidamente preenchido, envia os dados
        if (offerName.value.trim() != "" && offerImg.src.trim() != "" && offerPrice.value.trim() != "" && offerDesc.value.trim() != "") {
            
            const formData = new FormData;
            formData.append("nomeInput", offerName.value);
            formData.append("precoInput", offerPrice.value);
            formData.append("imagemInput", offerImg.src);
            formData.append("descricaoInput", offerDesc.value);
            
            fetch ("/produtos", {
                method: "POST",
                body: formData
            })
            
            //sinalizar que o produto foi adicionado
            itemAdicionado.innerText = "Item Adicionado";
            itemAdicionado.style.color = "green";
            offerName.value = "";
            imgInput.value = "";
            offerImg.src = "";
            offerPrice.value = "";
            offerDesc.value = "";    
        } else {
            itemAdicionado.innerText = "";
        }

        //verificar se todos os requerimentos da oferta foram preenchidos
        if (itemAdicionado.innerText == ""){
            for (var i = 0; i < offerElements.length; i++) {
                if (offerElements[i] == "") {
                    offerTexts[i].innerText = "Preencha o campo";
                } else {
                    offerTexts[i].innerText = "";
                }
            }
        }
    });
};

//excluir produto
function excluirProduto(id) {

    const formData = new FormData
    formData.append("id", id)

    fetch("/excluirProduto", {
        method: "POST",
        body: formData
    })
}