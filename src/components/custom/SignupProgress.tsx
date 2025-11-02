import { useSelector } from "react-redux";
import { type RootState } from "@/app/store";

export function SignupProgress() {
  const step = useSelector((state: RootState) => state.signup.step);
  const totalSteps = 2;
  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
        <div key={s} className="relative flex items-center justify-center">
          <div
            className={`w-4 h-4 rounded-full border-2 ${
              step === s
                ? "bg-primary border-primary"
                : "bg-gray-100 border-gray-100"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
