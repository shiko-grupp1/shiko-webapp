"use client";
import Image from "next/image";
import CourseDetailsNav from "./CourseDetailsNav";
import { useState } from "react";
import CourseOverview from "./CourseOverview";

type CourseDetailsLayoutProps = {
  videoUrl?: string;
  title?: string;
  lessonAmount?: number;
  duration?: string;
  reviewData?: string; //Should be review data type
};

const componentMap = {
  Overview: CourseOverview,
  FAQ: CourseOverview,
  Reviews: CourseOverview,
  Instructor: CourseOverview,
};

export default function CourseDetailsLayout({
  videoUrl,
  title,
  lessonAmount,
  duration,
  reviewData,
}: CourseDetailsLayoutProps) {
  const [activeComp, setActiveComp] = useState("Overview");
  const handleNavClick = (compName?: string) => {
    if (compName) setActiveComp(compName);
  };

  const SelectedComponent = componentMap[activeComp as keyof typeof componentMap] || null;

  const lessonInfoStyle =
    "flex items-center gap-5 after:content-[''] after:bg-light-white after:inline-block after:w-px after:h-2.5";

  return (
    <section className="w-fit min-h-full max-w-175 flex flex-col p-8 gap-8 bg-white rounded-[35px]">
      <div className="overflow-hidden w-auto rounded-[35px]">
        <Image
          alt="test"
          src="https://filestoragesuper.blob.core.windows.net/images/25b8346e-463a-4e10-9ea6-c4d7655121b9.webp"
          width={1000}
          height={700}
          className="w-auto h-auto object-cover"
          loading="eager"
        />
      </div>
      {title && <h2 className="header-semi-40">{title}</h2>}
      <ul className="flex gap-5 ">
        <li className={lessonInfoStyle}>{lessonAmount} lessons</li>
        <li className={lessonInfoStyle}>{duration} duration</li>
        <li>{reviewData} reviews</li>
      </ul>
      <CourseDetailsNav
        navItems={[
          { label: "Overview", compName: "Overview", onClick: handleNavClick },
          { label: "FAQ", compName: "FAQ", onClick: handleNavClick },
          { label: "Reviews", compName: "Reviews", onClick: handleNavClick },
          { label: "Instructor", compName: "Instructor", onClick: handleNavClick },
        ]}
      />
      <section>{SelectedComponent && <SelectedComponent />}</section>
    </section>
  );
}
