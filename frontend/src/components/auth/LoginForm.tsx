import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const res = await fetch("http://127.0.0.1:5000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok){
        console.log('Error Fetching Data:', res);
        return;
      }

      const data = await res.json();
      console.log(data);
      toast.success("Logged in Sucessfully");
      navigate('/home');
    }

    catch (e) {
      console.log('Error Found while Fetching User data', e);
      return;
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-[#9cc9ff] mb-8">
        Welcome Back
      </h2>
      <form className="space-y-6">
        {/* Email Input */}
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-semibold transition"
          onClick={(e) => handleSumbit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}
