from flask import Flask, render_template, redirect, url_for, request

#====================================Rotas====================================#

app = Flask(__name__)

@app.route("/")
def pagina_inicial():
    return render_template("pagina_inicial.html")

@app.route("/biomaket")
def biomaket():
    return render_template("biomaket.html")

@app.route("/sobre")
def sobre():
    return render_template("sobre.html")

@app.route("/materiais")
def materiais():
    return render_template("materiais.html")