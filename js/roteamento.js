function Sessoes(sessao){
    const sessoes = document.querySelectorAll(".sessao");
    sessoes.forEach( topico => {
        topico.addEventListener("click", function(event){
            event.preventDefault();
            sessoes.forEach(outroTop => {
                outroTop.style.fontWeight = "normal";
                outroTop.style.fontSize = "1.3rem";
            })

            topico.style.fontWeight = "bold";
            topico.style.fontSize = "1.5rem";

            const titulo = topico.textContent;
            if (titulo != sessao){
                Roteamento(titulo, pagina);
            }
        });
    });
};

function Roteamento(titulo, pagina){
    const inicial = `
    <div>
        <!-- CONTEÚDO -->
        <div class="overlay"></div>
        <div class="video-container">
            <video controls>
                <source src="videos/projeto.mp4" type="video/mp4">
            </video>
        </div>

        <!-- FUNDO -->
        <div class="background-gif"></div>
    </div>`;

    const sobre = `
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <br/>
            <h1>Conheça a Phagosquad</h1>
                <hr>
            <p>
                A <strong><a href="#" class="sessao">Phagosquad</a></strong> é o grupo que apresentará o trabalho sobre a relação entre
                Leucócitos, Endocitose e Diapedese. Somos do Info 3V do campus Parnamirim e ficamos com a responsabilidade
                de produzir uma <strong><a href="#" class="sessao">Biomaket</a></strong> e este lindíssimo site.
            </p>
            <img src="imgs/Phagosquad_logo.ico" alt="Logo Phagosquad">
            <br/>
            <br/>
        </div>
        <div class="background-gif-grupo"></div>
    </div>`;

    const materiais = `
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <br/>
            <h1>Lista de Materiais</h1>
                <hr>
            <ol id="esquerda">
                    <li class="itemLista">Nome do material — Preço</li>
                    <li class="itemLista">Nome do material — Preço</li>
                    <li class="itemLista">Nome do material — Preço</li>
                    <li class="itemLista">Nome do material — Preço</li>
                    <li class="itemLista">Nome do material — Preço</li>
            </ol>
        </div>
    </div>

    <div class="background-gif-materiais"></div>
    </div>`;

    const biomarket = `
    <div>
        <div class="overlay"></div>
    <div class="sobre_grupo">
        <br/>
        <h1>Bio-Maket</h1>
            <hr>
        <p>
            Foto da Bio-Maket aqui
        </p>
        <br/>
    </div>

    <div class="background-gif-bio"></div>
    </div>`;

    switch(titulo){
        case "Sobre":
            pagina.innerHTML = sobre;
            Sessoes(titulo);
            break;
        case "Biomaket":
            pagina.innerHTML = biomarket;
            Sessoes(titulo);
            break;
        case "Materiais":
            pagina.innerHTML = materiais;
            Sessoes(titulo);
            break;
        default:
            pagina.innerHTML = inicial
            Sessoes(titulo);
            break;
    }
}

const pagina = document.getElementById("conteudoPagina");

document.addEventListener("DOMContentLoaded", () => {
    Roteamento("", pagina); 
})

//Deixa a sessao inicial em negrito
document.querySelector(".sessao").style.fontWeight = "bold";
document.querySelector(".sessao").style.fontSize = "1.5rem";
Sessoes("Inicial");