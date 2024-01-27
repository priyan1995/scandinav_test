import { Tasks } from "../components/data/mockData";
import { ADD_TASK, DELETE_TASK, FILTER_TASK, MARK_COMPLETED, MARK_INCOMPLETED } from "./actionTypes";

const initialState = {
    tasks: Tasks,
    filter: "ALL"
}

console.log(Tasks);

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, { text: action.payload.text, completed: false }],
                filter: state.filter
            }

        case DELETE_TASK:
            return {
                tasks: state.tasks.filter((tasks, index) => index !== action.payload.id),
                filter: state.filter
            }

        case MARK_COMPLETED:
            return {
                tasks: state.tasks.map((tasks, index) => index == action.payload.id ? { ...tasks, completed: true } : tasks),
                filter: state.filter
            }


        case MARK_INCOMPLETED:
            return {
                tasks: state.tasks.map((tasks, index) => index == action.payload.id ? { ...tasks, completed: false } : tasks),
                filter: state.filter
            }

        case FILTER_TASK:
            return {
                tasks: state.tasks,
                filter: action.payload.filter
            }



        default:
            return state;
    }
}

export default taskReducer;