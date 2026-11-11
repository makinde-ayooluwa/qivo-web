import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage";
import AppLayout from "../layouts/appLayout";

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <AppLayout>
                                <Homepage />
                            </AppLayout>
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;