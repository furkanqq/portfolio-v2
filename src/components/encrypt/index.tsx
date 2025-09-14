import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const TARGET_TEXT = "Encrypt data";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "10110100101";

export const EncryptButton = ({
  className,
  target,
  download = false,
}: {
  target?: string;
  className?: string;
  download?: boolean;
}) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState(target || TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Orijinal yazıya geri dön
    setText(target || TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={
        "font-kode group cursor-pointer text-center relative overflow-hidden rounded-md bg-black px-4 py-2 font-medium uppercase text-neutral-300 transition-colors" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="relative z-10 flex justify-center text-sm items-center gap-2">
        <span>{text}</span>
        {download && (
          <span>
            <Download className="w-3 h-3" />
          </span>
        )}
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-300 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
