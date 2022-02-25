import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./data";
import useUser from '../components/hooks/useUser';

export default function MyRoutes() {
    const {isLogged} = useUser()

    console.log(isLogged)

    return (
        <Router>
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