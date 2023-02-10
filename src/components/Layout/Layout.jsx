import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const Layout = () => {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}