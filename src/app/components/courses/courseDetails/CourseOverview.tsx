"use client";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../../shared/LoadingSkeleton/LoadingSkeleton";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function CourseOverview() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      await sleep(2000);
      setData("Some data");
    }

    loadData();
  }, []);

  return (
    <LoadingSkeleton
      loading={!data}
      preLoadingClassName="min-h-40"
      label="Loading course overview..."
    >
      <p className="text-gray-700 text-lg">
        This is the course overview section. It contains a brief description of the course, its
        objectives, and what students can expect to learn. The overview provides an introduction to
        the course content and helps students understand the value of enrolling in the course.
      </p>
    </LoadingSkeleton>
  );
}
