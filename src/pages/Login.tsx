import { LoginForm } from "@/components/shared/LoginForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-between w-full mt-2">
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h3>Log in to your account</h3>
        <p className="text-xs">Welcome back! Please enter your details</p>
        <LoginForm />
        <p className="text-center">OR</p>
        <Button variant="outline" className="w-full text-sm font-bold">
          Login with Google
        </Button>
        <div className="flex gap-2 mt-10 justify-center">
          <p>Don't have an account ?</p>
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="hidden md:flex w-2/5">
        <img src="/login-woman.png" alt="login-image" />
      </div>
    </div>
  );
}
