import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTasks } from "../../redux/actions";

export const FilterButton = (props) => {
    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFIlter = (filter) => {
        dispatch(filterTasks(filter))
    }

    return (
        <>
            <div className="pd-filter-botton">
                <select
                    value={currentFilter}
                    onChange={(e) => handleFIlter(e.target.value)}
                >
                    <option value="ALL">All TASKS</option>
                    <option value="COMPLETED">COMPLETED TASKS</option>
                    <option value="INCOMPLETED">TASKS TO DO</option>
                </select>
            </div>
        </>
    )
}