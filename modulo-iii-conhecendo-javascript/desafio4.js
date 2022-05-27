"use strict";
// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?
// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela
// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var apiKey = 'e1bc149bb4a45daa9fe53bb32b376d94';
let requestToken;
let username;
let password;
let sessionID;
let listID = '7101979';
let loginButton = document.getElementById('login-button');
let searchButton = document.getElementById('search-button');
let searchContainer = document.getElementById('search-container');
let list = document.getElementById('list');
/**
    ** Validação de botão Login
 */
function preencherSenha() {
    password = document.getElementById('senha').value;
    validateLoginButton();
}
function preencherLogin() {
    username = document.getElementById('login').value;
    validateLoginButton();
}
function preencherApi() {
    apiKey = document.getElementById('api-key').value;
    validateLoginButton();
}
function validateLoginButton() {
    if (password && username && apiKey) {
        loginButton.disabled = false;
    }
    else {
        loginButton.disabled = true;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
  ** HTTPClient - Classe que faz requisições HTTP
 */
class HttpClient {
    static async get({ url, method, body = null }) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url, true);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText));
                }
                else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }
            };
            request.onerror = () => {
                reject({
                    status: request.status,
                    statusText: request.statusText
                });
            };
            if (body) {
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                body = JSON.stringify(body);
            }
            request.send(body);
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * Metodos de busca de dados para Login
 */
async function criarRequestToken() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
        method: "GET"
    });
    requestToken = result.request_token;
    // console.log(`requestToken: ${result}`);
}
async function logar() {
    await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        method: "POST",
        body: {
            username: `${username}`,
            password: `${password}`,
            request_token: `${requestToken}`
        }
    });
}
async function criarSessao() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
        method: "GET"
    });
    sessionID = result.session_id;
    // console.log(`Session ID: ${sessionID}`);
}
// * Implementei um método junto ao botão de login para mostar nome do usuario e lista de filmes que irá criar.
loginButton.addEventListener('click', async () => {
    await criarRequestToken();
    await logar();
    await criarSessao();
    let div = document.createElement('div');
    div.innerHTML = `<h1>Bem vindo ${username}</h1>
    <h2>Lista de filmes</h2>
    `;
    list.appendChild(div);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function procurarFilme(query) {
    query = encodeURI(query);
    console.log(query);
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
        method: "GET"
    });
    return result;
}
searchButton.addEventListener('click', async () => {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.outerHTML = "";
    }
    let query = document.getElementById('search').value;
    let listaDeFilmes = await procurarFilme(query);
    let ul = document.createElement('ul');
    ul.id = "lista";
    for (const item of listaDeFilmes.results) {
        let li = document.createElement('li');
        let btn = document.createElement('button');
        li.appendChild(document.createTextNode(item.original_title));
        btn.appendChild(document.createTextNode('Adicionar'));
        btn.className = 'btn';
        ul.appendChild(li);
        ul.appendChild(btn);
    }
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].id = i.toString();
    }
    console.log(listaDeFilmes);
    searchContainer.appendChild(ul);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function criarLista(nomeDaLista, descricao) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionID}`,
        method: "POST",
        body: {
            name: nomeDaLista,
            description: descricao,
            language: "pt-br"
        }
    });
    console.log(result);
}
async function adicionarFilmeNaLista(filmeId, listaId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionID}`,
        method: "POST",
        body: {
            media_id: filmeId
        }
    });
    console.log(result);
}
async function adicionarFilme(filmeId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
        method: "GET"
    });
    console.log(result);
}
async function pegarLista() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listID}?api_key=${apiKey}`,
        method: "GET"
    });
    console.log(result);
}
