import type { MetaFunction } from "@remix-run/node";
import HomeBanner from "~/components/elements/Home/banner";
import CategorySection from "~/components/elements/Home/category";
import NavbarRemix from "~/components/elements/navbar";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [{ title: "MAKO Cake and Bakery" }, { name: "homepage", content: "Welcome to MAKO!" }];
};

export default function Index() {
  return (
    <main>
      <NavbarRemix />
      <section className="mx-8 flex flex-col gap-16">
        <HomeBanner />
        <section className="bg-zinc-100 px-4 py-8 mt-8 rounded-xl flex flex-col gap-16">
          <article className="flex w-full justify-between">
            <h1 className="text-4xl font-semibold">
              Discover our artisan breads, <br /> made with premium ingredients.
            </h1>
            <figure className="flex gap-4">
              <motion.svg initial="hidden" animate="visible" whileHover="hovering" className="h-16" viewBox="0 0 344 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  variants={icon}
                  d="M17.5 243.167L1 137.667C42 220.667 61.5 214.667 76.5 207.167C116.1 176.767 122 133.834 120 116.167C122.4 58.567 97 36.8337 84 33.167C77.2 29.967 65.5 35.5003 60.5 38.667C60.1667 26.8337 65.7 2.86699 90.5 1.66699C115.3 0.466992 127.833 16.8337 131 25.167L174 142.667C181.833 117.334 199.3 61.667 206.5 41.667C213.7 21.667 225.167 10.3335 230 7.16676C268.5 -12.3332 282.5 19.6668 284 30.6668C285.2 39.4668 282.167 39.6668 280.5 38.6668C259 26.6669 250 36.1668 239 51.6668C229.4 63.6668 225.333 90.0002 224.5 101.667C215.3 144.867 245.333 186.667 261.5 202.167C296.3 233.367 329.5 170.167 342.5 135.667L326.5 243.167C243.7 280.767 206 201.5 197.5 157.167C190.833 178.667 177.1 222.167 175.5 224.167C173.9 226.167 170.833 225 169.5 224.167L147 160.167C123 266.967 50.6667 260 17.5 243.167Z"
                  fill="#8D1535"
                  stroke="#8D1535"
                  strokeWidth="2"
                />
              </motion.svg>
            </figure>
          </article>
          <CategorySection />
        </section>
      </section>
      <div className="h-[1000px]"></div>
    </main>
  );
}

const resources = [
  {
    href: "https://remix.run/start/quickstart",
    text: "Quick Start (5 min)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none" className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300">
        <path d="M8.51851 12.0741L7.92592 18L15.6296 9.7037L11.4815 7.33333L12.0741 2L4.37036 10.2963L8.51851 12.0741Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "https://remix.run/start/tutorial",
    text: "Tutorial (30 min)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none" className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300">
        <path
          d="M4.561 12.749L3.15503 14.1549M3.00811 8.99944H1.01978M3.15503 3.84489L4.561 5.2508M8.3107 1.70923L8.3107 3.69749M13.4655 3.84489L12.0595 5.2508M18.1868 17.0974L16.635 18.6491C16.4636 18.8205 16.1858 18.8205 16.0144 18.6491L13.568 16.2028C13.383 16.0178 13.0784 16.0347 12.915 16.239L11.2697 18.2956C11.047 18.5739 10.6029 18.4847 10.505 18.142L7.85215 8.85711C7.75756 8.52603 8.06365 8.21994 8.39472 8.31453L17.6796 10.9673C18.0223 11.0653 18.1115 11.5094 17.8332 11.7321L15.7766 13.3773C15.5723 13.5408 15.5554 13.8454 15.7404 14.0304L18.1868 16.4767C18.3582 16.6481 18.3582 16.926 18.1868 17.0974Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "https://remix.run/docs",
    text: "Remix Docs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none" className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300">
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300">
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944L8.71099 16.4904C10.8645 17.0471 13.128 17.0485 15.2821 16.4947C15.6261 17.1826 16.0293 17.8269 16.4892 18.4469L16.805 18.8725L17.3116 18.717C19.3056 18.105 21.1876 17.1751 22.8559 15.9238L23.1224 15.724L23.1528 15.3923C23.5873 10.6524 22.3579 6.53306 19.8947 2.90714L19.7759 2.73227L19.5833 2.64518C18.1437 1.99439 16.6386 1.51826 15.0686 1.25995ZM16.6074 10.7755L16.6074 10.7756C16.5934 11.6409 16.0212 12.1444 15.4783 12.1444C14.9297 12.1444 14.3493 11.6173 14.3493 10.7877C14.3493 9.94885 14.9378 9.41192 15.4783 9.41192C16.0471 9.41192 16.6209 9.93851 16.6074 10.7755ZM8.49373 12.1444C7.94513 12.1444 7.36471 11.6173 7.36471 10.7877C7.36471 9.94885 7.95323 9.41192 8.49373 9.41192C9.06038 9.41192 9.63892 9.93712 9.6417 10.7815C9.62517 11.6239 9.05462 12.1444 8.49373 12.1444Z"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

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
