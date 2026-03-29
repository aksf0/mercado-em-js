import PromptSync from "prompt-sync";
import {loja} from "./store.js";
import { primeiraInteracao } from "./account.js";


const prompt = PromptSync();

export function carrinho(items, prices) {
    let valorTotal = 0;
   console.clear();
    console.log("CARRINHO");
    for (var i = 0; i <= items.length; i += 2) {
        for (var j = 0; j < prices.length; j += 2) {
            if (items[i] == prices[j]) {
                console.log(`${items[i + 1]} ${items[i].padEnd(17)} R$ ${(prices[j + 1] * items[i + 1]).toFixed(2)}`);
                valorTotal += parseFloat((prices[j + 1] * items[i + 1]).toFixed(2));
                break;
            }
        }
    }
    console.log(`\nO valor total é R$ ${valorTotal.toFixed(2)}`);
    irPagamento();
}

function irPagamento() {
    
        console.log("\nProsseguir para pagamento?\nsim\nnao");
        var acao = prompt();
     
        if (acao == "sim") {
            pagamento();
            
        }else if (acao == "nao") {
            while(true) {
                console.log("O que deseja fazer?\n1 - Menu\n2 - Loja\n3 - Carrinho")
                var acao = prompt();
            
                if (acao == "1") {
                    primeiraInteracao();
                    break;
                }else if (acao == "2") {
                    loja();
                    break;
                }else if (acao == "3") {
                    carrinho();
                    break;
                }else {
                    console.log("Resposta inválida, tente novamente.")
                }
            }
            
        }else {
            console.log("Resposta inválida, tente novamente.")
        }
    
}