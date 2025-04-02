<template>
    <div class="app">
      <todo-list title="Todo List">
        <Draggable v-model="todos"
        group="todosapp">   
          <template #item="{ element }">
            <todo-item :key="element.id" :item="element" />
          </template>
        </Draggable>
      </todo-list>
  
      <todo-list title="In Progress">
        <Draggable v-model="inProgress"
        group="todosapp">
          <template #item="{ element }">
            <todo-item :key="element.id" :item="element" />
          </template>
        </Draggable>
      </todo-list>
  
      <todo-list title="Completed"
      group="todosapp">
        <Draggable v-model="completed">
          <template #item="{ element }">
            <todo-item :key="element.id" :item="element" />
          </template>
        </Draggable>
      </todo-list>
    </div>
  </template>
  
  <script>
  import TodoList from './components/TodoList.vue';
  import TodoItem from './components/TodoItem.vue';
  import Draggable from 'vuedraggable';  
  export default {
    data() {
      return {
        todos: [
          { id: 1, todo: 'Read' },
          { id: 2, todo: 'YouTube' },
          { id: 3, todo: 'Instagram' }
        ],
        inProgress: [{ id: 2, todo: 'Learn' }],
        completed: [{ id: 3, todo: 'Watch' }]
      };
    },
    components: {
      TodoList,
      TodoItem,
      Draggable  
    }
  };
  </script>
  
  <style>
  .app {
    display: flex;
    justify-content: center;
    margin: 50px 0;
  }
  </style>
  