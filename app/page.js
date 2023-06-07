"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Carousel,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
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
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
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
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Our Work
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          FAQs
        </a>
      </Typography>
    </ul>
  );
  return (
    <div className="bg-[#06020f] scrollbar-hide">
      <Navbar className="mx-0  bg-[#06020f] border-none  py-2 px-4 lg:px-4 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold"
          >
            DevsClash
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="rounded-lg hidden lg:inline-block mb-2 z-[20] tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
          >
            <Link href="mailto:devsclash.social@gmail.com">
              Connect with us
            </Link>{" "}
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
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}

            <Button
              variant="gradient"
              className="rounded-lg mb-2 z-[20] tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
              size="sm"
              fullWidth
            >
              <Link href="mailto:devsclash.social@gmail.com">
                Connect with us
              </Link>{" "}
            </Button>
          </div>
        </Collapse>
      </Navbar>
      <main className="flex min-h-screen flex-col items-center  justify-between  bg-primary z-[-1] tracking-wide text-white text-[16px]">
        <section className="flex flex-col md:px-[5rem] relative lg:w-[100vw] lg:px-0 top-4 pt-[4rem] pb-[5rem]  items-center justify-center gap-[70px]">
          <Image
            alt="background effect"
            className="z-[10]"
            src={backgroung_Image}
            fill
          />
          <h1 className="flex flex-col z-[20] text-[46px]  font-bold  ">
            <span className=" px-2 bg-clip-text text-transparent text-center italic bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100%">
              Let&apos;s make
            </span>{" "}
            <span className="px-2 text-center"> Your Vision A Reality.</span>
          </h1>
          <div className="px-[10px] lg:text-[25px] w-auto z-[20] flex flex-col items-center ">
            <p className="text-white mb-4 text-center opacity-100 lg:w-[50vw]">
              Got a vision for next big Saas?
              <br />
              We are there to make it live!
              <br />
            </p>
            <p className="text-white text-center opacity-60 lg:w-[65vw]">
              Experience Web Design at It&apos;s Finest: Seamless Functionality,
              Striking Visuals and Unforgettable User Experience
            </p>
          </div>
          <Button
            sx={{ color: "white" }}
            className="rounded-lg z-[20] tracking-wider font-bold bg-gradient-to-r from-[#F83A3A] from-0% via-[#F13CC7] via-50% to-[#7000FF] to-100% py-[12px] px-[40px]"
          >
            <Link href="mailto:devsclash.social@gmail.com">
              Lets Work Togehter!
            </Link>{" "}
          </Button>
        </section>
        <article className="flex  flex-col text-center items-center justify-center mt-4 mb-10">
          <h1 className="flex z-[20] flex-col  text-[30px]  font-bold  ">
            Our Work
          </h1>
          <p className="px-[10px] text-center opacity-70 mt-[1rem]">
            Here&apos;s the display of what we have done till now.
          </p>
          <div className="relative flex flex-col items-center mt-[1.25rem] py-[1rem] h-auto w-[100vw] bg-[#1E1A25] ">
            <div className="w-[100vw] h-[3rem] bg-[#06020f] absolute top-[-1rem] rounded-bl-[45%] rounded-br-[45%]"></div>
            <Carousel className="rounded-xl relative my-4 px-2 mx-2 bg-[#1E1A25] py-[4rem]">
              <div className="px-4 lg:flex lg:flex-row justify-center items-center lg:h-auto h-full w-full">
                <Image
                  src={project1}
                  alt="project devsclash"
                  className="h-full w-full object-cover"
                />
                <div className="inset-0 grid h-full w-full place-items-center bg-[#1E1A25]">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 mt-4 text-xl md:text-4xl lg:text-5xl"
                    >
                      DevsClash
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-md opacity-80"
                    >
                      1v1 online coding platform with winner takes all model.
                      Let&apos;s add more thrill and excitement to old and
                      boring contests.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button
                        size="md"
                        className="justify-center items-center py-[10px] px-[20px] border-white border-[1px] bg-pink-500 rounded-md text-white"
                      >
                        <Link href="https://github.com/Yvg2244/codeloot">
                          Code Link
                        </Link>{" "}
                      </Button>
                      <Button
                        size="md"
                        className="justify-center items-center py-[10px] px-[20px] border-pink-500 border-[1px] bg-white text-pink-500 rounded-md"
                        variant="text"
                      >
                        Deployed Link
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 lg:flex lg:flex-row justify-center items-center lg:h-auto h-full w-full">
                <Image
                  src={project2}
                  alt="project redowl"
                  className="h-full w-full object-cover"
                />
                <div className="inset-0 grid h-full w-full place-items-center bg-[#1E1A25]">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 mt-4 text-xl md:text-4xl lg:text-5xl"
                    >
                      RedOwl Schools
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 text-md opacity-80"
                    >
                      Landing page for RedOwl School&apos;s erp servicves.
                      RedQwl provides all the smart infrastructure and erp
                      services needed for best in class school facilities.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button
                        size="md"
                        className="justify-center items-center py-[10px] px-[20px] border-white border-[1px] bg-pink-500 rounded-md text-white"
                      >
                        <Link href="https://github.com/Yvg2244/redowl">
                          Code Link
                        </Link>{" "}
                      </Button>

                      <Button
                        size="md"
                        className="justify-center items-center py-[10px] px-[20px] border-pink-500 border-[1px] bg-white text-pink-500 rounded-md"
                        variant="text"
                      >
                        Deployed Link
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-center bg-[#06020f]/75">
                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full items-end bg-[#06020f]/75">
                <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    The Beauty of Nature
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    It is not so much for its beauty that the forest makes a
                    claim upon men&apos;s hearts, as for that subtle something,
                    that quality of air that emanation from old trees, that so
                    wonderfully changes and renews a weary spirit.
                  </Typography>
                  <div className="flex gap-2">
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                    <Button size="lg" color="white" variant="text">
                      Gallery
                    </Button>
                  </div>
                </div>
              </div>
            </div> */}
            </Carousel>
            <div className="w-[100vw] h-[3rem] bg-[#06020f] absolute bottom-[-1rem] rounded-tl-[45%] rounded-tr-[45%]"></div>
          </div>
          {/* <Box className="flex mt-[6rem] ">
          <Container className="relative flex flex-col items-center py-[3rem] h-auto w-[100vw] bg-[#1E1A25] ">
            <Container className="w-[100vw] h-[3rem] bg-primary absolute top-[-1rem] rounded-bl-[45%] rounded-br-[45%]"></Container>
            <Image
              alt=""
              src={project1}
              height={200}
              className="mt-[3rem] mb-[2rem]"
            />
            <Container className="flex flex-col w-full items-start gap-6">
              <Container className="flex text-[10px] gap-4">
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  React
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Python
                </div>
                <div className="justify-center items-center py-[12px] px-[20px] border-[#EE4578] border-[1px] bg-[#852F4E] rounded-[1.5rem]">
                  Tailwind
                </div>
              </Container>
              <h3 className="text-2xl font-bold">DevsClash</h3>
              <p className="w-full text-start leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum aliquid unde dolorum assumenda. Unde libero atque
                similique adipisci recusandae distinctio et blanditiis nostrum
                cum eveniet provident fugiat iusto, incidunt fuga!
              </p>
              <Container className="flex text-[12px] font-semibold gap-4">
                <div className="justify-center items-center py-[10px] px-[20px] border-white border-[1px] bg-pink-500 rounded-md">
                  Code Link
                </div>
                <div className="justify-center items-center py-[10px] px-[20px] border-pink-500 border-[1px] bg-white text-pink-500 rounded-md">
                  Deploy Link
                </div>
              </Container>
            </Container>
            <Container className="w-[100vw] h-[3rem] bg-primary absolute bottom-[-1rem] rounded-tl-[45%] rounded-tr-[45%]"></Container>
          </Container>
        </Box> */}
        </article>
        <section className="flex items-center flex-col">
          <h4>What we can do?</h4>
          <h2 className="flex flex-col  text-[30px]  font-bold  ">Services</h2>
          <p className="px-[10px] text-center opacity-70 mt-[1rem]">
            Building Digital Dreams: Our Web Services Bring Your Vision to Life{" "}
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center p-[16px] font-bold gap-5 mt-6 mb-10">
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] md:w-[17rem] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_frontend} />
              </div>
              <p>Full stack developement</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] md:w-[17rem] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_seo} />
              </div>
              <p>Search Engine Optimizations</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] md:w-[17rem] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_ui} />
              </div>
              <p>UI/UX prototyping</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] md:w-[17rem] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_ui} />
              </div>
              <p>Seamless User Interface</p>
            </div>
            <div className="flex flex-col p-[16px] bg-[#0D0D0D] md:w-[17rem] rounded-md items-start gap-2">
              <div className="bg-gradient-to-r from-0% from-[#EE4578] to-100% to-[#FF6363] p-2 rounded-md">
                <Image alt="" height={25} src={icon_cross} />
              </div>
              <p>Cross platform compatibility</p>
            </div>
          </div>
        </section>
        <section className=" px-5">
          <h2 className="flex flex-col text-center my-4 text-[25px]  font-bold  ">
            Frequently Asked Questions
          </h2>

          <Accordion open={open === 1} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(1)}
            >
              What services do you offer?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              We offer custom app and web app development services tailored to
              meet your specific needs.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(2)}
            >
              How much does it cost to develop an app/web app?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              The cost of app development varies depending on factors such as
              project complexity, features, platforms, and timelines. We provide
              personalized quotes after understanding your requirements in
              detail. Feel free to reach out to us for a FREE consultation.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(3)}
            >
              How long does it take to develop an app/web app?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              The development timeline depends on the scope and complexity of
              the project. Simple apps may take a few weeks, while more complex
              projects can span several months. We work closely with our clients
              to establish realistic timelines and keep them informed throughout
              the development process.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(4)}
            >
              Can you help with both iOS and Android app development?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Yes, we have expertise in developing apps for both iOS and Android
              platforms. We can build native apps specific to each platform or
              develop hybrid apps that work on multiple platforms, depending on
              your requirements.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(5)}
            >
              Do you provide ongoing support and maintenance after the app is
              launched?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Absolutely! We offer post-launch support and maintenance services
              to ensure your app runs smoothly. We provide various support
              options, including bug fixes, updates, and feature enhancements,
              based on your needs.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(6)}
            >
              Can you integrate third-party services into the apps/web apps?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Yes, we can integrate various third-party services, such as
              payment gateways, social media platforms, analytics tools, and
              more, based on your requirements. We ensure seamless integration
              and functionality for a comprehensive app experience
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(7)}
            >
              What is your development process?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Our development process typically involves the following steps:
              requirement gathering and analysis, UI/UX design, development,
              testing, deployment, and ongoing support. We follow agile
              methodologies, allowing for flexibility and iterative improvements
              during the development cycle.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(8)}
            >
              Can you provide references or examples of your previous work?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Absolutely! We have a portfolio section on our website where you
              can find examples of our previous projects. Additionally, we can
              provide references upon request to give you a better understanding
              of our clients satisfaction.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 9} animate={customAnimation}>
            <AccordionHeader
              className="text-white font-normal hover:text-gray-400"
              onClick={() => handleOpen(9)}
            >
              How do we get started with our app/web app development project?
            </AccordionHeader>
            <AccordionBody className="text-white font-normal hover:text-gray-400">
              Getting started is simple! Reach out to us through our contact
              page or by filling out the inquiry form. We&apos;ll get in touch
              with you promptly to discuss your project requirements and guide
              you through the next steps.
            </AccordionBody>
          </Accordion>
        </section>
      </main>
    </div>
  );
}
