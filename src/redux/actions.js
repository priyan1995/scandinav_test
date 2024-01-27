import { ADD_TASK, DELETE_TASK, FILTER_TASK, MARK_COMPLETED, MARK_INCOMPLETED } from "./actionTypes"

export const addTask = (text) => ({
    type: ADD_TASK,
    payload: {text}
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
});

export const markComplete = (id) => ({
    type: MARK_COMPLETED,
    payload: {id}
});

export const markInComplete = (id) => ({
    type: MARK_INCOMPLETED,
    payload: {id}
});

export const filterTasks = (filter) => ({
    type: FILTER_TASK,
    payload: {filter}
});