function Roteamento(titulo, pagina){
    const pagina_inicial = `
    <div>
        <!-- CONTEÚDO -->
        <div class="overlay"></div>
        <div class="video-container">
            <video controls>
                <source src="/static/videos/projeto.mp4" type="video/mp4">
            </video>
        </div>

        <!-- FUNDO -->
        <div class="background-gif"></div>
    </div>`;

    const sobre = `
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <h1>Conheça a <strong><a href="#" class="sessao">Phagosquad</a></strong></h1>
            <p>
                A Phagosquad é o grupo que apresentará o trabalho sobre a relação entre
                Leucócitos, Endocitose e Diapedese. Somos do Info 3V do campus Parnamirim e ficamos com a responsabilidade
                de produzir uma <strong><a href="biomaket.html">Bio-maket</a></strong> e este lindíssimo site.
            </p>
            <br/>
                <hr>
            <br/>
            <img src="/static/imgs/leococito.png" alt="Imagem Teste">
        </div>
    </div>`;

    const materiais = `
    <div>
        <div class="overlay"></div>
        <div class="sobre_grupo">
            <h1>Lista de Materiais</h1>
            <hr>
            <p id="esquerda">
                1- Nome do material — Preço
                <br/>
                2- Nome do material — Preço
                <br/>
                3- Nome do material — Preço
                <br/>
                4- Nome do material — Preço
                <br/>
                5- Nome do material — Preço
            </p>
    </div>

    <div class="background-gif-materiais"></div>
    </div>`;

    const biomarket = `
    <div>
        <div class="overlay"></div>
    <div class="sobre_grupo">
        <h1>Bio-Maket</h1>
        <p>
            Foto da Bio-Maket aqui
        </p>
    </div>

    <div class="background-gif-bio"></div>
    </div>`;

    switch(titulo){
        case "Sobre":
            pagina.innerHTML = sobre;
            break;
        case "Biomaket":
            pagina.innerHTML = biomarket;
            break;
        case "Materiais":
            pagina.innerHTML = materiais;
            break;
        default:
            pagina.innerHTML = pagina_inicial
            break;
    }
}

const pagina = document.getElementById("conteudoPagina");

Roteamento("", pagina);

const sessoes = document.querySelectorAll(".sessao");
sessoes.forEach( topico => {
    topico.addEventListener("click", function(){
        const titulo = topico.textContent;
        Roteamento(titulo, pagina);
    });
});