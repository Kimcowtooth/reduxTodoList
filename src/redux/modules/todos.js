const initialState =  [
	{
		id: 아이디1,
		title: 제목1,
		contents: 내용1,
		isDone: true
	}, {
		id: 아이디2,
		title: 제목2,
		contents: 내용2,
		isDone: true
	}, {
		id: 아이디3,
		title: 제목3,
		contents: 내용3,
		isDone: false
	},
    
]
//추가
const ADD_TODO = "todos/ADD_TODO";
//삭제
const DELETE_TODO = "todos/DELETE_TODO";
//완료/취소
const SWITCH_TODO = "todos/SWITCH_TODO";

export const addTodo = (payload)=>{
    return {type:ADD_TODO,payload}
}
export const deleteTodo = (payload)=>{
    return {type:DELETE_TODO,payload}
}
export const switichTodo = (payload)=>{
    return {type:SWITCH_TODO,payload}
}


const todos = (state=initialState , action) =>{
    switch(action.type){
        case ADD_TODO : 
            const newTodo = action.payload;
            return [newTodo,...state]
        case DELETE_TODO : 
            const todoId = action.payload;
            return state.filter(todos => todoId !== todoId);
        case SWITCH_TODO :
            const {isDone} = action.payload;
            return state.map(todos => {
                if(todos.isDone ===true){
                    return [...state]
                }if(todos.isDone===false){
                    return [...state]
                }
            })
        default : 
            return state;
    }
}

export default todos