import { LoginForm } from "@/components/shared/LoginForm";
import FormContainer from "@/components/custom/FormContainer";
import FormHeading from "@/components/custom/FormHeading";

export default function Login() {
  return (
    <FormContainer image ="/login-woman.png" alt= "login-image" question="Don't have an Account" actionText="Sign Up" route="/signup">
      <>
        <FormHeading headline= "Log in to your account" text="Welcome back! Please enter your details"/>
        <LoginForm />
      </>
   </FormContainer>
  );
}
