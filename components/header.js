"use client";
import { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  // const search = () => {
  //   <Link
  //     href={{
  //       pathname: "/search",
  //       query: {
  //         location: searchInput,
  //         startDate: startDate.toISOString,
  //         endDate: endDate.toISOString,
  //         noOfGuest,
  //       },
  //     }}
  //   />;
  // };

  // const search = () => {
  //   router.push("/search", {
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString,
  //       endDate: endDate.toISOString,
  //       noOfGuest,
  //     },
  //   });
  //   console.log(router.push())
  // };

  // const search = (e) => {
  //   const query = {
  //     location: searchInput,
  //     startDate: startDate.toISOString(),
  //     endDate: endDate.toISOString(),
  //     noOfGuest,
  //   };
  //   router.push("/search", query);
  //   console.log(router)
  //   e.preventDefault()
  // };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-lg p-3 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 my-auto"
      >
        <Image
          src="/logo3.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
          alt="Logo"
        />
      </div>

      {/* Middle Search */}
      <div className="flex items-center border-2 rounded-full  bg-transparent md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 placeholder-transparent md:placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your Search..."}
        />
        <SearchIcon className="h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
      </div>

      {/* Right */}
      <div>
        <div className="flex space-x-4 justify-end items-center py-2 text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a Host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-1 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#ff0000"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400">
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    location: searchInput,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    noOfGuest,
                  },
                }}
              >
                Search
              </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
