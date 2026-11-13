import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "../pages/homepage";
import AppLayout from "../layouts/appLayout";
import NotFound from "../components/common/notFound";
import Explore from "../pages/explore";
import Reels from "../pages/reels";

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
                                <Explore />
                            </AppLayout>
                        </>
                    } />
                    <Route path="reels" element={
                        <>
                            <AppLayout>
                                <Reels />
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