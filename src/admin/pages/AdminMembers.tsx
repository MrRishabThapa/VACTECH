import { useState, useMemo } from "react";
import { Search, Edit, Trash2, Filter } from "lucide-react";
import MemberRankBadge from "../components/MemberRankBadge";

type Role = "Admin" | "Member" | "Lead";
type Rank = "Newbie" | "Explorer" | "Builder" | "Developer" | "Hacker";
type Committee = "Tech" | "Events" | "Marketing" | "Outreach" | "None";

interface Member {
  id: string;
  username: string;
  fullName: string;
  email: string;
  points: number;
  role: Role;
  committee: Committee;
  memoTokens: number;
  attendance: number; // as a percentage
}

const getRank = (points: number): Rank => {
  if (points <= 100) return "Newbie";
  if (points <= 300) return "Explorer";
  if (points <= 600) return "Builder";
  if (points <= 1000) return "Developer";
  return "Hacker";
};

const mockMembers: Member[] = [
  {
    id: "usr-001",
    username: "alex_dev",
    fullName: "Alex Johnson",
    email: "alex@example.com",
    points: 1250,
    role: "Admin",
    committee: "Tech",
    memoTokens: 15,
    attendance: 95,
  },
  {
    id: "usr-002",
    username: "maria_ux",
    fullName: "Maria Garcia",
    email: "maria@example.com",
    points: 800,
    role: "Lead",
    committee: "Marketing",
    memoTokens: 10,
    attendance: 88,
  },
  {
    id: "usr-003",
    username: "sam_builds",
    fullName: "Sam Williams",
    email: "sam@example.com",
    points: 450,
    role: "Member",
    committee: "Tech",
    memoTokens: 5,
    attendance: 92,
  },
  {
    id: "usr-004",
    username: "chloe_events",
    fullName: "Chloe Brown",
    email: "chloe@example.com",
    points: 210,
    role: "Member",
    committee: "Events",
    memoTokens: 8,
    attendance: 76,
  },
  {
    id: "usr-005",
    username: "kenji_new",
    fullName: "Kenji Tanaka",
    email: "kenji@example.com",
    points: 80,
    role: "Member",
    committee: "None",
    memoTokens: 2,
    attendance: 60,
  },
  {
    id: "usr-006",
    username: "aisha_code",
    fullName: "Aisha Khan",
    email: "aisha@example.com",
    points: 650,
    role: "Lead",
    committee: "Tech",
    memoTokens: 12,
    attendance: 98,
  },
];

export default function AdminMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ role: "All", committee: "All" });

  const filteredMembers = useMemo(() => {
    return mockMembers
      .filter((member) => {
        const term = searchTerm.toLowerCase();
        return (
          member.fullName.toLowerCase().includes(term) ||
          member.email.toLowerCase().includes(term) ||
          member.username.toLowerCase().includes(term)
        );
      })
      .filter(
        (member) => filters.role === "All" || member.role === filters.role
      )
      .filter(
        (member) =>
          filters.committee === "All" || member.committee === filters.committee
      );
  }, [searchTerm, filters]);

  return (
    <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
      {/* Header with Search and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative w-full md:w-1/3">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, email, or ID..."
            className="w-full bg-[#0f172a] border border-gray-600 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <select
              className="appearance-none bg-[#0f172a] border border-gray-600 rounded-lg py-2 pl-9 pr-8 text-white focus:outline-none"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, role: e.target.value }))
              }
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Lead">Lead</option>
              <option value="Member">Member</option>
            </select>
          </div>
          <div className="relative">
            <Filter
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <select
              className="appearance-none bg-[#0f172a] border border-gray-600 rounded-lg py-2 pl-9 pr-8 text-white focus:outline-none"
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, committee: e.target.value }))
              }
            >
              <option value="All">All Committees</option>
              <option value="Tech">Tech</option>
              <option value="Events">Events</option>
              <option value="Marketing">Marketing</option>
              <option value="Outreach">Outreach</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
      </div>

      {/* Members Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs text-[#9cc9ff] uppercase bg-[#0f172a]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Points
              </th>
              <th scope="col" className="px-6 py-3">
                Rank
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Committee
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr
                key={member.id}
                className="border-b border-gray-700 hover:bg-[#2a3a55]"
              >
                <td className="px-6 py-4 font-medium text-white">
                  {member.fullName}
                </td>
                <td className="px-6 py-4">{member.email}</td>
                <td className="px-6 py-4 font-bold">{member.points}</td>
                <td className="px-6 py-4">
                  <MemberRankBadge rank={getRank(member.points)} />
                </td>
                <td className="px-6 py-4">{member.role}</td>
                <td className="px-6 py-4">{member.committee}</td>
                <td className="px-6 py-4 flex gap-4">
                  <button className="text-blue-400 hover:text-blue-300">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
