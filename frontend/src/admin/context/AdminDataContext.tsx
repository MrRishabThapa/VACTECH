import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type Role = "Admin" | "Member" | "Lead";
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
  attendance: number;
}
//  can add Project, Event, Poll interfaces here too

interface AdminDataContextType {
  members: Member[];
  addMember: (memberData: Omit<Member, "id">) => void;
  updateMember: (id: string, memberData: Partial<Omit<Member, "id">>) => void;
  deleteMember: (id: string) => void;
  // We will add projects, events, etc. here later
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(
  undefined
);

export const AdminDataProvider = ({ children }: { children: ReactNode }) => {
  const [members, setMembers] = useState<Member[]>([
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
  ]);

  const addMember = (memberData: Omit<Member, "id">) => {
    const newMember: Member = { id: `usr-${Date.now()}`, ...memberData };
    setMembers((prev) => [newMember, ...prev]);
  };

  const updateMember = (
    id: string,
    memberData: Partial<Omit<Member, "id">>
  ) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, ...memberData } : m))
    );
  };

  const deleteMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const value: any = {
    members,
    addMember,
    updateMember,
    deleteMember,
  };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (context === undefined) {
    throw new Error("useAdminData must be used within an AdminDataProvider");
  }
  return context;
};
