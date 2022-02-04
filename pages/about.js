import React from "react";
import Image from "next/image";
import me from "../public/img/me.png";
import Link from "next/link";
import facebook from "../public/facebook.svg";
import telegram from "../public/telegram.svg";
import instagram from "../public/instagram.svg";
import linkedin from "../public/linkedin.svg";
import Head from "next/head";

const iconSize = 44;

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
            This project was developed by <br /> Next.js, Tailwindcss and custom
            design.
          </p>
          <p>
            This service will give you a ready users data.
            <br /> Use and enjoy.
          </p>

          <div className="mt-4">
            <Link href={"https://www.facebook.com/baxtiyor.xasanov.771"}>
              <a target="_blank" rel="noreferrer">
                <Image
                  className="text-zinc-500"
                  src={facebook}
                  alt="Bakhtiyor's facebook"
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </Link>
            <Link href={"https://www.instagram.com/bakhtiyor_khasanov/"}>
              <a target="_blank" rel="noreferrer">
                <Image
                  className="text-zinc-500"
                  src={instagram}
                  alt="Bakhtiyor's instagram"
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/bakhtiyor-khasanov-185076167/"}
            >
              <a target="_blank" rel="noreferrer">
                <Image
                  className="text-zinc-500"
                  src={linkedin}
                  alt="Bakhtiyor's linkedin"
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </Link>
            <Link href={"https://t.me/bakhtiyor_reactdev"}>
              <a>
                <Image
                  className="text-zinc-500"
                  src={telegram}
                  alt="Bakhtiyor's telegram"
                  width={iconSize}
                  height={iconSize}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
