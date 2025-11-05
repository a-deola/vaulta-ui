import { Loader } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export default function LoadingScreen() {
  const isLoading = useSelector((state: RootState) => state.ui.isLoading);

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center h-screen ">
      <Loader className="w-12 h-12 text-primary animate-spin" />
    </div>
  );
}
