import { useState } from "react";
import RemixButton from "../button";
import { NavLink, useNavigate } from "@remix-run/react";
import dataCategory from "../../../data/category.json";
import { AnimatePresence, motion } from "framer-motion";

// interface type
interface Category {
  name: string;
  img: string;
}
// value animate
const imageAnimate = {
  hidden: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    y: "-50%",
    transition: {
      duration: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function CategorySection() {
  // State untuk menyimpan kategori yang aktif
  const [activeCategory, setActiveCategory] = useState<Category>(dataCategory[0]);
  const navigate = useNavigate();
  // Fungsi untuk navigasi ke halaman menu
  const handleNavigate = () => {
    navigate(`/menu/${activeCategory.name}`); // Navigasi ke /menu dengan query parameter kategori
  };
  return (
    <main className="grid grid-cols-3 gap-4">
      <section className="col-span-1">
        <ul className="flex flex-col w-fit gap-4">
          {dataCategory.map((category) => (
            <div
              role="button"
              key={category.name}
              onClick={() => setActiveCategory(category)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveCategory(category);
                }
              }}
              tabIndex={0}
              className={`menu capitalize group/item rounded-full border border-zinc-300 transition-all flex p-2 w-full gap-44 text-center items-center justify-between cursor-pointer ${activeCategory?.name === category.name ? "bg-main-50 text-white" : "  bg-zinc-50"}`}>
              <h1 className="ml-2">{category.name}</h1>
              <div className="w-fit p-1 rounded-full bg-white transition-all group-hover/item:rotate-45">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.68356 6.47716C9.26947 6.48726 8.94197 6.83113 8.95207 7.24522C8.96217 7.65931 9.30605 7.98681 9.72014 7.97671L9.68356 6.47716ZM16.968 7.79994C17.3821 7.78984 17.7096 7.44596 17.6995 7.03187C17.6894 6.61778 17.3455 6.29028 16.9314 6.30038L16.968 7.79994ZM17.6995 7.06845C17.7096 6.65436 17.3821 6.31048 16.968 6.30038C16.5539 6.29028 16.21 6.61778 16.1999 7.03187L17.6995 7.06845ZM16.0231 14.2797C16.013 14.6938 16.3405 15.0377 16.7546 15.0478C17.1687 15.0579 17.5126 14.7304 17.5227 14.3163L16.0231 14.2797ZM17.48 7.58049C17.7729 7.2876 17.7729 6.81272 17.48 6.51983C17.1871 6.22694 16.7123 6.22694 16.4194 6.51983L17.48 7.58049ZM6.51987 16.4193C6.22698 16.7122 6.22698 17.1871 6.51987 17.48C6.81276 17.7729 7.28764 17.7729 7.58053 17.48L6.51987 16.4193ZM9.72014 7.97671L16.968 7.79994L16.9314 6.30038L9.68356 6.47716L9.72014 7.97671ZM16.1999 7.03187L16.0231 14.2797L17.5227 14.3163L17.6995 7.06845L16.1999 7.03187ZM16.4194 6.51983L6.51987 16.4193L7.58053 17.48L17.48 7.58049L16.4194 6.51983Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          ))}
        </ul>
      </section>

      {/* Image Section */}
      <section className="col-span-2 hover:brightness-[85%] transition-all cursor-pointer relative">
        <NavLink to={`/menu/${activeCategory.name}`}>
          <div className="absolute opacity-0 hover:opacity-100 w-full h-full flex z-10 flex-col gap-4">
            <section className="flex flex-col gap-10 m-auto">
              <figure className="flex items-center gap-8">
                <img src="https://www.makobakery.com/assets/img/logo-mako.png" className="h-10 border-r-[4px] border-white pr-6" alt="" />
                <p className="text-4xl text-white uppercase">{activeCategory.name}</p>
              </figure>

              <RemixButton style="m-auto" color="bg-main-50" onClick={handleNavigate}>
                Lihat Menu
              </RemixButton>
            </section>
          </div>
        </NavLink>
        <section className="h-[480px] relative">
          <AnimatePresence>
            <motion.img variants={imageAnimate} initial="hidden" animate="visible" exit="exit" key={activeCategory.name} src={activeCategory.img} alt={activeCategory.name} className="w-full h-fit rounded-xl absolute" />
          </AnimatePresence>
        </section>
      </section>
    </main>
  );
}
