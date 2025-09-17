import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Buttons";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cream to-sage">
      <Navbar />

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold text-dark mb-6">Welcome Back</h1>

        <form className="w-96 bg-white rounded-xl shadow-lg p-6 space-y-4">
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
              type="pasword"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-sage rounded-md bg-ivory focus:outline-none focus:ring-2 focus:ring-clay"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-clay" />
              Remember me
            </label>
            <Link to="/auth/forgot-password" className="text-clay font-semibold">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <Button label="Log In" type="submit" className="w-full" />

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{" "}
            <Link to="/auth/signup" className="text-clay font-semibold">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
