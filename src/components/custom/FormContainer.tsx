import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <div className="flex justify-between w-full mt-2">
      <div className="form-div">
        {children}
        <p className="text-center">OR</p>
        <Button variant="outline" className="w-full font-medium">
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
