import LandingPage from "@/pages/landing-page/landing-page";
import Layout from "@/pages/Layout";
import Login from "@/pages/login/login";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    );
}
