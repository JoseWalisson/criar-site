const link = document.querySelector("#chamada img");

function recarregarPagina() {
    location.reload();
}

link.addEventListener("click", recarregarPagina);