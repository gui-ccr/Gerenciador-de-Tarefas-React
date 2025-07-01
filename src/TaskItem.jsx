// src/TaskItem.jsx

function TaskItem(props) {
  // A lógica para a classe CSS continua a mesma.
  const itemClassName = `task-item ${props.tarefa.concluida ? 'completed' : ''}`;

  return (
    // Adicionamos o evento onClick diretamente no elemento <li>
    // Quando clicado, ele chama uma função de seta que, por sua vez,
    // executa a função que veio do App, passando o ID desta tarefa específica.
    <li className={itemClassName} onClick={() => props.onAlternarEstado(props.tarefa.id)}>
      <span>{props.tarefa.texto}</span>
      {/* Os botões de deletar virão aqui depois */}
    </li>
  );
}

export default TaskItem;