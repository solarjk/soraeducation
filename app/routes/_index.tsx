import { type V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";

import { useOptionalUser } from "~/utils";
import { useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Sora Education" }];

export default function Index() {
  let navigate = useNavigate();
  const user = useOptionalUser();
  return (
    <main className="absolute inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-10 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-16 top-32 sm:top-64">
        <div className="flex flex-col sm:flex-row">
          <div className="shrink basis-1/2">
            <h3 className="text-left text-2xl font-bold sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl ">
              <span className="block text-[#1119CB]">EXPERIENCE</span>
              <span className="block text-[#1119CB]">A REWARDING</span>
              <span className="block text-[#1119CB]">ESL JOURNEY</span>
              <p className="mt-4 text-left text-lg font-normal text-black sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                with our exceptional
                <br />
                English resources and tutoring!
              </p>
              <button
                className="mt-16 h-12 w-48 rounded-full bg-[#111E90] text-xs font-semibold text-white sm:text-lg"
                onClick={() => navigate("/pricing")}
              >
                Find out more
              </button>
              <link rel="icon" href="localhost:3000/favicon.ico?v=2" />
            </h3>
          </div>
          <div className="mt-8 shrink basis-1/2 sm:mt-0">
            <img
              className="ml-auto"
              src="home_students.png"
              alt="Sora Education"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
