import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { startGoogleLogin } from "@/features/userSlice";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/store";
import { Globe } from "lucide-react";

type ContainerProps = {
  children: ReactNode;
  image: string;
  alt: string;
  question: string;
  actionText: string;
  route: string;
};

export default function FormContainer({
  children,
  image,
  alt,
  question,
  actionText,
  route,
}: ContainerProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex justify-between w-full mt-2">
      <div className="form-div">
        {children}
        <p className="text-center">OR</p>
        <Button
          onClick={() => dispatch(startGoogleLogin())}
          variant="outline"
          className="w-full font-medium"
        >
          <Globe className="w-5 h-5 text-[#4285F4]" />
          Login with Google
        </Button>
        <div className="flex gap-2 mt-10 justify-center items-center text-sm">
          <p className="font-bold">{question} ?</p>
          <Link to={route} className="text-primary">
            {actionText}
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-2/5">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}
