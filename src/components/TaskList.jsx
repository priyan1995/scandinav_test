import React from "react";
import { AddTask } from "./AddTask";
import { AllTasks } from "./AllTasks";
import { FilterButton } from "./common/FilterButton";

export const TaskList = () => {
    return(
        <>
      
        <AddTask />
        <FilterButton/>
        <AllTasks/>
        </>
    )
}