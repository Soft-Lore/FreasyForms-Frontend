import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./data";
import useUser from '../components/hooks/useUser';
import { NavBar } from "../components/organisms";

export default function MyRoutes() {
    const {isLogged} = useUser()
    const [menu, setMenu] = useState(false);

    return (
        <Router>
            <NavBar menu={menu} setMenu={setMenu} />
            <Routes>
                {
                    isLogged ? (
                        routes.auth.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                element={<route.element />}
                            />
                        ))
                    ) : (
                        routes.root.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                element={<route.element />}
                            />
                        ))
                    )
                }
            </Routes>
        </Router>
    );
}