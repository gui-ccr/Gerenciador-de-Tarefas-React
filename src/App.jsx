// src/App.jsx

import { useState } from 'react';
import './App.css';
import TaskList from './TaskList.jsx'; // Estamos importando um componente que vamos criar a seguir

function App() {
  // Usamos useState para criar nossa "fonte da verdade".
  // 'tarefas' é o nosso array de dados.
  // 'setTarefas' é a função que usaremos DEPOIS para modificar esses dados.
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar os fundamentos do React', concluida: true },
    { id: 2, texto: 'Criar meu primeiro projeto com Vite', concluida: true },
    { id: 3, texto: 'Aprender sobre Componentes, Props e State', concluida: false }
  ]);

  return (
    <div className="app-container">
      <h1>Gerenciador de Tarefas</h1>
      
      {/* Aqui, passamos o nosso array 'tarefas' como uma prop para o componente TaskList */}
      <TaskList tarefas={tarefas} />
    </div>
  )
}

export default App;