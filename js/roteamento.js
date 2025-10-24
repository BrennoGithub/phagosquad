async function Sessoes(sessao){
    const sessoes = document.querySelectorAll(".sessao");
    sessoes.forEach( topico => {
        topico.addEventListener("click", function(event){
            event.preventDefault();

            if(topico.textContent != "Inicial"){
                document.querySelector(".sessao").style.fontWeight = "normal";
                document.querySelector(".sessao").style.fontSize = "15px";
                document.querySelector(".sessao").style.backgroundColor = "#E62727";
            }
            
            sessoes.forEach(outroTop => {
                outroTop.style.fontWeight = "normal";
                outroTop.style.fontSize = "15px";
                outroTop.style.backgroundColor = "#E62727";
            })

            topico.style.fontWeight = "bold";
            topico.style.fontSize = "16px";
            topico.style.backgroundColor = "#FF3F33";

            const titulo = topico.textContent;
            if (titulo != sessao){
                Roteamento(titulo, pagina);
            }
        });
    });
};

async function Roteamento(titulo, pagina){
    const inicial = `
    <!-- CONTEÚDO -->
    <div class="overlay"></div>
    <div class="video-container">
        <video controls>
            <source src="videos/projeto.mp4" type="video/mp4">
        </video>
    </div>

    <!-- FUNDO -->
    <div class="background-gif"></div>`;

    const sobre = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Conheça a Phagosquad</h1>
        </div>
        <div class="body">
            <p>
            A <em>Phagosquad</em> é o grupo que apresentará o trabalho sobre a relação entre
            Leucócitos, Endocitose e Diapedese. Somos do Info 3V do campus Parnamirim e ficamos com a responsabilidade
            de produzir uma <em>Biomaket</em> e este lindíssimo site.
            </p>
            <img src="imgs/Phagosquad_logo.ico" alt="Logo Phagosquad">
        </div>
    </div>
    <div class="background-gif-grupo"></div>`;

    const materiais = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Lista de Materiais</h1>
        </div>
        <div class="body">
            <p></p>
            <ol id="esquerda">
                <li class="itemLista">Nome do material — Preço</li>
                <li class="itemLista">Nome do material — Preço</li>
                <li class="itemLista">Nome do material — Preço</li>
                <li class="itemLista">Nome do material — Preço</li>
                <li class="itemLista">Nome do material — Preço</li>
            </ol>
        </div>
    </div>
    <div class="background-gif-materiais"></div>`;

    const biomarket = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Bio-Maket</h1>
        </div>
        <div class="body">
            <p>
            Foto da Bio-Maket aqui
            </p>
        </div>
    </div>
    <div class="background-gif-bio"></div>`;

    switch(titulo){
        case "Sobre":
            pagina.innerHTML = sobre;
            await Sessoes(titulo);
            break;
        case "Biomaket":
            pagina.innerHTML = biomarket;
            await Sessoes(titulo);
            break;
        case "Materiais":
            pagina.innerHTML = materiais;
            await Sessoes(titulo);
            break;
        default:
            pagina.innerHTML = inicial
            await Sessoes(titulo);
            break;
    }
}

const pagina = document.getElementById("conteudoPagina");

document.addEventListener("DOMContentLoaded", async () => {
    await Roteamento("", pagina); 
})

//Deixa a sessao inicial em negrito
document.querySelector(".sessao").style.fontWeight = "bold";
document.querySelector(".sessao").style.fontSize = "16px";
document.querySelector(".sessao").style.backgroundColor = "#FF3F33";
Sessoes("Inicial");