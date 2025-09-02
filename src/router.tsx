import { BrowserRouter, Routes, Route } from "react-router-dom"
import FavoritePage from "./views/FavoritePage"
import IndexPages from "./views/IndexPages"
import Layout from "./layouts/Layout"
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>} >
                <Route path="/" element={<IndexPages/>} index />
                <Route path="/favoritos" element={<FavoritePage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
