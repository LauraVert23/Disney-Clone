import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlayCircle,
  HiPlus,
  HiStar,
  HiTv,
} from "react-icons/hi2";
import disney from "../assets/images/logo.png";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "Watchlist",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={disney} className="w-[80px] md:w-[115px] object-cover" />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}

          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212]
                boder-[1px]  border-gray-700 p-3 px-5 py-4 "
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}
export default Header;
