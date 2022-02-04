import React from "react";
import Image from "next/image";

export default function UserCard({ item }) {
  return (
    <div title="Click for more info" className="card">
      <div className="rounded-full w-24 h-24 overflow-hidden ring-4 ring-offset-2 ring-zinc-300 mb-2" >
        <Image
          className="object-cover"
          src={item.picture.medium}
          alt="user photo"
          width={100}
          height={100}
          quality={100}
        />
      </div>

      <h3 className="text-lg font-bold text-center text-zinc-600">
        {item.name.title} {item.name.first} {item.name.last}{" "}
      </h3>
      <p className="text-center text-sm text-gray-500">
        Age {item.dob.age}, from {item.location.city}, {item.location.country}
      </p>
    </div>
  );
}
