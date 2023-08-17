const initState = [
   { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
   { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
   { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
];

const todoListsReducer = (state = initState, action) => {
   switch (action.type) {
      case 'todoList/addTodo': {
         return [...state.todoList, action.payload];
      }
      default:
         return state;
   }
};
export default todoListsReducer;