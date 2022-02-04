import Link from "next/link";
import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <div className="pt-5 pb-2 mb-4 flex flex-col sm:flex-row items-center justify-between border-b-2 border-zinc-300">
      <Link href={'/'} passHref>
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 hover:text-zinc-500 cursor-pointer">
          <CodeIcon className="w-12 h-12 inline" /> Bakhtiyor{" "}
          <span className="font-thin">Khasanov</span>
        </h2>
      </Link>
      <div className="space-x-0">
        <Link href={"/"}>
          <a className="nav-link">Home</a>
        </Link>
        <Link href={"/generator"}>
          <a className="nav-link">Generator</a>
        </Link>
        <Link href={"/about"}>
          <a className="nav-link">About</a>
        </Link>
      </div>
    </div>
  );
}
