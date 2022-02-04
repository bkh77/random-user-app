import React from "react";
import Image from "next/image";
import me from "../public/img/me.png";
import Link from "next/link";
import Head from "next/head";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const size = 12;

export default function About() {
  return (
    <>
      <Head>
        <title>Random user app | About</title>
      </Head>

      <div className="shadow-lg mx-auto px-6 py-12 rounded-2xl space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:h-[476px]">
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full w-44 h-44 overflow-hidden ring-4 ring-offset-2 ring-zinc-300 mb-2 bg-zinc-200 ">
            <Image
              className="object-cover object-center"
              src={me}
              alt="user photo"
              width={176}
              height={176}
              quality={100}
            />
          </div>
          <h3 className="text-lg font-bold text-center text-zinc-600 mt-2">
            Mr Bakhtiyor Khasanov
          </h3>
          <p className="text-center text-gray-500">from Andijan, Uzbekistan</p>
          <p className="text-center text-sm  text-gray-500">
            Frontend React Developer
          </p>
        </div>

        <div className="text-zinc-600 lg:text-lg text-center flex flex-col justify-center">
          <p>
            This project was developed by <br />{" "}
            <Link href="https://nextjs.org/">
              <a target="_blank" rel="noreferrer" className="underline">
                Next.js
              </a>
            </Link>
            ,{" "}
            <Link href="https://tailwindcss.com/">
              <a target="_blank" rel="noreferrer" className="underline">
                Tailwindcss
              </a>
            </Link>{" "}
            and{" "}
            <Link href="https://tailwindcss.com/docs/responsive-design">
              <a target="_blank" rel="noreferrer" className="underline">
                Responsive
              </a>
            </Link>{" "}
            design.
          </p>
          <p>
            This service will give you a ready users data.
            <br /> Use and enjoy.
          </p>

          <div className="mt-4">
            <Link href={"https://www.facebook.com/baxtiyor.xasanov.771"}>
              <a target="_blank" rel="noreferrer">
                <FacebookIcon className="w-12 h-12 hover:text-zinc-500" />
              </a>
            </Link>
            <Link href={"https://www.instagram.com/bakhtiyor_khasanov/"}>
              <a target="_blank" rel="noreferrer">
                <InstagramIcon className="w-12 h-12 hover:text-zinc-500" />
              </a>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/bakhtiyor-khasanov-185076167/"}
            >
              <a target="_blank" rel="noreferrer">
                <LinkedInIcon className="w-12 h-12 hover:text-zinc-500" />
              </a>
            </Link>
            <Link href={"https://github.com/bkh77"}>
              <a>
                <GitHubIcon className="w-12 h-12 hover:text-zinc-500" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
