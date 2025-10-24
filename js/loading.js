window.addEventListener("load", () => {
    // Garante que o loading dure no mínimo 1 segundo
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("conteudoPagina").classList.remove("hidden");
    }, 1150); // 1000 ms = 1 segundo
});