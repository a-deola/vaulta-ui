"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "@/app/store";
import { nextStep, prevStep } from "@/features/stepSlice";
import { MoveLeft } from "lucide-react";
import FormHeading from "../custom/FormHeading";
import { signupUser, type User } from "@/features/userSlice";
import { useNavigate } from "react-router-dom";


const step1Schema = z.object({
  firstName: z.string().min(3, { message: "Name must be  3 characters long" }),
  lastName: z.string().min(3, { message: "Name must be  3 characters long" }),
  email: z.email(),
});
const step2Schema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export function SignupForm() {
  const { step } = useSelector((state: RootState) => state.step);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const currentSchema = step === 1 ? step1Schema : step2Schema;
  const {loading, user, error} = useSelector((state: RootState) => state.user);

  const form = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleNext = async () => {
    if (step < 2) {
      dispatch(nextStep());
    } else {
      const data = form.getValues();
      const result = await dispatch(signupUser(data as User));
      if (signupUser.fulfilled.match(result)) {
        navigate("/login");
      }
    }
  };

  return (
    <Form {...form}>
      <FormHeading
        headline={step === 3 ? "Email Verification" : "Create an Account"}
        text={
          step === 2
            ? `Password must consist of a minimum of six characters, and include a combination of letters, numbers and special symbols.`
            : step === 3
            ? `We sent a verification link to (${
                form.getValues("email") || "your email"
              }). Please click the link to verify your identity.`
            : "Welcome! Please enter your details"
        }
      />{error && <p>{error}</p>}
      <form onSubmit={form.handleSubmit(handleNext)} className="space-y-6 py-4">
        {step === 1 && (
          <>
            <div className="flex gap-4 w-full">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="johndoe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="flex items-center gap-2">
          {step === 2 && (
            <Button
              type="button"
              size="icon"
              onClick={() => dispatch(prevStep())}
            >
              <MoveLeft />
            </Button>
          )}

          <Button
            onClick={() => console.log("clicked")}
            className="flex-1"
            type="submit"
            disabled={loading}
          >
            {step < 2 ? "Continue" : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
