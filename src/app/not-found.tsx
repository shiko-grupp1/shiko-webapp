import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/assets/images/NotFoundImage.webp";

const NotFound = async () => {
  return (
    <section className="flex items-center justify-center gap-4 w-full h-dvh bg-p-1">
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <Image
          loading="eager"
          src={NotFoundImage}
          width={"500"}
          height={"500"}
          className="md:max-w-md h-auto"
          alt="404 image"
        />
        <h1 className="text-center text-white">Page Not Found!</h1>
        <p className="text-center text-white/24">
          Sorry, the page you are looking for doesn’t exist or has been removed. Keep exploring out
          site.
        </p>
        <Link className="bg-p-2" href="/" target="_blank">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
