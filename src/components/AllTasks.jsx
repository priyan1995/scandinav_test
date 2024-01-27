import React from "react";
import { useSelector } from "react-redux";
import { TaskItem } from "./common/TaskItem";

export const AllTasks = () => {


    const filteredTasks = useSelector((state) => {
        const tasks = state.tasks;
        const filter = state.filter;

        return tasks.filter((tasks) => {
            const matchesFilter = (filter === "COMPLETED" && tasks.completed) || (filter === "INCOMPLETED" && !tasks.completed) || (filter === "ALL");

            return matchesFilter;
        })

       
    })

     console.log(filteredTasks);


    return (
        <>
            <h2>All Tasks</h2>

            <ol>
                {
                    filteredTasks.map((task, index) => (
                        // <li key={index}>{task.text}</li>
                        <>
                        <TaskItem keyItem={index} name={task.text} completed={task.completed}/>
                        </>
                    ))
                }
            </ol>
        </>
    )
}