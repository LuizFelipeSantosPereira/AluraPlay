async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");//cria conexao com a API
    const conexaoCovertida = await conexao.json();//transforma no formato json
    return conexaoCovertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos",{//cria a conexão com a API
        method: "POST",//define o método da requisição post, para enviar os dados para a api
        headers:{
            "Content-type" : "application/json" //especifica o tipo do conteudo que será passado
        },
        body: JSON.stringify({//determina o conteudo 
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
    if(!conexao.ok){
        throw new Error("Não foi possível enviar o vídeo")
    }
    const conexaoCovertida = await conexao.json()//transforma no formato json
    return conexaoCovertida;
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBusca}`)//cria conexao com a API, usando o parametro para query
    const conexaoConvertida = await conexao.json()//transforma no formato json

    return conexaoConvertida
}

export const conectaAPI = {//define as funções que podem ser exportadas
    listaVideos,
    criaVideo,
    buscaVideo
}

