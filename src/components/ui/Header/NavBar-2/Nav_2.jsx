import { useState } from "react";
import { NavLink } from "react-router-dom";

import Nav_2Items from "./Nav_2Items";
import { nav_2_data as data } from "../../../../DB/Local_Data_Base";

function Nav_2() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="relative bg-rose-200">
      <ul className="grid grid-cols-6 items-center  ">
        {data.map((item, i) => (
          <Nav_2Items key={item.title} setActiveLink={setActiveLink} index={i}>
            {" "}
            {item.title}
          </Nav_2Items>
        ))}
      </ul>

      {activeLink !== null && (
        <div className="absolute w-full flex">
          <div className=" bg-white w-3/5 h-[80vh] z-10 ">
            <ul className=" grid grid-cols-2 justify-evenly items-center gap-4 mt-4 text-blue-500  ml-4 ">
              {data[activeLink].linkItems.map((link, i) => {
                return (
                  <NavLink
                    key={i}
                    to={
                      data[activeLink].title === "car deals" && i > 2
                        ? `our-vehicle-collection/${link}`
                        : link
                    }
                  >
                    <li
                      onClick={() => setActiveLink(null)}
                      className="hover:underline"
                    >
                      {link.replaceAll("-", " ")}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
          <img src={`car-${activeLink}.jpg`} alt="drop down images" />
        </div>
      )}
    </div>
  );
}

export default Nav_2;
