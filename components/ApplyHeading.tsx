"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

function prettyCourseLabel(s: string) {
  return (s || "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .trim();
}

export function ApplyHeading() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course") ?? searchParams.get("program") ?? "";
  const title = useMemo(
    () => (courseParam ? prettyCourseLabel(courseParam) : "a course"),
    [courseParam]
  );

  return <span id="courseTitle">{title}</span>;
}
