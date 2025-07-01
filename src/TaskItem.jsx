// src/TaskItem.jsx

// Este componente recebe um único objeto 'tarefa' via props.
function TaskItem(props) {
  // Verificamos se a tarefa está concluída para adicionar uma classe CSS específica.
  const itemClassName = `task-item ${props.tarefa.concluida ? 'completed' : ''}`;

  return (
    <li className={itemClassName}>
      <span>{props.tarefa.texto}</span>
      {/* Os botões de ação virão aqui depois */}
    </li>
  );
}

export default TaskItem;