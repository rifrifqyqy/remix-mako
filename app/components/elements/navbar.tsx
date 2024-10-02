import { NavLink, useNavigate } from "@remix-run/react";
import RemixButton from "./button";
import { motion } from "framer-motion";
const navStyle = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  if (isPending) return "pending";
  return isActive
    ? "text-main-50 font-semibold bg-light-300 px-4 py-2 rounded-full text-[18px]"
    : "px-4 py-2 rounded-md text-zinc-500 hover:text-main-50 transition-all  text-[18px] font-medium";
};

export default function NavbarRemix() {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/menu");
  };
  return (
    <>
      <motion.nav
        variants={AniNav}
        initial="hidden"
        animate="visible"
        className="sticky top-4 z-[9999] mx-8 my-6 flex items-center justify-between rounded-xl border-[2px] border-zinc-300 bg-white px-4 py-2"
      >
        <NavLink to="/">
          <motion.svg
            variants={icon}
            initial="hidden"
            animate="visible"
            whileHover="hovering"
            viewBox="0 0 344 254"
            fill="none"
            className="h-10 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={icon}
              d="M17.5 243.167L1 137.667C42 220.667 61.5 214.667 76.5 207.167C116.1 176.767 122 133.834 120 116.167C122.4 58.567 97 36.8337 84 33.167C77.2 29.967 65.5 35.5003 60.5 38.667C60.1667 26.8337 65.7 2.86699 90.5 1.66699C115.3 0.466992 127.833 16.8337 131 25.167L174 142.667C181.833 117.334 199.3 61.667 206.5 41.667C213.7 21.667 225.167 10.3335 230 7.16676C268.5 -12.3332 282.5 19.6668 284 30.6668C285.2 39.4668 282.167 39.6668 280.5 38.6668C259 26.6669 250 36.1668 239 51.6668C229.4 63.6668 225.333 90.0002 224.5 101.667C215.3 144.867 245.333 186.667 261.5 202.167C296.3 233.367 329.5 170.167 342.5 135.667L326.5 243.167C243.7 280.767 206 201.5 197.5 157.167C190.833 178.667 177.1 222.167 175.5 224.167C173.9 226.167 170.833 225 169.5 224.167L147 160.167C123 266.967 50.6667 260 17.5 243.167Z"
              fill="#8D1535"
              stroke="#8D1535"
              strokeWidth="2"
            />
          </motion.svg>
        </NavLink>
        <ul className="flex gap-8">
          <li>
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={navStyle}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/outlet" className={navStyle}>
              Outlet
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
        <RemixButton
          color="bg-main-50"
          textstyle="font-semibold uppercase"
          style="rounded-full"
          onClick={handleMenu}
        >
          Shop Now
        </RemixButton>
      </motion.nav>
    </>
  );
}

// animation
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    fill: "#8D1535",
    pathLength: 1,
    transition: {
      duration: 2,
      delay: 1.2,
      ease: "easeInOut",
    },
  },
  hovering: {
    fill: "rgba(255, 255, 255, 0)",
    pathLength: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const AniNav = {
  hidden: {
    opacity: 1,
    y: "-150%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
