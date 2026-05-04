import Image from "next/image";
import CalendarIcon from "../../icons/CalendarIcon";

export default function CourseDetailsLayout() {
  return (
    <section className="w-fit flex flex-col p-8 gap-8 bg-white rounded-[35px]">
      <div className="overflow-hidden w-auto rounded-[35px]">
        <Image
          alt="test"
          src="https://filestoragesuper.blob.core.windows.net/images/25b8346e-463a-4e10-9ea6-c4d7655121b9.webp"
          width={1000}
          height={700}
        />
      </div>
      <h2 className="header-semi-40">Foundations of Digital Marketing</h2>
      <section className="flex gap-4">
        <CalendarIcon />
        <CalendarIcon />
        <CalendarIcon />
        <CalendarIcon />
        <CalendarIcon />
      </section>
    </section>
  );
}
