let logado = false;

if (document.querySelector(".cadastroForm")) {
    document.querySelector(".cadastroForm").addEventListener("submit", salvarDados)

    function salvarDados() {
        const nomeUser = document.getElementById("userNome").value;
        const emailUser = document.getElementById("userEmail").value;
        const senhaUser = document.getElementById("userSenha").value;
        const dadosUser = [nomeUser, emailUser, senhaUser];

        localStorage.setItem("cadastroUsuario", JSON.stringify(dadosUser));
    };
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
