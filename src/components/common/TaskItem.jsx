import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, markComplete, markInComplete } from "../../redux/actions";

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

            <li key={props.keyItem}>
              <span className={props.completed ? "pd-completed" : ""}> {props.name} </span> 

                <div>
                    <button onClick={()=>markAsComplete(props.keyItem)}>Completed</button>
                    <button onClick={()=>markAsInComplete(props.keyItem)}>Incompleted</button>
                    <button onClick={()=>removeTask(props.keyItem)}>Delete</button>
                </div>
            </li>
        </>
    )
}