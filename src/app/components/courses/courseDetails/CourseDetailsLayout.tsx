import Image from "next/image";

export default function CourseDetailsLayout() {
  return (
    <section className="flex flex-col p-8 gap-8 bg-white rounded-lg">
      <Image
        alt="test"
        src="https://filestoragesuper.blob.core.windows.net/images/25b8346e-463a-4e10-9ea6-c4d7655121b9.webp"
        width={500}
        height={300}
      />
    </section>
  );
}
