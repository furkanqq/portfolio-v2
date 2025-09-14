import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Eye } from "lucide-react";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const TiltCard = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-20 w-52 rounded-xl bg-gradient-to-br to-indigo-200/10 from-blue-50 border"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-md bg-black text-white shadow-lg"
      >
        {/* <MousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="w-full h-4"
        /> */}
        <div
          className="flex absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4 w-16 opacity-20"
          style={{
            transform: "translateZ(75px)",
          }}
        >
          <Eye
            style={{
              transform: "translateZ(75px)",
            }}
            className="w-full h-4 text-indigo-200"
          />
          <Eye
            style={{
              transform: "translateZ(75px)",
            }}
            className="w-full h-4 text-indigo-200"
          />
        </div>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xl"
        >
          {"Let's Talk"}
        </p>
      </div>
    </motion.div>
  );
};
