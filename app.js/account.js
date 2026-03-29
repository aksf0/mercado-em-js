import PromptSync from "prompt-sync";
import { menuInicio } from "./main.js";

export let nome;
export let idade;
export let email;
export let senha;



const prompt = PromptSync();

export function primeiraInteracao() {
    console.clear();
    console.log("Olá, vamos comecar.\n O que Deseja?\n 1 - Cadastrar\n 2 - Logar\n 3 - Sair");
    var acao = prompt();
    
    if (acao == 1) {
        cadastro();
    }else if (acao == 2) {
        login();
    }else if (acao == 3) {
        console.log("Até mais!");
        process.exit();
    }else {
        menuInicio();
    }
}

export function cadastro() {
    console.clear();
    console.log("CADASTRO");
    //perguntas
    nome = prompt("Digite seu nome: ");
    idade = prompt("Digite sua idade: ");

    if (idade < 18) {
        console.log("Você precisa ter no minimo 18 anos para acessar");
        process.exit()
    }
    email = prompt("Digite seu email: ");

    //verificacao se as senhas sao iguais
    while (true) {
        senha = prompt("Digite sua senha: ");

        if (senha.length < 5) {
            console.log("A senha deve ter pelo menos 5 caracteres");
            continue;
        }
        var confirmacaoSenha = prompt("Confirme sua senha: ");

        if (senha != confirmacaoSenha) {
        console.log("As senhas são diferentes, tente novamente");
        }else {
            break;
        }
    }
    console.log("Cadastro realizado com sucesso!\n 1 - Menu");
    var acao = prompt();
    if (acao == 1) {
        primeiraInteracao();
    }    
}

export function login() {
    console.clear();
    while (true){
        console.log("LOGIN");
        var loginNome = prompt("Qual seu nome: ");
        var loginSenha = prompt("Qual sua senha: ");

        if (loginNome != nome || loginSenha != senha) {
            console.log("informações incorretas, tente novamente");
        }else {
            menuInicio();
            break;
        }
    }
}
