import { type ReactNode } from "react";
import Navbar from "./custom/Navbar";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-10 pt-10">
      <Navbar />
      <div className="absolute top-0 right-0 overflow-hidden pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 850"
          className="w-[500px] h-auto"
        >
          <path
            d="M455.442 400.667C222.433 370.951 55.0995 224.181 4.61495 -16.2218C-78.9124 -413.973 999.067 -16.2218 999.067 -16.2218C999.067 -16.2218 1309.42 770.345 999.067 832.05C940.229 843.749 903.305 849.29 845.72 832.05C671.98 780.035 872.644 432.005 701.587 370.988C609.982 338.312 551.493 412.917 455.442 400.667Z"
            fill="#EF491F"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
