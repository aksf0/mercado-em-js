document.querySelector("form").addEventListener("submit", salvarDados)

function salvarDados() {
    const nomeUser = document.getElementById("userNome").value;
    const emailUser = document.getElementById("userEmail").value;
    const senhaUser = document.getElementById("userSenha").value;
    const dadosUser = [nomeUser, emailUser, senhaUser]

    localStorage.setItem("cadastroUsuario", JSON.stringify(dadosUser));
}