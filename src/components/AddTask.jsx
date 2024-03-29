import React, { useState } from "react";
import { UiInput } from "./common/UiInput";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import { PlusIcon } from "../styles/icons/PlusIcon";

export const AddTask = () => {
    const [newTask, setNewTask] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = (text) => {
        dispatch(addTask(text));
    }


    const addHandleTask = () => {
        if (newTask.trim() !== "") {
            handleAddTask(newTask.trim());
            setNewTask("");
        }
    }


    return (
        <>
            <div className="pd-add-task">
                <UiInput  className="pd-add-task__input" placeholder="Add a new task here..." value={newTask} onChange={e => setNewTask(e.target.value)}  />
                <Button onClick={addHandleTask}><PlusIcon/> Add</Button>
            </div>
        </>
    )
}