import React from "react";
import ReactModal from "react-modal";
import Image from "next/image";
import { XIcon } from "@heroicons/react/solid";


ReactModal.setAppElement("#__next")

export default function UserModal({ openModal, setOpenModal, item }) {
  return (
    <div>
      <ReactModal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          content: {
            background: "#f2f2f2",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            padding: "26px",
            display:"flex",
            flexDirection:'column',
            justifyContent:"center",
          },
        }}
        overlayClassName={"fixed inset-0 bg-zinc-300/50"}
        className={"shadow-xl absolute inset-10 lg:inset-28 rounded-xl"}
      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left relative">
          <div className="flex flex-col items-center justify-center sm:col-span-2 lg:col-auto">
            <div className="rounded-full w-44 h-44 overflow-hidden ring-4 ring-offset-2 ring-zinc-300 mb-2">
              <Image
                className="object-cover"
                src={item?.picture.large}
                alt="user photo"
                width={176}
                height={176}
                quality={100}
              />
            </div>
            <h3 className="text-lg font-bold text-center text-zinc-600 mt-2">
              {item?.name.title} {item?.name.first} {item?.name.last}
            </h3>
            <p className="text-center text-gray-500">
              Age {item?.dob.age}, from {item?.location.state},{" "}
              {item?.location.country}
            </p>
          </div>

          <div className="text-zinc-600 space-y-2  ">
            <p>
              <b>Gender: </b> {item?.gender}
            </p>
            <p>
              <b>Nationality:</b> {item?.nat}
            </p>
            <p>
              <b>Date of birth:</b>{" "}
              {new Date(item?.dob.date).toLocaleString("en-US", {
                timeZone: "UTC",
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>
              <b>Address:</b> {item?.location.city} city,{" "}
              {item?.location.street.name}, #{item?.location.street.number}
            </p>
          </div>

          <div className="text-zinc-600 space-y-2 " >
            <p>
              <b>Email:</b> {item?.email} 
            </p>
            <p>
              <b>Phone:</b> {item?.phone} 
            </p>
            <p>
              <b>Username:</b> @{item?.login.username} 
            </p>
            
            <p>
              <b>Registered:</b> {new Date(item?.registered.date).toLocaleString("ru-RU", {timeZone:"UTC", hour12:false}) } 
            </p>
          </div>
        </div>
          <XIcon className="w-5 h-5 inline text-zinc-500 cursor-pointer hover:text-red-500 absolute right-6 top-6" onClick={()=>setOpenModal(false)} />
      </ReactModal>
    </div>
  );
}
