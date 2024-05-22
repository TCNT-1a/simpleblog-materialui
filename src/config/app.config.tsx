import { getSocialIcon } from "./social-helper";

export const HOST = "http://localhost:1337";
export const THEME_DEFAULT = `theme-default`;
export const BRANCH_NAME = `Airwork chain`;

export const SOCIALS_DEFAULT = [
  {
    href: "https://www.facebook.com/tachinguyen.dev",
    icon: getSocialIcon("Facebook"),
    title: "Facebook",
  },
  {
    href: "https://t.me/tcnguyen93",
    icon: getSocialIcon("Telegram"),
    title: "Telegram",
  },
];
