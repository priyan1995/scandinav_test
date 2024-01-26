import React from "react";
import { UiInput } from "./UiInput";

export const Sidebar = () => {
    return (
        <>
            <div className="pd-sidebar">
                <div className="pd-sidebar__header">
                    <h2>Scandinavia</h2>
                    <UiInput type="text" placeholder="Search Here.." />
                </div>
            </div>

        </>
    )
}