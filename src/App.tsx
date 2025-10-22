import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
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
import Footer from "./components/Footer";
import { AdminDataProvider } from "./admin/context/AdminDataContext";
import AdminPanelLayout from "./admin/components/AdminLayout";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminMembers from "./admin/pages/AdminMembers";
import AdminAbout from "./admin/pages/AdminAbout";
import AdminEvents from "./admin/pages/AdminEvents";
import AdminProjects from "./admin/pages/AdminProjects";
import AdminCommunity from "./admin/pages/AdminCommunity";
import AdminPolls from "./admin/pages/AdminPolls";
import AdminSettings from "./admin/pages/AdminSettings";

const PublicLayout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PreLoginLanding />} />

        <Route element={<PublicLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="PollsPage" element={<PollsPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="WallOfLegends" element={<WallOfLegends />} />
          <Route path="GalleryPage" element={<GalleryPage />} />
          <Route path="ProjectsSection" element={<ProjectsSection />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
        </Route>

        <Route
          path="/admin/*"
          element={
            <AdminDataProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<AdminPanelLayout />}>
                  <Route index element={<AdminDashboard />} />
                  <Route path="members" element={<AdminMembers />} />
                  <Route path="about" element={<AdminAbout />} />
                  <Route path="event" element={<AdminEvents />} />
                  <Route path="projects" element={<AdminProjects />} />
                  <Route path="community" element={<AdminCommunity />} />
                  <Route path="polls" element={<AdminPolls />} />
                  <Route path="settings" element={<AdminSettings />} />
                </Route>
              </Routes>
            </AdminDataProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
