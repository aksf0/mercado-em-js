import {primeiraInteracao, nome, idade, email, senha} from "./account.js";
import {loja} from "./store.js"
import PromptSync from "prompt-sync";

const prompt = PromptSync();

primeiraInteracao();

export function menuInicio() {
    console.clear();
    console.log("INICIO");
    console.log("O que deseja?\n 1 - Loja\n 2 - Carrinho");
    var acao = prompt();
    
    if (acao == "1") {
        loja()
    }else if (acao == "2") {
        carrinho();
    }
}