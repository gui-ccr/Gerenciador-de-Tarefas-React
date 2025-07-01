/*
  OBJETIVO DESTE COMPONENTE:
  - Ser um formulário autocontido para adicionar novas tarefas.
  - Ele tem seu próprio estado interno para controlar o que o usuário está digitando.
  - Quando o formulário é enviado, ele não adiciona a tarefa sozinho. Em vez disso,
    ele "avisa" o componente pai (App) sobre a nova tarefa, passando o texto para ele.
*/

import { useState } from 'react';

// O componente recebe 'onAdicionarTarefa' como uma prop do App.
function TaskForm(props) {
  // Este estado 'texto' só existe aqui dentro. Serve para controlar o input.
  const [texto, setTexto] = useState('');

  // Esta função é executada quando o usuário envia o formulário.
  function handleSubmit(event) {
    // Impede que o navegador recarregue a página (comportamento padrão de um form).
    event.preventDefault();

    // Validação para não adicionar tarefas vazias.
    if (texto.trim() === '') return;

    // Eu chamo a função que recebi via props, passando o texto atual do meu estado interno.
    props.onAdicionarTarefa(texto);

    // Eu limpo o meu estado local, e por consequência, o campo de input na tela.
    setTexto('');
  }

  return (
    // O evento onSubmit do formulário está ligado à minha função handleSubmit.
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicionar uma nova tarefa..."
        // O valor do input é sempre um reflexo do meu estado 'texto'.
        value={texto}
        // Cada vez que o usuário digita, o evento onChange atualiza meu estado 'texto'.
        // Isso é o que chamamos de "Componente Controlado".
        onChange={(event) => setTexto(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;