<script>
  import { notifier } from "@beyonk/svelte-notifications";

  import TodoItem from "./TodoItem.svelte";
  import { getItems, is_addItem, removeItem } from "../ItemStorage";
  import App from "../App.svelte";
  import Home from "./Home.svelte";

  let text = "";
  let amount = 0;
  let inputField;

  let todosPromise = getItems();
  $: todos = [];

  todosPromise.then((todosResult) => {
    let tempTodos = [];
    todosResult.forEach((todo) => {
      tempTodos.push({
        text: todo.data().text,
        id: todo.id,
        complete: todo.data().complete,
      });
    });
    console.log("----------------------------------------");
    console.log(tempTodos);
    todos = tempTodos;
  });

  function add() {
    inputField.focus();

    if (amount >= 5) {
      notifier.danger("You are only allowed 5 todo list items");
      return;
    }
    if (text == "") {
      notifier.warning("You cannot add an empty string to your todo list");
      return;
    }

    is_addItem(text);
    todos.push({
      text,
      complete: false,
      created: Date.now(),
    });
    todos = todos;
    text = "";
  }

  function remove(id) {
    removeItem(id.detail.id);
    const index = todos.map((todo) => todo.id).indexOf(id.detail.id);
    if (index > -1) {
      todos.splice(index, 1);
      todos = todos;
      console.log(todos);
    }
  }

  function testEnter(event) {
    if (event.code == "Enter") {
      add();
    }
  }
</script>

<section>
  <h1>To-do List</h1>
  <ul>
    {#await todosPromise then t}
      {#each todos as todo}
        <TodoItem {...todo} on:remove={remove} />
      {/each}
    {/await}
  </ul>

  <input
    bind:value={text}
    bind:this={inputField}
    on:keydown={testEnter}
    placeholder="To-do item here"
  />
  <button on:click={add}>Add Task</button>
</section>

<style>
  section {
    background: var(--background);
    width: 70vw;
    height: calc(100vh - 2em);
    margin: 1em;

    filter: drop-shadow(var(--section_shadow));
    border-radius: 100px;

    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input {
    margin-top: auto;
    max-width: 80vw;
    color: var(--primary);
  }

  button {
    margin: 1em 0;
  }

  ul {
    list-style: none;
    text-align: right;
    min-width: 40vw;
  }

  @media only screen and (max-width: 1200px) {
    section {
      width: 95vw;
      min-height: 100vh;
      height: fit-content;
    }
  }
</style>
