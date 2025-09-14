"use client";
import { useRef, useState } from "react";
import { LettersPullUp } from "../letterPullUp";
import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import { EncryptButton } from "../encrypt";

function Banner() {
  const [text, setText] = useState(false);
  const [emotion, setEmotion] = useState(false);
  const constraintsRef = useRef(null);

  setTimeout(() => {
    setText(true);
  }, 4000);
  //    drag
  //dragConstraints = { constraintsRef };
  return (
    <div className="relative h-[71vh] md:h-[65vh] w-full overflow-hidden rounded-xl mb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="w-full h-full absolute z-0"
      >
        <Image
          className="dark:invert"
          src="/banner_pattern3.png"
          alt="Next.js logo"
          fill
          priority
          objectFit="cover"
        />
      </motion.div>
      <motion.section
        className="w-full h-full flex justify-center items-center flex-col gap-8 md:gap-12 absolute z-1"
        ref={constraintsRef}
      >
        {text ? (
          <LettersPullUp
            key={text.toString()}
            text={"I am Furkan"}
            className="!font-bold text-4xl md:!text-9xl !text-center"
          />
        ) : (
          <LettersPullUp
            key={text.toString()}
            text={"Hello !"}
            className="!font-bold text-4xl  md:!text-9xl !text-center"
          />
        )}

        {/* <h1 className=" font-bold text-9xl text-center">I am Furkan</h1> */}
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-3/4 md:w-2/4 text-sm md:text-base text-center"
        >
          I develop modern, high-performance web solutions to create innovative
          digital projects focused on user experience and efficiency. I am a Web
          Developer with over 2 years of experience.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex gap-2"
        >
          <Link href={"/projects"}>
            <EncryptButton target="View My Portfolio" />
            {/* <Button size={"lg"} className="cursor-pointer">
              View My Portfolio
            </Button> */}
          </Link>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            className="h-full w-fit hidden md:flex rounded-md bg-black text-white cursor-grab"
          >
            <motion.div
              className="px-4 py-1 flex rotate-90 justify-center items-center w-full h-full"
              whileHover={{ scale: "1.4" }}
              onHoverStart={() => setEmotion(true)}
              onHoverEnd={() => setEmotion(false)}
            >
              <motion.span>{emotion ? ":)" : ":("}</motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export { Banner };
