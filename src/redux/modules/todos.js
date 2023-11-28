// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    content: "내용1",
    isDone: false,
  },  {
    id: shortid.generate(),
    title: "제목2",
    content: "내용2",
    isDone: false,
  },  {
    id: shortid.generate(),
    title: "제목3",
    content: "내용3",
    isDone: true,
  },
];

//Todo추가
const ADD_TODO = "todos/ADD_TODO";
//Todo삭제
const DELETE_TODO = "todos/DELETE_TODO";
//Todo수정
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload) =>{
  return {type : ADD_TODO , payload}
};
export const deleteTodo = (payload) =>{
  return {type : DELETE_TODO , payload}
};
export const switchTodo = (payload) =>{
  return {type : SWITCH_TODO , payload}
};


// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
    const newTodoList = action.payload;
    return [newTodoList, ...state]
    case "DELETE_TODO":
    const todosId = action.payload;
      return state.filter(todos => todos.id!== todosId); 
    case "SWITCH_TODO":
      const {id,isDone} = action.payload;
      return state.map(todos =>{
        if(todos.id ===id){
          return {...todos, isDone : !isDone};
        }
      })
    default:
      return state;
  }
};

export default todos;
