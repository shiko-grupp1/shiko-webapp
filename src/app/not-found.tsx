import Image from "next/image";
import Link from "next/link";
import { getData } from "./lib/getData";

export enum LinkTarget {
  Blank = "_blank",
  Self = "_self",
  Parent = "_parent",
  Top = "_top",
}

export type LinkItem = {
  title: string;
  linkUrl: string;
  target?: LinkTarget;
};

export type NotFoundItem = {
  title: string;
  description: string;
  imageUrl: string;
  linkItems: LinkItem[];
};

const NotFound = async () => {
  const apiUrl = process.env.NOT_FOUND_API_URL || "";
  const apiKey = process.env.NOT_FOUND_API_KEY || "";
  const headers: HeadersInit = {
    "X-API-KEY": apiKey,
  };

  const data = await getData<NotFoundItem>(apiUrl, headers, 3600);

  if (typeof data === "string") return;

  const { title, description, imageUrl, linkItems } = data;

  const linkData = linkItems[0];

  return (
    <section className="flex items-center justify-center gap-4 w-full h-dvh bg-p-1">
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <Image
          loading="eager"
          src={imageUrl}
          width={"500"}
          height={"500"}
          className="md:max-w-md h-auto"
          alt="404 image"
        />
        <h1 className="text-center text-white">{title}</h1>
        <p className="text-center text-white/24">{description}</p>
        <Link href={linkData?.linkUrl} target={linkData?.target ?? "_self"}>
          {linkData?.title}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
