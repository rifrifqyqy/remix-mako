import { NavLink } from "@remix-run/react";

const navStyle = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  if (isPending) return "pending";
  return isActive ? "text-amber-400 text-[16px]" : "text-white text-[16px]";
};

export default function RemixFooter() {
  return (
    <>
      <footer className="mt-12 grid w-full grid-cols-4 bg-main-50 p-12 text-white">
        <section className="col-span-2">
          <img src="images/logo-mako.png" className="h-12" alt="" />
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Quicklines</h1>
          <ul className="flex flex-col gap-4">
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>
            <NavLink to="/menu" className={navStyle}>
              Products
            </NavLink>
            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>
            <NavLink to="/outlets" className={navStyle}>
              Outlets
            </NavLink>
            <NavLink to="/contacts" className={navStyle}>
              Contact
            </NavLink>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Support</h1>
          <ul className="flex flex-col gap-4">
            <NavLink to="/policy" className="text-[16px]">
              Privacy Policy
            </NavLink>
            <NavLink to="/term" className="text-[16px]">
              Terms
            </NavLink>
          </ul>
        </section>
      </footer>
      <section className="flex w-full items-center justify-center bg-[#69112a] p-2 text-white">
        <p className="text-[14px]">
          © 2024 Mako Redesigned. Made by Rifqy Hamdani All rights reserved
        </p>
      </section>
    </>
  );
}
