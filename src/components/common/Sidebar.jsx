import React from "react";
import { UiInput } from "./UiInput";
import UserImg from "../../styles/img/prof.jpeg"

export const Sidebar = () => {
    return (
        <>
            <div className="pd-sidebar">
                <div className="pd-sidebar__header">
                    <h2>Scandinavia</h2>
                    <UiInput type="text" placeholder="Search Here.." />
                </div>

                <div className="pd-sidebar__profile">
                    <img src={UserImg } />
                    <div>
                        <h4>John Doe</h4>
                        <p>Web Developer</p>
                    </div>
                </div>
            </div>

        </>
    )
}