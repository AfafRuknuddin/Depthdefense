"use client";

import { AnimatedList } from "./AboutUs";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "END POINT SECURITY",
    description: "",
    time: "",
    icon: "🔐",
    color: "#00C9A7",
  },
  {
    name: "SECURITY MONITORING",
    description: "",
    time: "",
    icon: "🖥️",
    color: "#FFB800",
  },
  {
    name: "NETWORK SECURITY/SOLUTION",
    description: "",
    time: "",
    icon: "🛜",
    color: "#FF3D71",
  },
  {
    name: "ACCESS CONTROL",
    description: "",
    time: "",
    icon: "🕵️‍♂️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={`relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]`}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="w-full ptb-100">
      <div className="w-full text-center">
        <h3 className="text-3xl font-medium text-red-600">What we do</h3>
        <p className="text-4xl text-black">
          The Perfect Solution For all Protection
        </p>
      </div>
      <div className="relative flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg  bg-background p-6 ">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
