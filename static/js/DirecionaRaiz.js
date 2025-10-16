//Função que direciona para o arquivo principal do projeto quando usado o Live Server
function DirecionaRaiz(){
    window.location.replace("/templates/inicial.html")
}

document.addEventListener("DOMContentLoaded", () => {
    DirecionaRaiz();
})