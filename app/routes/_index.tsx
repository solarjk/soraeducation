import { type V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";

import { useOptionalUser } from "~/utils";
import { useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Sora Education" }];

export default function Index() {
  let navigate = useNavigate();
  const user = useOptionalUser();
  return (
    <main className="absolute inset-0 bg-[#DAEDFF] sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-0 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-64 top-64 sm:inset-x-16">
        <div className="flex flex-auto">
          <div className="shrink basis-1/2">
            <h3 className=" text-left text-8xl font-bold sm:text-2xl md:text-4xl lg:text-6xl 2xl:text-8xl">
              <span className="block text-[#1119CB]">EXPERIENCE</span>
              <span className="block text-[#1119CB]">A REWARDING</span>
              <span className="block text-[#1119CB]">ESL JOURNEY</span>
              <p className="mt-4 text-left text-3xl font-normal text-black sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                with our exceptional
                <br />
                English resources and tutoring!
              </p>
              <button
                className="rounded-full bg-[#FF9040] px-16 py-2 text-lg font-semibold"
                onClick={() => navigate("/pricing")}
              >
                Find out more
              </button>
              <link rel="icon" href="localhost:3000/favicon.ico?v=2" />
            </h3>
          </div>
          <div className="shrink basis-1/2">
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
