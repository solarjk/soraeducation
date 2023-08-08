import { type V2_MetaFunction } from "@remix-run/node";
import NavBar from "./navbar";
import { useNavigate } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Pricing" }];

export default function Show() {
  let navigate = useNavigate();

  return (
    <main className="absolute inset-0 bg-[#DAEDFF] sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-0 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-64 top-64 sm:inset-x-16">
        <div className="flex flex-auto flex-col">
          <h3 className="text-left text-6xl font-bold sm:text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl">
            <span className="block text-[#1119CB] sm:ml-10 2xl:ml-36">
              PRICING
            </span>
            <div className="text-center">
              <span className="font-semibold text-[#FF9040] sm:ml-10 2xl:ml-36">
                PROMOTION(AUG - SEP 2023)
              </span>
            </div>
          </h3>
        </div>
        <div className="mt-16 flex flex-auto flex-row justify-center space-x-4">
          <div className="flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-2 border-indigo-800 bg-white p-8 text-center">
            <a className="text-2xl font-bold">1 Class</a>
            <div className="flex flex-row space-x-4">
              <a className="text-3xl text-gray-400 line-through">￦30,000</a>
              <a className="text-3xl">￦25,000</a>
            </div>
            <a className="text-lg">1 class</a>
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white"
              onClick={() => {
                navigate("/payment?item=one");
              }}
            >
              Purchase
            </button>
          </div>
          <div className="flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-4 border-indigo-700 bg-white p-8 text-center drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]">
            <a className="text-2xl font-bold">Monthly Plan</a>
            <div className="flex flex-row space-x-4">
              <a className="text-3xl text-gray-400 line-through">￦220,000</a>
              <a className="text-3xl">￦180,000</a>
            </div>
            <a className="text-lg">2 classs / week</a>
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white"
              onClick={() => {
                navigate("/payment?item=month");
              }}
            >
              Purchase
            </button>
          </div>
          <div className="flex basis-1/4 flex-col items-center space-y-4 rounded-lg border-2 border-indigo-800 bg-white p-8 text-center">
            <a className="text-2xl font-bold">Yearly Plan</a>
            <div className="flex flex-row space-x-4">
              <a className="text-3xl text-gray-400 line-through">￦2,400,000</a>
              <a className="text-3xl">￦2,000,000</a>
            </div>
            <a className="text-lg">2 classs / week</a>
            <div id="payment-widget" />
            <button
              className="h-12 w-32 rounded-lg border-2 border-blue-600 bg-blue-500 text-white"
              onClick={() => {
                navigate("/payment?item=year");
              }}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
