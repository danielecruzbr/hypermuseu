// Esse arquivo contém a lógica.

/* Declara uma função chamada pesquisar.
Ao clicar em "Buscar", a função pesquisar() é chamada.
O loop for...of itera sobre os resultados da pesquisa.
Para cada resultado, um novo elemento HTML é criado (uma div com as classes e conteúdos necessários).
O HTML gerado para todos os resultados é concatenado em uma única string.
Essa string é atribuída à propriedade innerHTML da seção "resultados-pesquisa", substituindo o conteúdo anterior.*/
function pesquisar() {

// Essa linha busca no documento HTML(document) um elemento com o ID "resultados-pesquisa"(getElementById("")) e armazena-o na variável section (criada pelo let).
let section = document.getElementById("resultados-pesquisa")
// Busca o elemento HTML com o ID "campo-pesquisa" e armazena o valor que o usuário digitou nesse campo na variável campoPesquisa.
let campoPesquisa = document.getElementById("campo-pesquisa").value

// A condição if (campoPesquisa === "") verifica se o valor do campo de pesquisa está vazio. Se estiver, o código dentro do bloco if será executado.
if (campoPesquisa == "") {
    // Atribui o HTML com a mensagem de erro ao conteúdo da seção.
    section.innerHTML = "<p>Nenhum conteúdo encontrado.</p>";
        // encerrar função
        return
    }

//* Exibe no console do navegador o objeto section (opcional).
console.log(section,campoPesquisa);

//campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados.
let resultados = "";
//let titulo = "";

//  Essa variável é inicializada com 0 e incrementada a cada resultado encontrado
let resultadosEncontrados = 0;

// Este é um loop for...of que itera sobre um conjunto de dados (representado pela variável dados). A cada iteração, a variável dado receberá um elemento desse conjunto.
for (let dado of dados) {
    //titulo = dado.titulo.toLowerCase()
    //condicional, se o título includes campoPesquisa
    if(dado.titulo.includes(campoPesquisa)){
        // Cria um novo elemento html para cada resultado.
    resultados += `
    <div class="item-resultado">
        <h3>
            <a href=${dado.link} target="_blank">${dado.titulo}</a>
        </h3>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Saiba mais.</a>
    </div>
`;
    // Incrementa a contagem de resultados
    resultadosEncontrados++; 
    }  
}

// Verifica se algum resultado foi encontrado
if (resultadosEncontrados === 0) {
    section.innerHTML = `<p>Nenhum resultado encontrado para a pesquisa "${campoPesquisa}".</p>`;
  } else {
// Interação entre JavaScript e HTML. innerHTML permite modificar o conteúdo HTML dentro do elemento section.
section.innerHTML = resultados
  }
}