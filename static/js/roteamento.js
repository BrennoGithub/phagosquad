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
        <h1>Conheça a <strong>Phagosquad</strong></h1>
        <p> 
            A <strong>Phagosquad</strong> é o grupo que apresentará o trabalho sobre a relação entre
            Leucócitos, Endocitose e Diapedese. Somos do Info 3V do campus Parnamirim e ficamos com a responsabilidade
            de produzir uma <a href="/templates/biomaket.html">Bio-maket</a> e este lindíssimo site.
        </p>
    </div>`;

    const materiais = `
    <div>
        <h1>Materiais</h1>
        <p> Lista de materiais aqui </p>
    </div>`;

    const biomarket = `
    <div>
        <h1>Bio-Maket</h1>
        <p>Sobre a Bio-Maket + Foto dela</p>
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