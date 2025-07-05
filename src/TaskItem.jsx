/*
  OBJETIVO DESTE COMPONENTE:
  - Representar visualmente UMA ÚNICA tarefa na lista.
  - Ele exibe o texto da tarefa e os botões de ação.
  - Ele não tem estado próprio, apenas exibe os dados que recebe via props e
    avisa seu pai (através das funções recebidas via props) quando é clicado.
*/

function TaskItem(props) {
  const itemClassName = `task-item ${props.tarefa.concluida ? 'completed' : ''}`;

  return (
    <li className={itemClassName} onClick={() => props.onAlternarEstado(props.tarefa.id)}>
      
      {/* Eu exibo o texto da tarefa. */}
      <span>{props.tarefa.texto}</span>
      
      {/* Eu crio o botão de deletar. */}
      <button 
        className="delete-button" 
        onClick={(event) => {
          event.stopPropagation();
          props.onDeletar(props.tarefa.id);
        }}
      >
        {/* Este é o símbolo 'X' que aparece no botão. */}
        &times;
      </button>
    </li>
  );
}
export default TaskItem;