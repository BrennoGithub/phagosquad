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
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <div class="head">
                <h1>Conheça a Phagosquad</h1>
            </div>
            <div class="body">
                <p>
                    A <span class="sessao linkSessao">Phagosquad</span> é o grupo que apresentará o trabalho sobre a relação entre
                    Leucócitos, Endocitose e Diapedese. Somos do Info 3V do campus Parnamirim e ficamos com a responsabilidade
                    de produzir uma <span class="sessao linkSessao">Biomaket</span> e este lindíssimo site.
                </p>
                    <br>
                <p>
                    Os leucócitos, também conhecidos como glóbulos brancos, são células do sangue responsáveis pela 
                    defesa do organismo. Fazem parte do sistema imunológico, combatendo microrganismos invasores, 
                    toxinas e células anormais. São fundamentais para a imunidade e para manter o corpo livre de 
                    infecções. Seu processo é conhecido como Endocitose, quando a célula engole partículas do meio externo, 
                    envolvendo sua membrana plasmática Este mecanismo de transporte de massa se divide em fagocitose 
                    (englobar partículas sólidas grandes), pinocitose (ingestão de fluidos e partículas pequenas) 
                    e endocitose mediada por receptor (captação específica de moléculas).
                <p/>
                <img src="imgs/Phagosquad_logo.ico" alt="Logo Phagosquad">
            </div>
        </div>
    </div>
    <div class="background-gif-grupo"></div>`; //Ajeitar <a href="#" class="sessao"><strong>Biomaket</strong></a>

const materiais = `
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <div class="head">
                <h1>Lista de Materiais</h1>
            </div>
            <div class="body">
                <p></p>
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
    </div>
    <div class="background-gif-materiais"></div>`;

const biomarket = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Bio-Maket</h1>
        </div>
        <div class="body">
            <p></p>
            <img src="imgs/Prototipo.jpg" alt="Prototipo" id="prototipo"> 
        </div>
    </div>
    <div class="background-gif-bio"></div>`;

async function Sessoes(){
    const sessoes = document.querySelectorAll(".sessao");
    sessoes.forEach( topico => {
        topico.addEventListener("click", function(event){
            event.preventDefault();

            sessoes.forEach(outroTop => {
                outroTop.style.fontWeight = "normal";
                outroTop.style.backgroundColor = "#E62727";
            })

            topico.style.fontWeight = "bold";
            topico.style.backgroundColor = "#FF3F33";

            const titulo = topico.textContent;
            Roteamento(titulo, pagina);
            
        });
    });
};

async function Roteamento(titulo, pagina){
    switch(titulo){
        case "Sobre":
            pagina.innerHTML = sobre;
            await Sessoes(titulo);
            break;
        case "Biomaket":
            pagina.innerHTML = biomarket;
            sessoes[2].style.fontWeight = "bold";
            sessoes[2].style.backgroundColor = "#FF3F33";
            await Sessoes(titulo);
            break;
        case "Materiais":
            pagina.innerHTML = materiais;
            await Sessoes(titulo);
            break;
        default:
            pagina.innerHTML = inicial
            document.querySelector(".sessao").style.fontWeight = "bold";
            document.querySelector(".sessao").style.backgroundColor = "#FF3F33";
            await Sessoes(titulo);
            break;
    }
}

const pagina = document.getElementById("conteudoPagina");

document.addEventListener("DOMContentLoaded", async () => {
    await Roteamento("", pagina); 
    Sessoes();
})
