import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import CommunityPage from "./pages/CommunityPage";
import PollsPage from "./components/community/Polls";
import PreLoginLanding from "./pages/Landing";
import WallOfLegends from "./components/community/WallOfLegends";
import ProjectsSection from "./pages/ProjectsSection";
import GalleryPage from "./components/gallery/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import DashBoard from "./pages/DashBoard";
import EventsPage from "./pages/EventsPage";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PreLoginLanding />} />

        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="PollsPage" element={<PollsPage />} />
                <Route path="community" element={<CommunityPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="WallOfLegends" element={<WallOfLegends />} />
                <Route path="GalleryPage" element={<GalleryPage />} />
                <Route path="ProjectsSection" element={<ProjectsSection />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
