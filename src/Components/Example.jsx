import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-yellow-500">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-blue-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-blue-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-blue-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/audi.jpeg",
    title: "AUDI",
    id: 1,
  },
  {
    url: "/benz.jpeg",
    title: "BENZ",
    id: 2,
  },
  {
    url: "/toyota.jpeg",
    title: "TOYOTA",
    id: 3,
  },
  {
    url: "/royal.jpeg",
    title: "ENFIELD",
    id: 4,
  },
  {
    url: "/ferrari.jpg",
    title: "FERRARI",
    id: 5,
  },
  {
    url: "/ford.jpeg",
    title: "FORD",
    id: 6,
  },
  {
    url: "/bmw.jpg",
    title: "BMW",
    id: 7,
  },
];