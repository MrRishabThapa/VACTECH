import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

// Helper to get a title from the path
const getTitleFromPath = (path: string) => {
  const segment = path.split("/").pop() || "dashboard";
  if (segment === "admin") return "Dashboard";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

export default function AdminLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = getTitleFromPath(location.pathname);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] font-poppins text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <main className="md:ml-64 transition-all duration-300">
        <Header toggleSidebar={toggleSidebar} title={title} />
        <div className="p-6">
          <Outlet />
        </div>
      </main>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}
