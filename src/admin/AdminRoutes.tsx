import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMembers from "./pages/AdminMembers";

// Placeholder components for other pages
const Placeholder = ({ pageName }: { pageName: string }) => (
  <div className="flex items-center justify-center h-96 bg-[#1e293b] rounded-lg">
    <h2 className="text-3xl font-bold text-gray-500">{pageName} Page</h2>
  </div>
);

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="members" element={<AdminMembers />} />
        <Route path="about" element={<Placeholder pageName="About" />} />
        <Route path="events" element={<Placeholder pageName="Events" />} />
        <Route path="projects" element={<Placeholder pageName="Projects" />} />
        <Route
          path="community"
          element={<Placeholder pageName="Community" />}
        />
        <Route path="polls" element={<Placeholder pageName="Polls" />} />
        <Route path="settings" element={<Placeholder pageName="Settings" />} />
      </Route>
    </Routes>
  );
}
