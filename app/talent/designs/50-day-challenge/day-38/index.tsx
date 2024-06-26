"use client";

import React, { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import Wrapper from "@/components/designs/wrapper";
import { cn, myImage } from "@/utils";
import IphoneSimulator from "@/components/iphone-simulator";
import Checkbox from "@/components/checkbox";

const messages = [
  { from: 0, message: "How are you?" },
  { from: 1, message: "I am good thanks" },
  {
    from: 0,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat voluptates totam excepturi omnis, necessitatibus dolorum quas est fugit quia ratione recusandae similique iure numquam, possimus molestias laboriosam a assumenda!",
  },
  {
    from: 0,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellat voluptates totam excepturi omnis, necessitatibus dolorum quas est fugit quia ratione recusandae similique iure numquam, possimus molestias laboriosam a assumenda!",
  },
];

export default function Day38() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSlow, setIsSlow] = useState(false);

  const onClickHandler = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <label className="mb-8 flex items-center gap-2">
        <Checkbox
          variant={"square"}
          onChange={({ target }) => setIsSlow(target.checked)}
        />
        make it slow
      </label>
      <IphoneSimulator
        mainClassName="py-0"
        textColor="black"
        backgroundImage="https://s2-ug.ap4r.com/image-aigc-article/seoPic/origin/c760a93722d17be2764d101ef31824a28259b463.jpg"
      >
        <MotionConfig
          transition={{
            duration: isSlow ? 1.5 : 0.7,
            type: "spring",
            bounce: 0,
          }}
        >
          <div>
            <motion.header
              layoutId="header"
              className="sticky top-0 z-30 grid grid-cols-3 items-center bg-white/80 pb-2 pt-14 font-medium backdrop-blur-lg"
              style={{ borderTopLeftRadius: 52, borderTopRightRadius: 52 }}
            >
              <motion.button
                layout
                className="flex w-12 items-center gap-1 pl-2 text-blue-500"
              >
                <svg
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3"
                  style={{ flex: "0 0 auto" }}
                >
                  <path
                    d="M10.5312 1.36963L2.1398 9.47206C2.07194 9.53759 2.07194 9.64633 2.1398 9.71186L10.5312 17.8143"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="rounded-full bg-blue-500 px-1 py-0.5 text-xs text-white">
                  522
                </span>
              </motion.button>

              <div className="flex grow flex-col items-center">
                <motion.h2 layoutId="channel-name">Ali Samadi</motion.h2>
                <motion.small
                  layoutId="subscribers"
                  className="-mt-1 inline-block text-xs font-light text-[#727472]"
                >
                  699 subscribers
                </motion.small>
              </div>

              <div className="flex justify-end pr-2">
                <button className="active:opacity-50" onClick={onClickHandler}>
                  <motion.img
                    layoutId="avatar-image"
                    src={myImage}
                    width={40}
                    height={40}
                    alt="my-image"
                    className="h-8 w-8 object-cover"
                    style={{ borderRadius: 16 }}
                  />
                </button>
              </div>

              <motion.div
                layoutId="buttons"
                className="pointer-events-none absolute bottom-0 left-0 z-10 mt-2 grid w-full grid-cols-4 gap-2"
              >
                {Array.from({ length: 4 }).map((_, index) => (
                  <button
                    key={index}
                    className="flex aspect-[8/6] w-full items-center justify-center rounded-lg bg-[#A2A2A4]/80 text-sm text-white opacity-0 backdrop-blur"
                  >
                    Button
                  </button>
                ))}
              </motion.div>
            </motion.header>

            <motion.ul
              animate={isOpen ? { transform: "translateX(-80px)" } : {}}
              className="mt-3 flex h-full flex-col px-2"
            >
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={cn(
                    "mb-2 flex w-fit max-w-[250px] flex-col rounded-lg p-2 pb-0.5 text-sm",
                    message.from === 0
                      ? "bg-white"
                      : "self-end bg-blue-500 text-white"
                  )}
                >
                  {message.message}
                  <small className="self-end opacity-50">4:00 AM</small>
                </li>
              ))}
            </motion.ul>

            <motion.footer
              animate={isOpen ? { transform: "translateX(-80px)" } : {}}
              className="absolute bottom-0 z-10 flex h-16 w-full justify-center rounded-b-[53px] bg-white pt-2 font-normal text-[#1172E7]"
            >
              Mute
            </motion.footer>
          </div>

          {/* Opening popup */}
          <AnimatePresence>
            {isOpen ? (
              <div className="absolute inset-0 z-20">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-2 top-[62px] z-40 flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-white"
                  onClick={onClickHandler}
                >
                  <svg
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 -translate-x-px"
                    style={{ flex: "0 0 auto" }}
                  >
                    <path
                      d="M10.5312 1.36963L2.1398 9.47206C2.07194 9.53759 2.07194 9.64633 2.1398 9.71186L10.5312 17.8143"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.button>

                <motion.header
                  layoutId="header"
                  className="sticky top-0 z-10 flex h-96 flex-col items-start justify-end rounded-t-[52px] bg-white/80 p-4 pt-14 font-medium backdrop-blur-lg"
                  style={{ borderTopLeftRadius: 52, borderTopRightRadius: 52 }}
                >
                  <motion.img
                    layoutId="avatar-image"
                    src={myImage}
                    width={40}
                    height={40}
                    alt="my-image"
                    className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover"
                    style={{ borderRadius: 0 }}
                  />

                  <div className="relative z-20 flex flex-col">
                    <motion.h2
                      layoutId="channel-name"
                      className="text-xl"
                      animate={{ color: "#ffff", transition: { delay: 0.1 } }}
                    >
                      Ali Samadi
                    </motion.h2>
                    <motion.small
                      layoutId="subscribers"
                      className="-mt-1 inline-block text-base font-light"
                      animate={{ color: "#ffff", transition: { delay: 0.1 } }}
                    >
                      699 subscribers
                    </motion.small>
                  </div>

                  <motion.div
                    layoutId="buttons"
                    className="relative z-10 mt-2 grid w-full grid-cols-4 gap-2"
                  >
                    {Array.from({ length: 4 }).map((_, index) => (
                      <button
                        key={index}
                        className="flex aspect-[8/6] w-full items-center justify-center rounded-lg bg-[#A2A2A4]/80 text-sm text-white backdrop-blur"
                      >
                        Button
                      </button>
                    ))}
                  </motion.div>
                </motion.header>

                {/* Bottom */}
                <motion.div
                  initial={{ transform: "translateX(100%)" }}
                  animate={{ transform: "translateX(0%)" }}
                  exit={{ transform: "translateX(100%)" }}
                  className="absolute inset-0 bg-[#F1F1F6]"
                >
                  <div className="mt-[384px] flex h-24 w-full items-center justify-center">
                    Contents
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </MotionConfig>
      </IphoneSimulator>
    </Wrapper>
  );
}
