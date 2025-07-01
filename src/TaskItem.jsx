/*
  OBJETIVO DESTE COMPONENTE:
  - Representar visualmente UMA ÚNICA tarefa na lista.
  - Ele exibe o texto da tarefa e os botões de ação.
  - Ele não tem estado próprio, apenas exibe os dados que recebe via props e
    avisa seu pai (através das funções recebidas via props) quando é clicado.
*/

// Ele recebe um objeto 'tarefa' e as duas funções de ação via props.
function TaskItem(props) {
  // Eu crio uma string para as classes CSS. Se a tarefa estiver concluída,
  // a classe 'completed' é adicionada.
  const itemClassName = `task-item ${props.tarefa.concluida ? 'completed' : ''}`;

  return (
    // O evento onClick no <li> inteiro chama a função para alternar o estado.
    // Eu passo o ID da MINHA tarefa para que o App saiba qual alterar.
    <li className={itemClassName} onClick={() => props.onAlternarEstado(props.tarefa.id)}>
      
      {/* Eu exibo o texto da tarefa. */}
      <span>{props.tarefa.texto}</span>
      
      {/* Eu crio o botão de deletar. */}
      <button 
        className="delete-button" 
        // O onClick DESTE BOTÃO chama a função para deletar.
        onClick={(event) => {
          // 'event.stopPropagation()' impede que o clique "vaze" para o <li> pai.
          // Sem isso, clicar em deletar também marcaria a tarefa como concluída.
          event.stopPropagation();
          // Eu chamo a função de deletar, passando o ID da MINHA tarefa.
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