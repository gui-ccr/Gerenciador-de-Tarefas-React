// src/TaskList.jsx

import TaskItem from './TaskItem.jsx'; // Importamos o componente para um único item

function TaskList(props) {
  return (
    <ul className="task-list">
        {props.tarefas.map(tarefa => (
            <TaskItem 
            key={tarefa.id}
            tarefa={tarefa}
            onAlternarEstado={props.onAlternarEstado}
            />
        ))}
    </ul>
  );
}

export default TaskList;