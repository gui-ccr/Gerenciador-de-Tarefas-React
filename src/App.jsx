// src/App.jsx

import { useState } from 'react';
import './App.css';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx'; // 1. Importamos nosso novo componente.

function App() {
  // O nosso estado principal continua aqui.
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar os fundamentos do React', concluida: true },
    { id: 2, texto: 'Criar meu primeiro projeto com Vite', concluida: true },
    { id: 3, texto: 'Entender props e state', concluida: false },
  ]);

  // 2. Criamos a função que sabe como adicionar uma nova tarefa ao estado.
  function adicionarTarefa(textoDaTarefa) {
    // Eu crio um objeto para a nova tarefa.
    // Uso Date.now() para gerar um ID "único" de forma simples.
    const novaTarefa = {
      id: Date.now(),
      texto: textoDaTarefa,
      concluida: false
    };

    // CONCEITO: Imutabilidade. Eu nunca mudo o estado diretamente.
    // Eu crio um NOVO array, copiando todos os itens do array antigo (...tarefas)
    // e adicionando o novo item no final.
    setTarefas([...tarefas, novaTarefa]);
  }

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      
      {/* 3. Eu renderizo o TaskForm e passo a função 'adicionarTarefa' como uma prop. */}
      <TaskForm onAdicionarTarefa={adicionarTarefa} />

      <TaskList tarefas={tarefas} />
    </div>
  )
}

export default App;