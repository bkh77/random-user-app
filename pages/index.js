import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import UserCard from "../components/UserCard";
import UserModal from "../components/UserModal";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await axios.request("https://randomuser.me/api/", {
    params: { results: 8 },
  });

  return {
    props: {
      data: res.data.results,
    },
  };
};



export default function Home({ data }) {
  const [itemData, setItemData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const selectCard = (item) => {
    setOpenModal(true);
    setItemData(item);
  };

  return (
    <>
      <Head>
        <title>Random user app | Home</title>
        <meta
          name="description"
          content="Random user generator app by Bakhtiyor Khasanov"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-center space-y-2">
          <h1 className="title">Random User Generator App</h1>
          <span className="text-zinc-600 mr-4">
            Very useful users data for you
          </span>
          <Link href={"/generator"}>
            <a className="hover:shadow-md transition duration-200 text-lg text-center text-zinc-600 border-2 px-5 rounded-3xl inline-block cursor-pointer">
              Get users
            </a>
          </Link>
        </div>

        <div className="grid-card">
          {data.map((item) => (
            <div key={item.login.uuid} onClick={() => selectCard(item)}>
              <UserCard item={item} />
            </div>
          ))}
        </div>
        <UserModal 
        item={itemData}
        openModal={openModal} 
        setOpenModal={setOpenModal} />
      </main>
    </>
  );
}
