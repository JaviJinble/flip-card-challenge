import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Game from "../pages/Game/Game";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:username" element={<Game />} />
        </Routes>
    );
}

export default MainRoutes;