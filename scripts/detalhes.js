const URLparams = new URLSearchParams(window.location.search);
const URLproduto = URLparams.get("id");

//pegar o produto do cache e colocar as informacoes dele na pagina de compra(essa)

const elementos = JSON.parse(localStorage.getItem("elementos"));
const produto = elementos.find(item => item.nome == URLproduto);

//titulo da pagina
document.querySelector("title").innerText = produto.nome;

//conteudo da pagina
const titulo = document.getElementById("tituloProduto");
const imgProduto = document.getElementById("imgProduto");
const precoProduto = document.getElementById("precoProduto");
const descproduto = document.getElementById("descProduto");

titulo.innerText = produto.nome;
imgProduto.src = produto.imagem;
precoProduto.innerText = `R$ ${produto.preco}`;
descproduto.innerText = produto.descricao;