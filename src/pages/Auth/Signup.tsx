import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Buttons";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream to-sage">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-dark mb-6">Create Account</h1>

        <form className="w-96 bg-white rounded-xl shadow-lg p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-sage rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-sage rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-sage rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-dark mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-sage rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>

          {/* Submit */}
          <Button label="Sign Up" type="submit" className="w-full" />

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-clay font-semibold">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
