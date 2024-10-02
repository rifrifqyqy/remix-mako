import type { MetaFunction } from "@remix-run/node";
import HomeBanner from "~/components/elements/Home/banner";
import CategorySection from "~/components/elements/Home/category";
import NavbarRemix from "~/components/elements/navbar";
import { motion } from "framer-motion";
import RemixFooter from "~/components/elements/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "MAKO Cake and Bakery" },
    { name: "homepage", content: "Welcome to MAKO!" },
  ];
};
// animation
const SVG_ANIMATION = {
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

export default function Index() {
  return (
    <main>
      <NavbarRemix />
      <section className="mx-8 flex flex-col gap-16">
        <HomeBanner />
        <section className="my-12 flex flex-col gap-16 rounded-xl bg-zinc-100 px-4 py-8">
          <article className="flex w-full justify-between">
            <h1 className="text-4xl font-semibold">
              Discover our artisan breads, <br /> made with premium ingredients.
            </h1>
            <figure className="flex gap-4">
              <motion.svg
                initial="hidden"
                animate="visible"
                whileHover="hovering"
                className="h-16"
                viewBox="0 0 344 254"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={SVG_ANIMATION}
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
      <RemixFooter />
    </main>
  );
}
