/*
  OBJETIVO DESTE COMPONENTE:
  Este é o componente principal, o "cérebro" da nossa aplicação.
  - Ele é o dono do estado principal: a lista de tarefas.
  - Ele contém todas as funções que modificam essa lista (adicionar, alternar, deletar).
  - Ele organiza a exibição dos outros componentes e distribui os dados e as funções para eles.
*/

// Eu importo o 'useState' do React para poder criar e gerenciar o estado.
import { useState } from 'react';

// Eu importo os estilos e os outros componentes que vou usar.
import './App.css';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';

// Esta é a definição do meu componente principal.
function App() {
  // 'useState' é chamado para criar a "memória" do meu componente.
  // 'tarefas' é a variável que guarda o array com os dados.
  // 'setTarefas' é a única função que eu devo usar para atualizar esse array.
  // Eu passo um array inicial de exemplo para o useState.
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar os fundamentos do React', concluida: true },
    { id: 2, texto: 'Criar meu primeiro projeto com Vite', concluida: true },
    { id: 3, texto: 'Entender props e state', concluida: false },
  ]);

  // Esta função recebe o texto de uma nova tarefa.
  function adicionarTarefa(textoDaTarefa) {
    // Eu crio um novo objeto para representar a nova tarefa.
    const novaTarefa = {
      id: Date.now(),      // Uso o tempo atual como um ID simples e único.
      texto: textoDaTarefa,
      concluida: false     // Toda nova tarefa começa como não concluída.
    };
    // Eu atualizo o estado. A regra é: nunca modificar o array antigo.
    // Eu crio um NOVO array, copiando todos os itens antigos (...tarefas)
    // e adicionando o novo item no final.
    setTarefas([...tarefas, novaTarefa]);
  }

  // Esta função recebe o ID da tarefa que deve ser marcada/desmarcada.
  function alternarEstadoTarefa(id) {
    // Eu uso '.map()' para percorrer o array de tarefas e criar um NOVO array modificado.
    const novasTarefas = tarefas.map(tarefa => {
      // Eu verifico se a tarefa atual é a que eu quero modificar.
      if (tarefa.id === id) {
        // Se for, eu retorno um NOVO objeto, copiando as propriedades antigas (...tarefa)
        // e sobrescrevendo a propriedade 'concluida' com o valor invertido (!tarefa.concluida).
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      // Se não for a tarefa que eu quero mudar, eu apenas a retorno como ela é.
      return tarefa;
    });
    // Eu atualizo o estado com este novo array que criei.
    setTarefas(novasTarefas);
  }

  // Esta função recebe o ID da tarefa que deve ser deletada.
  function deletarTarefa(id) {
    // Eu uso '.filter()' para criar um NOVO array.
    // Ele vai conter apenas as tarefas que "passarem no teste".
    // O teste é 'tarefa.id !== id', ou seja, mantenha todas as tarefas cujo ID NÃO SEJA o que eu quero deletar.
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    // Eu atualizo o estado com este novo array menor.
    setTarefas(novasTarefas);
  }

  // O 'return' descreve o que o componente vai renderizar na tela.
  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      
      {/* Eu renderizo o formulário e passo a função 'adicionarTarefa' como uma prop. */}
      {/* Isso permite que o TaskForm "chame" a função do App. */}
      <TaskForm onAdicionarTarefa={adicionarTarefa} />

      {/* Eu renderizo a lista e passo os dados e as funções de lógica como props. */}
      <TaskList 
        tarefas={tarefas} 
        onAlternarEstado={alternarEstadoTarefa}
        onDeletar={deletarTarefa}
      />
    </div>
  )
}

// Eu exporto meu componente App para que ele possa ser usado pelo 'main.jsx'.
export default App;