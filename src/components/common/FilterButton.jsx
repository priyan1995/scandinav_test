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
            <select
                value={currentFilter}
                onChange={(e) => handleFIlter(e.target.value)}
            >
                <option value="ALL">All</option>
                <option value="COMPLETED">COMPLETED</option>
                <option value="INCOMPLETED">INCOMPLETED</option>
            </select>
        </>
    )
}