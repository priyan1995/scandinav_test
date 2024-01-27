import React from "react";
import { AddTask } from "./AddTask";
import { AllTasks } from "./AllTasks";
import { FilterButton } from "./common/FilterButton";

export const TaskList = () => {
    return (
        <>
            <div className="pd-add-task-wrapper">
                <AddTask />
                <FilterButton />
                <AllTasks />
            </div>
        </>
    )
}