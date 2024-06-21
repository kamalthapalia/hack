import './App.css'
import Dashboard from "./components/Dashboard.tsx";
import { Route, Routes } from "react-router-dom";

// pages
import Chat from "./pages/dashPages/Chat.tsx";
import Animals from "./pages/dashPages/Animals.tsx";
import Crops from "./pages/dashPages/Crops.tsx";
import UserProfile from "./pages/dashPages/UserProfile.tsx";
import OthersProfile from './pages/dashPages/OthersProfile.tsx';
import General from "./components/General.tsx";
import LandingPage from "./components/LandingPage.tsx";
import Marketplace from "./pages/Marketplace.tsx";
import Blogs from "./pages/Blogs.tsx";

// components 
import BlogPage from "./components/BlogPage.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import About from "./components/About.tsx";
import ProductPage from "./components/ProductPage.tsx";
import Auth from './pages/Auth.tsx';
import News from './pages/News.tsx';

function App() {

    return (
        <div className={` mb-4`}>
            <Routes>
                <Route path={`/`} element={<General />}>
                    <Route path={`/`} element={<LandingPage />} />
                    <Route path={`/market`} element={<Marketplace />} />
                    <Route path={`/blogs`} element={<Blogs />} />
                    <Route path={`/about`} element={<About />} />
                    <Route path={`/news`} element={<News />} />
                    <Route path={`/blog/:id`} element={<BlogPage />} />
                    <Route path={`/blog/create`} element={<CreateBlog />} />
                    <Route path={`/prod/:id`} element={<ProductPage />} />
                </Route>
                <Route path="/dash" element={<Dashboard />}>
                    <Route path={`/dash`} element={<Crops />} />
                    <Route path={`/dash/marketplace`} element={<Marketplace />} />
                    <Route path={`/dash/chat`} element={<Chat />} />
                    <Route path={`/dash/animals`} element={<Animals />} />
                    <Route path={`/dash/news`} element={<News />} />
                    <Route path={`/dash/profile/me`} element={<UserProfile />} />
                    <Route path={`/dash/profile/:userId`} element={<OthersProfile />} />
                </Route>
                <Route path={'/auth'} element={<Auth />} />
            </Routes>
        </div>
    )
}


export default App
