import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage";
import AppLayout from "../layouts/appLayout";
import NotFound from "../components/common/notFound";

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
                    <Route path="/explore" element={
                        <>
                            <AppLayout>
                                <h1>Explore page</h1>
                            </AppLayout>
                        </>
                    } />
                    <Route path="*" element={
                        <>
                        <AppLayout>
                            <NotFound />
                        </AppLayout>
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;