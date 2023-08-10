import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import NavBar from "./navbar";
import { InlineWidget } from "react-calendly";

export const meta: V2_MetaFunction = () => [{ title: "Online Tutoring" }];

export default function Show() {
  return (
    <main className="absolute inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="absolute top-4 z-0 w-full">
        <NavBar />
      </div>
      <div className="absolute inset-x-16 top-32 sm:top-64 md:inset-x-64 ">
        <div className="flex flex-auto">
          <div className="shrink basis-1/2">
            <h3 className="text-left text-2xl font-bold sm:text-2xl md:text-2xl lg:text-4xl 2xl:text-6xl">
              <span className="block text-[#1119CB] sm:ml-10 2xl:ml-36">
                SCHEDULE
              </span>
            </h3>
          </div>
        </div>
        <div className="m-0 flex">
          <InlineWidget
            url="https://calendly.com/soraeducation"
            styles={{ width: "100%", height: "1000px" }}
          />
        </div>
      </div>
    </main>
  );
}
