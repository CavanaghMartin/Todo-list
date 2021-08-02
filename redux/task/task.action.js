export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const CLEAR_TODO = 'CLEAR_TODO';

export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  };
}

export function completeTodo(index) {
  return (dispatch, getState) => {
    let pendingTasks = getState().taskReducer.pendingTasks.slice()
    let completedTasks = getState().taskReducer.completedTasks.slice()
    let completeTask = pendingTasks.splice(index, 1);
    let filteredPending=pendingTasks.filter(t=>t!==completeTask[0])
    dispatch({
      type: COMPLETE_TODO,
      payload: {filteredPending,completedTasks:[...completeTask,...completedTasks]}
    });
  }
}
export function clearTodo(index) {
  return (dispatch, getState) => {
    let completedTasks = getState().taskReducer.completedTasks.slice()
    const filterCompleted=completedTasks.filter(t=>t!==completedTasks[index])
               
    dispatch({
      type: CLEAR_TODO,
      payload: filterCompleted 
    });
  }
}