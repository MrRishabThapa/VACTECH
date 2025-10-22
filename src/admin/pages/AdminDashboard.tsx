import StatCard from "../components/StatCard";
import {
  Users,
  Calendar,
  Lightbulb,
  BarChart3,
  Plus,
  CheckCircle,
  Mail,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Key Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Members"
          value="50+"
          icon={Users}
          color="#5ea4ff"
        />
        <StatCard
          title="Active Events"
          value="3"
          icon={Calendar}
          color="#34d399"
        />
        <StatCard
          title="Pending Projects"
          value="5"
          icon={Lightbulb}
          color="#f59e0b"
        />
        <StatCard
          title="Active Polls"
          value="2"
          icon={BarChart3}
          color="#a78bfa"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions Section */}
        <div className="lg:col-span-1 bg-[#1e293b] p-6 rounded-lg">
          <h3 className="text-lg font-bold text-[#9cc9ff] mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-3 rounded-lg font-semibold transition">
              <Plus size={18} /> Add Event
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition">
              <CheckCircle size={18} /> Approve Project
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-semibold transition">
              <Plus size={18} /> Create Poll
            </button>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="lg:col-span-2 bg-[#1e293b] p-6 rounded-lg">
          <h3 className="text-lg font-bold text-[#9cc9ff] mb-4">
            Recent Activities
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-gray-300">
              <div className="p-2 bg-green-500/20 rounded-full">
                <Users size={18} className="text-green-400" />
              </div>
              <div>
                New member{" "}
                <span className="font-semibold text-white">"John Doe"</span>{" "}
                just joined.
              </div>
              <div className="ml-auto text-sm text-gray-500">5 min ago</div>
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <div className="p-2 bg-blue-500/20 rounded-full">
                <Lightbulb size={18} className="text-blue-400" />
              </div>
              <div>
                Project{" "}
                <span className="font-semibold text-white">"AI Chatbot"</span>{" "}
                was approved.
              </div>
              <div className="ml-auto text-sm text-gray-500">1 hour ago</div>
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <div className="p-2 bg-yellow-500/20 rounded-full">
                <Mail size={18} className="text-yellow-400" />
              </div>
              <div>
                New project submission:{" "}
                <span className="font-semibold text-white">
                  "Club Website V2"
                </span>
                .
              </div>
              <div className="ml-auto text-sm text-gray-500">3 hours ago</div>
            </li>
            <li className="flex items-center gap-4 text-gray-300">
              <div className="p-2 bg-purple-500/20 rounded-full">
                <Calendar size={18} className="text-purple-400" />
              </div>
              <div>
                Event{" "}
                <span className="font-semibold text-white">
                  "Hackathon 2024"
                </span>{" "}
                was created.
              </div>
              <div className="ml-auto text-sm text-gray-500">1 day ago</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
