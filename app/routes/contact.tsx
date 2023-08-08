import type { V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";

export const meta: V2_MetaFunction = () => [{ title: "Contact" }];

export default function Show() {
  return (
    <main className="absolute inset-0 bg-[#DAEDFF] sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-0 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-64 top-64 sm:inset-x-16">
        <div className="flex flex-auto flex-col">
          <div className="text-left text-6xl font-bold sm:text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl">
            <span className="block text-[#1119CB] sm:ml-10 2xl:ml-36">
              Contact Us
            </span>
          </div>
          <a className="mt-4 sm:ml-10 2xl:ml-36">
            Feel free to reach out for any questions, guidance, or consultation.
          </a>
        </div>
        <div className="my-8 flex items-center space-x-8 align-middle sm:ml-10 2xl:ml-36">
          <img
            className="h-10 w-10"
            src="KakaoTalk_logo.png"
            alt="KakaoTalk Logo"
          />
          <a
            href="https://open.kakao.com/o/sRiASdhb"
            className="ml-8 text-left text-3xl font-light text-black sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl"
          >
            https://open.kakao.com/o/sRiASdhb
          </a>
          <img className="h-48 w-48" src="KakaoTalk_QR.jpeg" alt="KakaoTalk" />
        </div>
        <div className="my-8 flex items-center space-x-8 align-middle sm:ml-10 2xl:ml-36">
          <img className="h-10 w-10" src="email.png" alt="Email" />
          <a className="ml-8 text-left text-3xl font-light text-black sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            soraeducation01@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
