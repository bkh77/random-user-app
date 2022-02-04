import axios from "axios";
import React, { useState} from "react";
import UserCard from "../components/UserCard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import UserModal from "../components/UserModal";
import Head from "next/head";
import {
  XIcon,
  UsersIcon,
  CodeIcon,
  ClipboardCheckIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/solid";

const arrNat = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

export default function Generator() {
  const [results, setResults] = useState(null);
  const [gender, setGender] = useState(null);
  const [users, setUsers] = useState(null);
  const [nat, setNat] = useState(null);
  const [board, setBoard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [copied, setCopied] = useState(false);

  const [itemData, setItemData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const selectCard = (item) => {
    setOpenModal(true);
    setItemData(item);
  };

  const getUsersServer = () => {
    setLoading(true);
    axios
      .request("https://randomuser.me/api/", {
        params: { results, gender, nat },
      })
      .then((res) => {
        setUsers(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getJsonStringify = () => {
    setBoard(true);
    setJsonData(JSON.stringify(users, null, 2));
  };

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Random user app | Generator</title>
      </Head>

      <div>
        <h1 className="title">Random User Generator App</h1>

        <div className="shadow-lg rounded-2xl p-6">
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-zinc-600 font-semibold">
                Enter amount users:
              </label>
              <input
                onChange={(e) => setResults(e.target.value)}
                type="number"
                className="input"
                placeholder="to 5000"
              />
            </div>
            <div>
              <label className="text-zinc-600 font-semibold">Gender:</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="input"
              >
                <option value={null}>Both</option>
                <option value={"male"}> Only Male </option>
                <option value={"female"}>Only Female </option>
              </select>
            </div>
            <div>
              <label className="text-zinc-600 font-semibold">
                Nationalities:
              </label>
              <select
                onChange={(e) => setNat(e.target.value)}
                className="input"
              >
                <option value={""}>All</option>
                {arrNat.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 justify-center sm:space-x-3">
            <button onClick={getUsersServer} className="btn">
              <UsersIcon className="h-5 w-5 inline mr-2" />
              Get users
            </button>
            <button
              disabled={users === null}
              onClick={getJsonStringify}
              className="btn"
            >
              <CodeIcon className="h-5 w-5 inline mr-2" />
              Get json data
            </button>
          </div>

          {board && (
            <div className="relative">
              <textarea
                readOnly
                value={JSON.stringify(users, null, 2)}
                className="area-board"
              ></textarea>
              <XIcon
                onClick={() => setBoard(false)}
                className="h-5 w-5 text-zinc-500 absolute top-7 right-7 
              cursor-pointer hover:text-red-500"
              />
              <CopyToClipboard text={jsonData} onCopy={onCopy}>
                <span className="absolute top-7 right-16 transition duration-300 cursor-pointer text-sm text-zinc-500">
                  {copied ? (
                    <span className="text-emerald-600">
                      <ClipboardCheckIcon className="h-5 w-5  inline mr-1" />
                      copied
                    </span>
                  ) : (
                    <span>
                      <DocumentDuplicateIcon className="h-5 w-5  inline mr-1" />
                      copy
                    </span>
                  )}
                </span>
              </CopyToClipboard>
            </div>
          )}
        </div>

        {loading && (
          <div className="text-zinc-600 p-4 text-center">Loading...</div>
        )}
        <div className="grid-card">
          {users?.map((item) => (
            <div key={item.login.uuid} onClick={() => selectCard(item)}>
              <UserCard item={item} />
            </div>
          ))}
        </div>
        <UserModal
          item={itemData}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </>
  );
}
