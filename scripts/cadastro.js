let logado = localStorage.getItem("logado") === "true";


if (logado && document.querySelector(".ladoDireito")){
    document.querySelector(".login").remove();
    document.querySelector(".cadastro").remove();

    let nomeUsuario = document.createElement("p");
    document.querySelector(".ladoDireito").appendChild(nomeUsuario);
    const dadosUsuario = JSON.parse(localStorage.getItem("cadastroUsuario"))
    nomeUsuario.innerText = dadosUsuario[0];
    nomeUsuario.style.fontSize = "30px"
}

if (document.querySelector(".cadastroForm")) {
    document.querySelector(".cadastroForm").addEventListener("submit", function(e) {

        const nomeUser = document.getElementById("userNome").value;
        const emailUser = document.getElementById("userEmail").value;
        const senhaUser = document.getElementById("userSenha").value;
        const dadosUser = [nomeUser, emailUser, senhaUser];

        let dadosVerificados = 0;
        dadosUser.forEach(element => {
            //consertar isso
            if (element.lenght >= 3){
                dadosVerificados ++;
            }
        });
        if (dadosVerificados == 3){
            localStorage.setItem("cadastroUsuario", JSON.stringify(dadosUser));
            document.getElementById("cadastroRetorno").innerText = "";
        }else{
            e.preventDefault();
            document.getElementById("cadastroRetorno").innerText = "Cada campo deve conter pelo menos 3 caracteres";
            document.getElementById("cadastroRetorno").style.color = "red";
        }
    })
};

if (document.querySelector(".loginForm")) {
    document.querySelector(".loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const dados = JSON.parse(localStorage.getItem("cadastroUsuario"));
        const emailUser = document.getElementById("userEmail").value;
        const senhaUser = document.getElementById("userSenha").value;
        const retorno = document.getElementById("retorno");
        const btnTrocarPagina = document.getElementById("trocarPagina");

        if (emailUser == dados[1] && senhaUser == dados[2]) {
            logado = true;
            localStorage.setItem("logado", logado);
            retorno.innerText = "";
            btnTrocarPagina.innerHTML = "<p>Login realizado<br>Clique aqui para voltar</br></p>";
            btnTrocarPagina.style.backgroundColor = "green";
            btnTrocarPagina.style.transition = "0.6s";
            btnTrocarPagina.href = "../index.html"

        }else {
            retorno.innerText = "Informações incorretas";
        }
    });
};
