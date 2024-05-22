import {
  faFacebookSquare,
  faInstagram,
  faTelegramPlane,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const HOST = "http://localhost:1337";
export const THEME_DEFAULT = `theme-default`;
export const BRANCH_NAME = `Airwork chain`;

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const SocialIcon: Record<string, IconDefinition> = {
  Facebook: faFacebookSquare,
  Telegram: faTelegramPlane,
  Twitter: faTwitterSquare,
  Youtube: faYoutube,
  Instagram: faInstagram,
};

function getSocialIcon(name: string): IconDefinition | null {
  return SocialIcon[name] || null;
}

export const SOCIALS = [
  {
    href: "https://www.facebook.com/tachinguyen.dev",
    icon: getSocialIcon("Facebook"),
    title: "Facebook",
  },
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
