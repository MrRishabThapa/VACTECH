import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!username) newErrors.username = "Username is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password)
    ) {
      newErrors.password =
        "Password needs an uppercase, lowercase, number, and special character.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Invalid Information", {
        description: "Please correct the highlighted fields and try again.",
      });
      return;
    }

    const apiCall = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve({ id: 1, name: username });
        } else {
          reject(new Error("Server is currently busy."));
        }
      }, 1500);
    });

    toast.promise(apiCall, {
      loading: "Creating your account...",
      success: () => {
        return "Account created successfully! Welcome to the club.";
      },
      error: (err) => {
        return err.message || "Failed to create account. Please try again.";
      },
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-[#9cc9ff] mb-8">
        Create an Account
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="relative">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
          />
          {errors.username && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.username}</p>
          )}
        </div>

        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.password}</p>
          )}
        </div>

        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#1e3a61] border border-transparent rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ea4ff]"
          />
          {errors.confirmPassword && (
            <p className="text-red-400 text-sm mt-1 ml-2">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3 rounded-lg font-semibold transition !mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
