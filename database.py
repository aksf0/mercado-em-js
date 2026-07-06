import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()
url = os.getenv("DATABASE_URL")

def conectar():
    return psycopg2.connect(url)

#criando a tabela de produtos
conexao = conectar()
cursor = conexao.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS produtos (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    imagem TEXT NOT NULL,
    descricao TEXT NOT NULL
)""")

conexao.commit()
conexao.close()

def inserir_produto(nome, preco, img, desc):
    
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute(
        "INSERT INTO produtos (nome, preco, imagem, descricao) VALUES (%s, %s, %s, %s)",
        (nome, preco, img, desc)
    )

    conexao.commit()
    conexao.close()

def buscar_todos_itens():

    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute(
        "SELECT id, nome, preco, imagem, descricao FROM produtos"
    )
    produtos = cursor.fetchall()

    conexao.close()
    return produtos

def buscar_produto_por_id(id):
    
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute("SELECT nome, preco, imagem, descricao FROM produtos WHERE id = %s", (id,))

    produto = cursor.fetchone()

    conexao.close()
    return produto

def excluir_produto(id):
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute("DELETE FROM produtos WHERE id = %s", (id,))

    conexao.commit()
    conexao.close()