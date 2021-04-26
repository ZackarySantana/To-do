<script>
  import { collectionData } from "rxfire/firestore";
  import { startWith, map } from "rxjs/operators";
  import { notifier } from "@beyonk/svelte-notifications";

  import TodoItem from "./TodoItem.svelte";
  import { db } from "../../firebase/firebase";

  export let uid;

  let text = "";
  let amount = 0;
  let inputField;

  const query = db.collection("todos/" + uid + "/documents").orderBy("created");

  const todos = collectionData(query, "id").pipe(
    map((x) => {
      amount = x.length;
      return x;
    }),
    startWith([])
  );

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

    db.collection("todos/" + uid + "/documents").add({
      uid,
      text,
      complete: false,
      created: Date.now(),
    });
    text = "";
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos/" + uid + "/documents")
      .doc(id)
      .update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos/" + uid + "/documents")
      .doc(id)
      .delete();
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
    {#each $todos as todo}
      <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
    {/each}
  </ul>

  <input
    bind:value={text}
    bind:this={inputField}
    on:keydown={testEnter}
    placeholder="To-do item here"
  />
  <button on:click={add}>Add Task</button>
  <button on:click={add}> Add Task </button>
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
