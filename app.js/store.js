import PromptSync from "prompt-sync";
import {carrinho} from "./cart.js";

const prompt = PromptSync();

function preco(min, max) {
    var preco = ((Math.random()) * (max - min) + min).toFixed(2);
    return preco;
}

let produtos = ["arroz", 2, 6, "feijao", 3, 6, "macarrao", 4, 9, "carne", 20, 60, "frango", 12, 25];
let produtosPrecificados = [];
let produtosEscolhidos = [];

for (var i = 0; i < produtos.length; i += 3) {
    produtosPrecificados[(i/3) * 2] = produtos[i];
    produtosPrecificados[((i/3) * 2) + 1] = preco(produtos[i + 1], produtos[i + 2]);
}

export function loja() {
    console.clear();
    console.log("Produto:          Preço:\n");
    for (var i = 0; i < produtosPrecificados.length; i += 2) {
        console.log(`${produtosPrecificados[i].padEnd(17)} R$ ${produtosPrecificados[i + 1]}\n`);
    }
    
    console.log("O que deseja comprar?\nIndique o nome e a quantidade, separando cada informação por virgula e espaço.");
    produtosEscolhidos = prompt().split(", ");
    carrinho(produtosEscolhidos, produtosPrecificados);
}