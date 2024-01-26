import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeWrapper } from "../components/pages/HomeWrapper";

export const MainRoutes = (props) => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<HomeWrapper/> }
                />
            </Routes>
        </>
    )

}