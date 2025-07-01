
import { useState } from 'react';

// Este componente vai receber uma função do seu pai (App) através das props.
function TaskForm(props) {
  // Eu crio um estado LOCAL apenas para este componente.
  // A única responsabilidade dele é controlar o que está sendo digitado no input.
  const [texto, setTexto] = useState('');

  // Esta função é chamada toda vez que o formulário é enviado.
  function handleSubmit(event) {
    // 1. Previne o comportamento padrão do formulário de recarregar a página.
    event.preventDefault();

    // 2. Verifica se o usuário de fato digitou algo.
    if (texto.trim() === '') {
      alert("Você não pode adicionar uma tarefa vazia!");
      return; 
    }

    // 3. Chama a função que foi passada pelo componente App via props,
    //    enviando o texto do input como argumento para o App.
    props.onAdicionarTarefa(texto);

    // 4. Limpa o campo de input após a tarefa ser adicionada.
    setTexto('');
  }

  return (
    // Ao submeter o formulário (seja por clique ou Enter), eu chamo a função handleSubmit.
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Adicionar uma nova tarefa..."
        // CONCEITO: Componente Controlado
        // O valor exibido no input está sempre "amarrado" à nossa variável de estado 'texto'.
        value={texto}
        // Sempre que o usuário digita uma letra, o evento onChange é disparado.
        // Eu pego o novo valor do campo (event.target.value) e atualizo o meu estado.
        // Isso causa uma re-renderização do componente, atualizando o valor no input.
        onChange={(event) => setTexto(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;