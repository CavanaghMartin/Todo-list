import { ADD_TODO, COMPLETE_TODO, CLEAR_TODO } from './task.action';

const initialState = {
    completedTasks: [],
    pendingTasks: []
}
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:
            return {
                ...state,
                pendingTasks: [action.payload, ...state.pendingTasks]
            };
        case COMPLETE_TODO:
            return {
                pendingTasks:action.payload.filteredPending,
                completedTasks: action.payload.completedTasks,
            };
        case CLEAR_TODO:
            console.log(action.payload)
            return {
                ...state,
                completedTasks: action.payload
            }


        default:
            return state
    }
}
export default tasksReducer;
