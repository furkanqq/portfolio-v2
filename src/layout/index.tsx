"use client";

import ResponsiveContainer from "@/components/container";
import Header from "./header";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import Footer from "./footer";
import { ToastProvider } from "@/components/toast";

//overflow-hidden, rounded-xl olan yere

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [styleValues, setStyleValues] = useState({
    padding: "0px",
    rounded: "0px",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setStyleValues({ padding: "1.5rem", rounded: "0.75rem" });
      } else {
        setStyleValues({ padding: "0px", rounded: "0px" });
      }
    };

    handleResize(); // initial değer için
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ padding: "0px" }}
      animate={{ padding: styleValues.padding }}
      transition={{ delay: 0.6, duration: 1 }}
      className={
        "min-h-screen flex flex-col" + (className ? ` ${className}` : "")
      }
    >
      <motion.div
        initial={{ borderRadius: "0px" }}
        animate={{ borderRadius: styleValues.rounded }}
        transition={{ delay: 0.5 }}
        className=" bg-white min-h-screen md:min-h-fit"
      >
        <Header />

        <main>
          <ResponsiveContainer>{children}</ResponsiveContainer>
        </main>

        <Footer />
      </motion.div>
    </motion.div>
  );
}
