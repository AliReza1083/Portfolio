"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface ValuesType {
  id: number;
  title: string;
  status: "past" | "now" | "future";
  time: string;
}

const initialValues: ValuesType[] = [
  {
    id: 1,
    title: "Arrival at airport",
    status: "past",
    time: "6:30PM",
  },
  {
    id: 2,
    title: "Counter closes",
    status: "past",
    time: "8:30PM",
  },
  {
    id: 3,
    title: "Boarding",
    status: "now",
    time: "8:45PM",
  },
  {
    id: 4,
    title: "Boarding closes",
    status: "future",
    time: "9:15PM",
  },
  {
    id: 5,
    title: "Departure",
    status: "future",
    time: "9:30PM",
  },
];

export default function CanadaAirplane() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[614px] overflow-hidden rounded-[27px] border border-[#F0F0F0] bg-[#FBFBFB] pb-[14px] pt-[20px]">
      <div className="mb-8 flex items-center justify-between pl-[20px] pr-[40px]">
        <img src="/canada-airplane.png" className="w-[320px] scale-x-[-1]" />
        <div className="flex flex-col items-end space-y-px">
          <img
            src="/air-canada-vector-logo.png"
            className="aspect-[16/4] w-[176px] object-cover mix-blend-multiply"
          />
          <h2 className="text-xl font-semibold tracking-tight">
            AC287 ∙ Gate E7
          </h2>
          <h3 className="flex items-center gap-2 text-[#313131]">
            Toronto <MoveRight /> Paris
          </h3>
          <span className="flex items-center gap-2 text-sm text-[#9A9A9A]">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-green-600" />{" "}
            On time
          </span>
        </div>
      </div>

      <div className="h-32 px-[14px]">
        <MotionConfig
          transition={{ duration: 0.75, type: "spring", bounce: 0.2 }}
        >
          <AnimatePresence>
            <motion.div
              layout
              drag="y"
              onDragEnd={async (event, info) => {
                if (!open) {
                  if (info.offset.y < -60) {
                    setOpen(true);
                  }
                } else {
                  if (info.offset.y > 60) {
                    setOpen(false);
                  }
                }
              }}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0 }}
              className={cn(
                "relative isolate h-32 w-full overflow-hidden p-5",
                open && "absolute inset-[14px] h-auto w-auto"
              )}
            >
              <motion.div
                layout
                className="absolute inset-0 -z-20 origin-bottom bg-black"
                style={{ borderRadius: 24 }}
              />
              <div className="absolute left-1/2 top-0 h-1 w-28 -translate-x-1/2 translate-y-2 rounded-full bg-[#141414]" />
              <motion.div layout className="flex items-center justify-between">
                <h2 className="flex items-center text-[23px] tracking-tight text-[#B0B0B0]">
                  Boarding <TimeLeft />
                </h2>
                <p className="text-lg text-[#ECECEC]">Gate closes at 9:15PM</p>
              </motion.div>

              <AnimatePresence initial={false} mode="popLayout">
                {!open && (
                  <motion.div
                    key={"not-open"}
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: 45,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        type: "tween",
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        duration: 0.4,
                        type: "tween",
                        opacity: { delay: 0.1 },
                      },
                    }}
                    className="flex gap-1"
                  >
                    <div className="h-full grow rounded-lg bg-[#171717]"></div>
                    <div className="h-full">
                      <div className="flex h-full gap-1">
                        <div className="h-full w-2 rounded-lg bg-[#171717]"></div>
                        <div className="h-full w-2 rounded-lg bg-[#171717]"></div>
                        <div className="h-full w-2 rounded-lg bg-[#171717]"></div>
                        <div className="relative h-full w-2 rounded-lg bg-[#171717]">
                          <div className="absolute bottom-0 left-0 right-0 h-2/5 rounded-full bg-[#FC544B]"></div>
                        </div>
                        <div className="h-full w-2 rounded-lg bg-[#FC544B]"></div>
                      </div>
                      <span className="inline-block -translate-y-1 text-[10px] text-[#6A6A6A]">
                        8:45PM
                      </span>
                    </div>
                    <div>
                      <div className="h-full w-16 rounded-lg bg-[#494949]"></div>
                      <span className="inline-block -translate-y-1 text-[10px] text-[#6A6A6A]">
                        9:15PM
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {open && (
                  <motion.ul
                    layout
                    exit={{ y: 100, opacity: 0 }}
                    className="shrink-0 space-y-2 pt-4 text-white"
                  >
                    {initialValues.map((value, index) => (
                      <motion.li
                        key={value.id}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: value.status === "past" ? 0.2 : 1,
                        }}
                        transition={{
                          delay: 0.03 * index,
                          duration: 0.75,
                          type: "spring",
                          bounce: 0.2,
                        }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className={cn(
                            "inline-block h-8 w-3 rounded-full",
                            value.status === "now"
                              ? "bg-[#FC544B]"
                              : "bg-[#494949]"
                          )}
                        ></span>
                        <span className="grow">{value.title}</span>
                        <span>{value.time}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </MotionConfig>
      </div>
    </div>
  );
}

function TimeLeft() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden py-px text-lg tracking-normal text-[#E5555B]">
      ∙{" "}
      <span className="tabular-nums">
        <AnimatePresence mode="popLayout" initial={false}>
          {seconds
            .toString()
            .split("")
            .map((value) => (
              <motion.span
                key={value}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
                transition={{ duration: 0.3, type: "tween" }}
                className="inline-block"
              >
                {value}
              </motion.span>
            ))}
        </AnimatePresence>
      </span>
      s left
    </span>
  );
}
