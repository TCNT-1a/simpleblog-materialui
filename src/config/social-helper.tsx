import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faTelegramPlane,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SocialIcon: Record<string, IconDefinition> = {
  Facebook: faFacebookSquare,
  Telegram: faTelegramPlane,
  Twitter: faTwitterSquare,
  Youtube: faYoutube,
  Instagram: faInstagram,
  X: faX,
};

export function getSocialIcon(name: string): IconDefinition | null {
  return SocialIcon[name] || null;
}

export function FormatSocialIcon(contacts: string): Social[] {
  const arr = contacts.split("\n");
  const r = arr.map((element) => {
    if (element.includes("facebook.com")) {
      return {
        href: element,
        icon: getSocialIcon("Facebook"),
        title: "Facebook",
      } as Social;
    }
    if (element.includes("t.me")) {
      return {
        href: element,
        icon: getSocialIcon("Telegram"),
        title: "Telegram",
      } as Social;
    }
    if (element.includes("twitter.com")) {
      return {
        href: element,
        icon: getSocialIcon("Twitter"),
        title: "Twitter",
      } as Social;
    }
    if (element.includes("x.com")) {
      return {
        href: element,
        icon: getSocialIcon("X"),
        title: "X",
      } as Social;
    }
    if (element.includes("youtube.com") || element.includes("youtu.be")) {
      return {
        href: element,
        icon: getSocialIcon("Youtube"),
        title: "Youtube",
      } as Social;
    }
  });
  return r.filter((element) => element !== undefined) as Social[];
}
export type Social = {
  href: string;
  icon: IconDefinition;
  title: string;
};
