from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cadastro")
def cadastro():
    return render_template("cadastro.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/produtos")
def produtos():
    return render_template("produtos.html")

@app.route("/config")
def config():
    return render_template("config.html")

@app.route("/carrinho")
def carrinho():
    return render_template("carrinho.html")

if __name__ == "__main__":
    app.run(debug=True)