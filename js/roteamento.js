const inicial = `
    <div class="overlay"></div>
    <div class="sobre_video video-container">
        <div class="head_video head">
            <h1>Conheça os Leucócitos</h1>
        </div>
        <div class="body_video">
            <video controls>
                <source src="videos/projeto_phagosquad.mp4" type="video/mp4">
            </video>
            <p>
                Os <span class="linkSessao">leucócitos</span>, também conhecidos como glóbulos brancos, são células do sangue responsáveis 
                pela defesa do organismo. Fazem parte do sistema imunológico, combatendo microrganismos invasores, 
                toxinas e células anormais. São fundamentais para a imunidade e para manter o corpo livre de infecções.
                Visto isso, os leucócitos realizam dois tipos de processos no processo de defesa do organismo, que são a <span class="linkSessao">endocitose</span>,
                quando a célula engole partículas do meio externo, permitindo com que os leucócitos absorvam e destruam microrganismos, 
                restos celulares ou substâncias tóxicas, e a <span class="linkSessao">diapedese</span>, quando os leucócitos saem da corrente sanguínea e migram para tecidos
                ou órgãos, atravessando as paredes dos capilares, geralmente em resposta a um estímulo inflamatório ou lesão tecidual. 
            <p/>
        </div>
    </div>
    <div class="background-gif"></div>`;

const sobre = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Conheça a Phagosquad</h1>
        </div>
        <div class="body">
            <img src="imgs/Phagosquad_logo.ico" alt="Logo Phagosquad">
            <p>
                A <span class="sessao linkSessao">Phagosquad</span> é o grupo que apresentará o trabalho sobre a relação entre
                Leucócitos, Endocitose e Diapedese, composto por <em>Ananda Beatriz, Breno Gusmão, Fabiana Antunes e Júlio César.</em> 
                Somos de <em>INFO 3V</em> do campus Parnamirim e ficamos com a responsabilidade de produzir uma 
                <span class="sessao linkSessao">Biomaket</span> e este lindíssimo site.
            </p>
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
            <p>Nossa Bio-Makat utilizou os seguintes materiais: </p>
            <br/>
            <ol id="esquerda">
                <li class="itemLista">Papelão grosso (base)</li>
                <li class="itemLista">Papel alumínio</li>
                <li class="itemLista">Fitas vermelhos</li>
                <li class="itemLista">Massa de EVA</li>
                <li class="itemLista">Palito de churrasco</li>
                <li class="itemLista">Papel/placas</li>
                <li class="itemLista">Bolas de Isopor</li>
                <li class="itemLista">Adesivos</li>
                <li class="itemLista">Cola quente</li>
                <li class="itemLista">Tesoura/estilete</li>
                <li class="itemLista">Tinta</li>
                <li class="itemLista">Papel Machê</li>                                     
            </ol>
        </div>
    </div>
    <div class="background-gif-materiais"></div>`;

const biomarket = `
    <div class="overlay"></div>
    <div class="sobre_grupo">
        <div class="head">
            <h1>Biomaket</h1>
        </div>
        <div class="body">
            <p>Foto da Nossa Bio-maket: </p>
            <br/>
            <img src="imgs/Prototipo.jpg" alt="Prototipo" id="prototipo" alt="Foto da Bio-maket"> 
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
            await Sessoes();
            break;
        case "Biomaket":
            pagina.innerHTML = biomarket;
            const sessoes = document.querySelectorAll(".sessao");
            sessoes[2].style.fontWeight = "bold";
            sessoes[2].style.backgroundColor = "#FF3F33";
            await Sessoes();
            break;
        case "Materiais":
            pagina.innerHTML = materiais;
            await Sessoes();
            break;
        default:
            pagina.innerHTML = inicial
            document.querySelector(".sessao").style.fontWeight = "bold";
            document.querySelector(".sessao").style.backgroundColor = "#FF3F33";
            await Sessoes();
            break;
    }
}

const pagina = document.getElementById("conteudoPagina");

document.addEventListener("DOMContentLoaded", async () => {
    await Roteamento("", pagina); 
    await Sessoes();
})
