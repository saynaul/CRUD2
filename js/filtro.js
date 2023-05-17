const btnBuscarProduto = document.getElementById("buscarProduto");
btnBuscarProduto.addEventListener("click", function() {
    const filtro = document.getElementById("filtro").value.toUpperCase();
    const tabela = document.getElementById("tableClient");
    const linhas = tabela.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        const colunas = linhas[i].getElementsByTagName("td");
        let encontrou = false;
        for (let j = 0; j < colunas.length; j++) {
            const textoColuna = colunas[j].textContent.toUpperCase();
            if (textoColuna.indexOf(filtro) > -1) {
                encontrou = true;
                break;
            }
        }
        if (encontrou) {
            linhas[i].style.display = "";
        } else {
            linhas[i].style.display = "none";
        }
    }
});
