import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, markComplete, markInComplete } from "../../redux/actions";
import { TrashIcon } from "../../styles/icons/TrashIcon";

export const TaskItem = (props) => {

    // console.log(props)

    const dispatch = useDispatch();

    const markAsComplete = (e) => {
        //console.log(e)
        dispatch(markComplete(e))
    }

    const markAsInComplete = (e) => {
        //  console.log(e)
        dispatch(markInComplete(e))
    }

    const removeTask = (e) => {
        console.log(e)
        dispatch(deleteTask(e))
    }

    return (
        <>
            <div className="pd-task-item">
                <div className="pd-task-item__card" key={props.keyItem}>
                    <span className={props.completed ? "pd-completed" : ""}> {props.keyItem + 1}. {props.name} </span>

                    <div className="pd-task-item__button-wrapper">
                        <button onClick={() => markAsComplete(props.keyItem)}>Completed</button>
                        <button onClick={() => markAsInComplete(props.keyItem)}>Incompleted</button>
                        <button onClick={() => removeTask(props.keyItem)} className="pd-trash"><TrashIcon/></button>
                    </div>
                </div>
            </div>
        </>
    )
}