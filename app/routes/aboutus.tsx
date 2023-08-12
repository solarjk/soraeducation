import type { V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";

export const meta: V2_MetaFunction = () => [{ title: "About Us" }];

export default function Show() {
  return (
    <main className="absolute inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-10 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-16 top-44 md:inset-x-64">
        <div className="flex flex-auto">
          <div className="mt-20 shrink basis-1/2">
            <h3 className="text-left text-2xl font-bold sm:text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl">
              <span className="block text-[#1119CB] sm:ml-10 2xl:ml-36">
                ABOUT US
              </span>
              <p className="mt-14 text-left text-lg font-light text-black sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                Welcome to Sora Tutoring, where we empower English learners of
                all ages. Led by Sora, an experienced educator with nearly a
                decade of tutoring expertise, including four years of teaching
                English as a second language in South Korea after obtaining
                TESOL and TEFL certifications. Join us to excel in English under
                Sora's dedicated guidance!
              </p>
            </h3>
          </div>
          <div className="shrink basis-1/2">
            <img
              className="ml-auto w-1/2 sm:mr-10 2xl:mr-40"
              src="about_us.png"
              alt="Sora Education"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
