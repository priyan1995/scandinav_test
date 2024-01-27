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

    // console.log(filteredTasks);


    return (
        <>
            <div className="pd-all-tasks">
                {
                    filteredTasks.map((task, index) => (
                        <>
                            <TaskItem keyItem={index} name={task.text} completed={task.completed} />
                        </>
                    ))
                }
            </div>
        </>
    )
}