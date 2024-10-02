import { useNavigate } from "@remix-run/react";
import RemixButton from "../button";
import { motion } from "framer-motion";
export default function HomeBanner() {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate("/menu");
  };

  return (
    <>
      <motion.main
        initial="hidden"
        animate="visible"
        className="grid grid-cols-5 gap-8"
      >
        <div className="col-span-2 flex h-full justify-start">
          <motion.div className="flex flex-col gap-4">
            <motion.h1
              variants={ANIMATION_FLEFT}
              className="h-fit text-4xl font-semibold text-dark-50"
            >
              Indulge yourself with our premium bread and pastries.
            </motion.h1>
            <motion.p variants={ANIMATION_FTOP} className="text-dark-200">
              Made with the finest ingredients and traditional techniques, Our
              premium bread and pastries are not just treats; they are an
              experience crafted to elevate your palate and satisfy your
              cravings.
            </motion.p>
            <section className="my-2 flex w-full justify-center gap-12 text-main-50">
              <motion.div
                variants={ANIMATION_SCALEUP}
                className="flex flex-col items-center"
              >
                <h1 className="text-2xl font-semibold">42</h1>
                <p>Variant Menu</p>
              </motion.div>
              <div className="h-12 w-[2px] bg-zinc-500" />
              <motion.div
                variants={ANIMATION_SCALEUP}
                className="flex flex-col items-center"
              >
                <h1 className="text-2xl font-semibold">102</h1>
                <p>Outlets</p>
              </motion.div>
            </section>
            <motion.section
              variants={ANIMATION_SCALEDOWN}
              className="left-0 mt-auto flex flex-col rounded-xl bg-zinc-100 p-4"
            >
              <h1 className="text-lg font-medium text-main-50">
                Savor the quality and passion in every loaf and pastry, baked
                fresh daily just for you.
              </h1>
              <img
                src="https://img.freepik.com/free-photo/top-view-vegan-baked-products-arrangement_23-2150165995.jpg?t=st=1727330785~exp=1727334385~hmac=6976449081547929f7aa8c44d40682b992d01153d3df89405aa07da984d58c16&w=996"
                className="my-4 h-44 rounded-lg object-cover brightness-[85%]"
                alt=""
              />
              <RemixButton
                color="bg-main-50"
                style="w-fit ml-auto flex gap-2 pr-2 rounded-full group/arrow"
                onClick={handleMenu}
              >
                Lihat Menu
                <svg
                  width="24"
                  height="24"
                  className="transition-all group-hover/arrow:rotate-45"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.68356 6.47716C9.26947 6.48726 8.94197 6.83113 8.95207 7.24522C8.96217 7.65931 9.30605 7.98681 9.72014 7.97671L9.68356 6.47716ZM16.968 7.79994C17.3821 7.78984 17.7096 7.44596 17.6995 7.03187C17.6894 6.61778 17.3455 6.29028 16.9314 6.30038L16.968 7.79994ZM17.6995 7.06845C17.7096 6.65436 17.3821 6.31048 16.968 6.30038C16.5539 6.29028 16.21 6.61778 16.1999 7.03187L17.6995 7.06845ZM16.0231 14.2797C16.013 14.6938 16.3405 15.0377 16.7546 15.0478C17.1687 15.0579 17.5126 14.7304 17.5227 14.3163L16.0231 14.2797ZM17.48 7.58049C17.7729 7.2876 17.7729 6.81272 17.48 6.51983C17.1871 6.22694 16.7123 6.22694 16.4194 6.51983L17.48 7.58049ZM6.51987 16.4193C6.22698 16.7122 6.22698 17.1871 6.51987 17.48C6.81276 17.7729 7.28764 17.7729 7.58053 17.48L6.51987 16.4193ZM9.72014 7.97671L16.968 7.79994L16.9314 6.30038L9.68356 6.47716L9.72014 7.97671ZM16.1999 7.03187L16.0231 14.2797L17.5227 14.3163L17.6995 7.06845L16.1999 7.03187ZM16.4194 6.51983L6.51987 16.4193L7.58053 17.48L17.48 7.58049L16.4194 6.51983Z"
                    fill="white"
                  />
                </svg>
              </RemixButton>
            </motion.section>
          </motion.div>
        </div>

        <div className="col-span-3 flex overflow-hidden">
          <motion.img
            variants={ANIMATION_BANNER}
            src="https://cdn1.katadata.co.id/media/images/thumb/2022/12/28/Gerai_Mako-2022_12_28-14_03_43_6033504fea485d62e147a01e68fc9210_960x640_thumb.jpeg"
            className="ml-auto rounded-xl object-cover"
            alt=""
          />
        </div>
      </motion.main>
    </>
  );
}

// ANIMATION_VALUE

const ANIMATION_FLEFT = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const ANIMATION_FTOP = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const ANIMATION_BANNER = {
  hidden: {
    opacity: 0,
    height: "20%",
  },
  visible: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const ANIMATION_SCALEDOWN = {
  hidden: {
    x: "150%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
const ANIMATION_SCALEUP = {
  hidden: {
    scale: "10%",
    opacity: 0,
  },
  visible: {
    scale: "100%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
