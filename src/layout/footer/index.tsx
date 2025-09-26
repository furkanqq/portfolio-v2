import { Github, Instagram, Linkedin } from "@/assets/icons/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center h-16 border gap-6 border-t mt-6 md:mt-12 py-6 text-center text-sm text-gray-500">
      {/* &copy; {new Date().getFullYear()} Murki Yazılım. All rights reserved. */}
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"https://www.instagram.com/llhanfurkan/"}
            className="text-gray-700"
            target="_blank"
            aria-label="Furkan's Instagram Account"
            id="instagram-link"
          >
            <Instagram />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"Furkan's Instagram Account"}</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"https://www.linkedin.com/in/furkan-ilhan/"}
            className="text-gray-700"
            target="_blank"
            aria-label="Furkan's Linkedin Account"
            id="linkedin-link"
          >
            <Linkedin />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"Furkan's Linkedin Account"}</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"https://github.com/furkanqq"}
            className="text-gray-700"
            target="_blank"
            aria-label="Furkan's Github Account"
            id="github-link"
          >
            <Github />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{"Furkan's Github Account"}</p>
        </TooltipContent>
      </Tooltip>
    </footer>
  );
}
