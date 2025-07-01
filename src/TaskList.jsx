/*
  OBJETIVO DESTE COMPONENTE:
  - Sua única responsabilidade é receber uma lista de tarefas (via props)
    e renderizar um componente <TaskItem> para cada uma delas.
  - Ele não tem lógica própria, apenas distribui os dados e as funções para seus filhos.
*/

import TaskItem from './TaskItem.jsx';

// Ele recebe 'tarefas', 'onAlternarEstado' e 'onDeletar' do App via props.
function TaskList(props) {
  return (
    <ul className="task-list">
      {/* Eu uso .map() para percorrer o array 'props.tarefas'. */}
      {props.tarefas.map(tarefa => (
        // Para cada objeto 'tarefa' no array, eu crio um componente <TaskItem>.
        <TaskItem 
          // A 'key' é uma prop especial para o React otimizar a lista. Deve ser única.
          key={tarefa.id} 
          // Eu passo o objeto 'tarefa' inteiro para o TaskItem.
          tarefa={tarefa}
          // Eu repasso as funções que recebi do App para o TaskItem.
          onAlternarEstado={props.onAlternarEstado}
          onDeletar={props.onDeletar}
        />
      ))}
    </ul>
  );
}

export default TaskList;