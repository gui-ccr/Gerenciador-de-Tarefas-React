// src/TaskList.jsx

import TaskItem from './TaskItem.jsx'; // Importamos o componente para um único item

function TaskList(props) {
  return (
    <ul className="task-list">
      {/* Usamos .map() para transformar cada objeto do array em um componente <TaskItem /> */}
      {props.tarefas.map(tarefa => (
        // React exige uma 'key' única para cada item de uma lista para otimização.
        // Nosso 'tarefa.id' é perfeito para isso.
        // Também passamos o objeto 'tarefa' inteiro como uma prop para o TaskItem.
        <TaskItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default TaskList;