async function Sessoes(sessao){
    const sessoes = document.querySelectorAll(".sessao");
    sessoes.forEach( topico => {
        topico.addEventListener("click", function(event){
            event.preventDefault();

            if(topico.textContent != "Inicial"){
                document.querySelector(".sessao").style.fontWeight = "normal";
                document.querySelector(".sessao").style.fontSize = "16px";
                document.querySelector(".sessao").style.backgroundColor = "#E62727";
            }
            
            sessoes.forEach(outroTop => {
                outroTop.style.fontWeight = "normal";
                outroTop.style.fontSize = "16px";
                outroTop.style.backgroundColor = "#E62727";
            })

            topico.style.fontWeight = "bold";
            topico.style.fontSize = "18px";
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
                    <li class="itemLista">Papelão grosso (base)</li>
                    <li class="itemLista">Papel alumínio</li>
                    <li class="itemLista">Fitas vermelhos</li>
                    <li class="itemLista">Massa de modelar branca, roxa e verde</li>
                    <li class="itemLista">Palito de churrasco</li>
                    <li class="itemLista">Papel/placas</li>
                    <li class="itemLista">Adesivos</li>
                    <li class="itemLista">Cola quente</li>
                    <li class="itemLista">Tesoura/estilete</li>
                    <li class="itemLista">Tinta</li>
                    <li class="itemLista">Papel Machê</li>
                    <li class="itemLista">Veniz</li>
                    <li class="itemLista">Ímas</li>                                        
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
        <img src="imgs/Prototipo.jpg" alt="Prototipo" id="prototipo">
        <br/>
    </div>

    <div class="background-gif-bio"></div>
    </div>`;

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
document.querySelector(".sessao").style.fontSize = "18px";
document.querySelector(".sessao").style.backgroundColor = "#FF3F33";
Sessoes("Inicial");