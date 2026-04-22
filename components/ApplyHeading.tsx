"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { COURSES_BY_APPLY_PARAM } from "@/lib/courses";

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
    () => (courseParam ? COURSES_BY_APPLY_PARAM[courseParam]?.title ?? prettyCourseLabel(courseParam) : "a course"),
    [courseParam]
  );

  return <span id="courseTitle">{title}</span>;
}
