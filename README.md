# ✅ Gerenciador de Tarefas com React

Esta é uma aplicação web moderna de Lista de Tarefas (To-Do List) construída com **React** e **Vite**. O projeto foi desenvolvido como um exercício prático para aplicar os conceitos fundamentais do React, incluindo componentes, estado (state), propriedades (props), e o fluxo de dados unidirecional.

Esta aplicação representa a evolução do meu projeto anterior, [construído com JavaScript Puro](https://github.com/gui-ccr/Gerenciador-de-Tarefas-JS), demonstrando a progressão para uma arquitetura mais moderna e escalável.

### 🔗 Link para a Demonstração
*[Link de Acesso](https://gui-ccr.github.io/Gerenciador-de-Tarefas-React/)*

---

### ✨ Funcionalidades

* **Adicionar Tarefas:** Um formulário permite que o usuário insira novas tarefas na lista.
* **Marcar como Concluída:** Clicar em uma tarefa alterna seu estado entre "concluída" e "a fazer", aplicando um estilo visual para diferenciá-las.
* **Deletar Tarefas:** Cada tarefa possui um botão para ser removida individualmente da lista.
* **Interface Reativa:** A lista de tarefas é atualizada instantaneamente na tela sem a necessidade de recarregar a página.


### 💻 Tecnologias e Ferramentas

* **React:** Biblioteca principal para a construção da interface de usuário.
* **Vite:** Ferramenta de desenvolvimento de última geração para iniciar e servir o projeto.
* **JavaScript (ES6+):** Linguagem base para toda a lógica da aplicação.
* **CSS3:** Para estilização e design dos componentes.
* **HTML5:** Estrutura base da aplicação.

---

### 🧠 Conceitos Praticados

Este projeto foi uma imersão nos principais conceitos do ecossistema React:

* **Arquitetura de Componentes:** A interface foi quebrada em componentes reutilizáveis e com responsabilidades únicas (`App`, `TaskList`, `TaskItem`, `TaskForm`).
* **Gerenciamento de Estado com `useState`:** Utilização do hook `useState` para gerenciar dados que mudam ao longo do tempo, como a lista de tarefas e o texto do input.
* **Fluxo de Dados com `props`:** Passagem de dados (o array de tarefas) e funções (handlers de eventos) de um componente pai para componentes filhos.
* **Elevação de Estado (Lifting State Up):** Padrão utilizado para que componentes filhos (`TaskForm`, `TaskItem`) possam comunicar eventos e solicitar mudanças no estado que vive no componente pai (`App`).
* **Renderização de Listas:** Uso do método `.map()` para renderizar dinamicamente uma lista de componentes a partir de um array, com a atribuição de `keys` únicas para otimização da performance.
* **Renderização Condicional:** Aplicação de classes CSS de forma condicional (`className={condicao ? 'classe-a' : 'classe-b'}`) para alterar a aparência de um componente com base no seu estado.
* **Event Handling em React:** Uso de `onClick` e `onSubmit` para capturar interações do usuário e disparar funções de lógica.
* **Imutabilidade:** Prática de nunca modificar o estado diretamente, mas sim criar novas cópias dos dados (`...spread syntax`, `.map`, `.filter`) para garantir um fluxo de dados previsível e evitar bugs.

---

### ▶️ Como Executar Localmente

```bash
# 1. Clone este repositório
$ git clone URL_DO_SEU_REPOSITORIO_AQUI

# 2. Navegue até o diretório do projeto
$ cd gerenciador-de-tarefas-react

# 3. Instale as dependências do projeto
$ npm install

# 4. Rode o servidor de desenvolvimento
$ npm run dev

# 5. Abra http://localhost:5173/ no seu navegador
