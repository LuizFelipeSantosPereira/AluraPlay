import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";
console.log("teste")


async function pesquisarVideos(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscaVideo(dadosPesquisa)

    const lista = document.querySelector("[data-lista]")

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    console.table(busca)

    busca.forEach(elemento=>lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    if(busca.lenght==0){
        lista.innerHTML=`<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]")
botaoPesquisa.addEventListener("click", evento => pesquisarVideos(evento))