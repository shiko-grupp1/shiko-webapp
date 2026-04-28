import Image from "next/image";
import NotFoundImage from "@/assets/images/NotFoundImage.webp";
import { Button } from "./components/shared/Button/Button";
import BtnArrowSvg from "./components/icons/BtnArrowSvg";

const NotFound = async () => {
  const icon = <BtnArrowSvg />;
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
        <h1 className="text-center body-70 text-white">Page Not Found!</h1>
        <p className="text-center md:text-body-22 text-white/24">
          Sorry, the page you are looking for doesn’t exist or has been removed. Keep exploring out
          site.
        </p>
        <Button href="/" className="body-24 md:mt-8" size="medium" icon={icon} iconPosition="right">
          Back to Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
