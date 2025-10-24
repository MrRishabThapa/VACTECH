import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
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
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
