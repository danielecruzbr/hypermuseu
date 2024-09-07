## **## Hypermuseu: Uma Biblioteca Digital de Arte Brasileira**

### **Descrição**

O Hypermuseu é uma aplicação web que permite a busca por artistas brasileiros em um acervo digital. O usuário pode digitar o nome de um artista no campo de pesquisa e obter informações como biografia, obras e links para fontes confiáveis.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura básica das páginas da web, definindo elementos como cabeçalhos, parágrafos e seções.
* **CSS:** Responsável pelo estilo visual da aplicação, definindo cores, fontes, layout e responsividade.
* **JavaScript:** Linguagem de programação utilizada para criar a interatividade da aplicação, como a função de pesquisa e a manipulação do DOM (Document Object Model).

### **Como Funciona**

1. **Interface do Usuário:** O usuário interage com a aplicação através de um campo de pesquisa e um botão "Buscar".
2. **Busca:** Ao clicar em "Buscar", a função `pesquisar()` é acionada. Essa função:
   * Captura o texto digitado no campo de pesquisa.
   * Itera sobre um conjunto de dados (armazenado em `dados.js`) que contém informações sobre cada artista.
   * Verifica se o nome do artista digitado está presente no título de cada item do conjunto de dados.
   * Se houver correspondência, cria um elemento HTML para exibir as informações do artista (título, descrição e link).
   * Adiciona os elementos HTML criados à seção de resultados.
3. **Exibição dos Resultados:** Os resultados da pesquisa são exibidos na tela em uma lista formatada. Cada item da lista contém o título da obra, uma breve descrição e um link para obter mais informações.

### **Estrutura do Projeto**

* **index.html:** Arquivo principal da aplicação, responsável pela estrutura HTML da página.
* **style.css:** Arquivo que contém as regras de estilo CSS para a aplicação.
* **app.js:** Arquivo que contém a lógica JavaScript da aplicação, incluindo a função de pesquisa.
* **dados.js:** Arquivo que contém os dados dos artistas, como nome, descrição, influências e links.

### **Como Usar**

1. **Clonar o repositório:** Use o Git para clonar este repositório em sua máquina local.
2. **Abrir o arquivo index.html:** Abra o arquivo `index.html` em um navegador web.
3. **Realizar uma pesquisa:** Digite o nome de um artista no campo de pesquisa e clique em "Buscar".

### **Contribuições**

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, por favor, abra um issue ou faça um pull request.

### **Próximos Passos**

* **Expandir o acervo:** Adicionar mais artistas e informações sobre suas obras.
* **Implementar filtros:** Permitir que o usuário filtre os resultados por período, estilo ou outras características.
* **Melhorar a interface:** Criar uma interface mais intuitiva e visualmente atraente.
* **Utilizar uma biblioteca de busca:** Implementar uma biblioteca de busca mais sofisticada para melhorar a performance e a experiência do usuário.

**Observação:** Este é um projeto em desenvolvimento e está sujeito a mudanças.

**Agradecimentos:** Agradeço à Imersão Dev com Gemini pela oportunidade de aprender e desenvolver este projeto.

**Autor:** Daniele Cruz

**Tecnologias:** HTML, CSS, JavaScript

**Data:** [07/09/2024]
