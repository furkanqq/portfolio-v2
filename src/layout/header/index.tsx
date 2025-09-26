import ResponsiveContainer from "@/components/container";
import { EncryptButton } from "@/components/encrypt";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header className="sticky z-50 bg-white top-0 border-b mb-6 md:mb-12 rounded-t-[0.75rem]">
      <ResponsiveContainer className="flex justify-between items-center h-16 md:h-20">
        <Link href={"/"} className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src="/logo1.png"
            alt="Next.js logo"
            fill
            priority
            className="object-contain"
            fetchPriority="high"
          />
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center text-sm">
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="ml-1">
              <Link href={"/FURKAN-ILHAN-CV.pdf"}>
                <EncryptButton target={`Resume`} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription asChild className="mt-10 !h-[80vh]">
                  <nav className="h-full flex flex-col justify-between">
                    <ul className="flex flex-col gap-5 text-sm">
                      <li className="border-b pb-4">
                        <Link href={"/about"}>About</Link>
                      </li>
                      <li className="border-b pb-4">
                        <Link href={"/projects"}>Projects</Link>
                      </li>
                      <li className="border-b pb-4">
                        <Link href={"/contact"}>Contact</Link>
                      </li>
                    </ul>

                    <Link href={"/FURKAN-ILHAN-CV.pdf"}>
                      <EncryptButton target={`Resume`} className="w-full" />
                    </Link>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </ResponsiveContainer>
    </motion.header>
  );
}
