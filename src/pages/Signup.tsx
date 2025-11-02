import FormContainer from "@/components/custom/FormContainer";
import { SignupProgress } from "@/components/custom/SignupProgress";
import { SignupForm } from "@/components/shared/SignupForm";

const Signup = () => {
  return (
    <>
      <SignupProgress />
      <FormContainer
        image="/create-account.png"
        alt="signup"
        question="Already have an Account"
        actionText="Sign In"
        route="/login"
      >
        <SignupForm />
      </FormContainer>
    </>
  );
};

export default Signup;
