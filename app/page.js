"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import project1 from "../assests/project-devsclash.png";
import project2 from "../assests/project-redowl.png";
import icon_frontend from "../assests/icons8-frontend.png";
import icon_cross from "../assests/icons8-cross-platform.png";
import icon_ui from "../assests/icons8-ui.png";
import icon_ux from "../assests/icons8-ux.png";
import icon_seo from "../assests/icons8-seo.png";
import backgroung_Image from "../assests/splash.png";
export default function Home() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Our Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          FAQs
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="bg-black">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            DevsClash
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Buy Now</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Lets Connect</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between  bg-primary z-[-1] tracking-wide text-white text-[16px]">
        <section className="flex flex-col relative top-4 pb-[10rem] mb-[5rem]  items-center justify-center gap-[70px]">
          <Image
            alt="background effect"
            className="z-[10]"
            src={backgroung_Image}
            fill
          />
          <h1 className="flex flex-col z-[20] text-[46px]  font-bold  ">
            <span className=" px-2 bg-clip-text text-transparent italic bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100%">
              Let&apos;s bring
            </span>{" "}
            <span className="px-2"> UI&apos;s to life.</span>
          </h1>
          <p
            className="px-[10px] z-[20] text-center opacity-60
        "
          >
            Experience Web Design at It&apos;s Finest: Seamless Functionality,
            Striking Visuals and Unforgettable User Experience
          </p>
          <Button
            sx={{ color: "white" }}
            className="rounded-lg z-[20] tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
          >
            Contact Us
          </Button>
        </section>
      </main>
    </div>
  );
}
