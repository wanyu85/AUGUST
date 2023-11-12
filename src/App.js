import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import "./index.css";

import Home from "./pages/Home";
import Header from "./pages/Header/Header";
import NewPosts from "./pages/page/NewPosts/NewPosts";
import ProductPage from "./pages/page/ProductPage/ProductPage";
import { PostProvider } from "./pages/page/PostProvider";

export default function App() {
    return (
        <BrowserRouter>
            <PostProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/newPosts' element={<NewPosts />} />

                    <Route
                        path='/topics/女裝'
                        element={<Typography sx={{ mt: 20 }}>女裝</Typography>}
                    />
                    <Route
                        path='/topics/男裝'
                        element={<Typography sx={{ mt: 20 }}>男裝</Typography>}
                    />
                    <Route
                        path='/topics/童裝'
                        element={<Typography sx={{ mt: 20 }}>童裝</Typography>}
                    />
                    <Route path='imgCard/:postId' element={<ProductPage />} />
                    <Route
                        path='pageCardItem/:postId'
                        element={<ProductPage />}
                    />
                </Routes>
            </PostProvider>
        </BrowserRouter>
    );
}
