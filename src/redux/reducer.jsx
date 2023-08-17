const initState = {
   filter: {
      search: '', // giá trị input để filter
      status: 'All', // trạng thái hiện tại của todo gồm All - Completed -To do
      priority: [], //  độ ưu tiên
   },
   todoList: [
      {
         id: 1,
         name: 'Learn Yoga', // việc cần làm
         completed: false, // đã hoàn thành hay chưa boolean
         priority: 'Medium', // độ ưu tiên
      },
      { id: 2, name: 'Learn Redux', completed: true, priority: 'High' },
      { id: 3, name: 'Learn JavaScript', completed: false, priority: 'Low' },
   ],
};
const rootReducer = (state = initState, action) => {
   switch (action.type) {
      case 'todoList/addTodo': {
         return {
            ...state,
            todoList: [
               ...state.todoList, //
               action.payload,
            ],
         };
      }
      case 'filters/searchFilterChange': {
         return {
            ...state,
            filter: { ...state.filter, search: action.payload },
         };
      }
      default:
         return state;
   }
};
export default rootReducer;
