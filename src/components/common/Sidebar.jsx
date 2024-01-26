import React from "react";
import { UiInput } from "./UiInput";
import UserImg from "../../styles/img/prof.jpeg"
import { HomeIcon } from "../../styles/icons/HomeIcon";
import { Link } from "react-router-dom";
import { BellIcon } from "../../styles/icons/BellIcon";
import { MessageIcon } from "../../styles/icons/MessageIcon";
import { StarIcon } from "../../styles/icons/StarIcon";
import { UpArrow } from "../../styles/icons/UpIcon";
import { PowerIcon } from "../../styles/icons/PowerIcon";

export const Sidebar = () => {
    return (
        <>
            <div className="pd-sidebar">
                <div className="pd-sidebar__header">
                    <h2>Scandinavia</h2>
                    <UiInput type="text" placeholder="Search.." />
                </div>

                <div className="pd-sidebar__profile">
                    <img src={UserImg} />
                    <div>
                        <h4>John Doe</h4>
                        <p>Web Developer</p>
                    </div>
                </div>

                <div className="pd-sidebar__items">
                    <div>
                        <HomeIcon />
                        <Link to="/">Home</Link>
                    </div>

                    <div>
                        <BellIcon />
                        <Link to="/">Notifications</Link>
                    </div>

                    <div>
                        <MessageIcon />
                        <Link to="/">Conversations</Link>
                    </div>

                    <div>
                        <StarIcon />
                        <Link to="/">Tasks</Link>
                    </div>

                    <div>
                        <UpArrow />
                        <Link to="/">Show Less</Link>
                    </div>

                    <div>
                        <PowerIcon />
                        <Link to="/">Exit</Link>
                    </div>
                </div>

            </div>

        </>
    )
}