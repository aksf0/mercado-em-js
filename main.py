from flask import Flask, render_template, request, redirect, url_for
from database import inserir_produto, buscar_todos_itens, buscar_produto_por_id, excluir_produto

app = Flask(__name__)

@app.route("/")
def index():

    lista_de_produtos = buscar_todos_itens()

    return render_template("index.html", produtos = lista_de_produtos)

@app.route("/cadastro")
def cadastro():
    
    return render_template("cadastro.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/produtos", methods=["GET","POST"])
def produtos():

    lista_de_produtos = buscar_todos_itens()

    if request.method == "POST":
        nome = request.form["nomeInput"]
        preco = float(request.form["precoInput"])
        imagem = request.form["imagemInput"]
        descricao = request.form["descricaoInput"]

        inserir_produto(nome, preco, imagem, descricao)
            
    return render_template("produtos.html", produtos = lista_de_produtos)

@app.route("/config")
def config():
    return render_template("config.html")

@app.route("/carrinho")
def carrinho():
    return render_template("carrinho.html")

@app.route("/detalhes/<int:id>")
def detalhes(id):

    produto = buscar_produto_por_id(id)
    
    return render_template("detalhes.html", produto = produto)

@app.route("/excluirProduto", methods=["POST"])
def excluirProduto():
    
    if request.method == "POST":
        id = int(request.form["id"])
        excluir_produto(id)

if __name__ == "__main__":
    app.run(debug=True)