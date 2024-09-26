import NavbarRemix from "~/components/elements/navbar";
import Button from "../components/elements/button";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "MAKO | Menu" }, { name: "menu", content: "MAKO all menus" }];
};

export default function MenuPage() {
  return (
    <>
      <NavbarRemix />
      <div className="bg-slate-700 text-white">Menus</div>
      <Button>Click Me</Button>
      <div></div>
    </>
  );
}
