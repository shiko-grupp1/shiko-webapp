"use client";

import { useState } from "react";
import { Button } from "../../shared/Button/Button";

export type CourseNavItem = {
  label: string;
  compName?: string;
  onClick: (compName?: string) => void;
};

type CourseDetailsNavProps = {
  navItems?: CourseNavItem[];
};

export default function CourseDetailsNav({ navItems }: CourseDetailsNavProps) {
  const [activeNav, setActiveNav] = useState<string>("Overview");

  if (!navItems || navItems.length === 0) return;

  return (
    <nav className="flex gap-5 justify-start items-center">
      {navItems?.map((item, index) => (
        <Button
          key={index + item?.label}
          variant="neutral"
          className={activeNav === item?.label ? "bg-p-1! text-white!" : ""}
          onClick={() => {
            item?.onClick(item?.compName);
            setActiveNav(item.label);
          }}
        >
          {item.label}
        </Button>
      ))}
    </nav>
  );
}
