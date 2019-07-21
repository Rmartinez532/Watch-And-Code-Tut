// const todos = ['item 1', 'item 2', 'item 3'];
//
// function displayTodos() {
//   console.log(`My Todos: ${todos}`);
// }
//
// function addTodo() {
//   todos.push('new todo');
// }

var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos: ', this.todos);
  }
};
