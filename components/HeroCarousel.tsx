"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";

const SLIDES = [
  {
    id: "ceremony",
    image:
      "https://res.cloudinary.com/dgj7pnuwh/image/upload/v1776746657/DSC_8461_q0i6vs.jpg",
    title: "Train in production skills that employers notice",
    description:
      "From video and audio production to portfolio-ready work—graduate with certificates, confidence, and a network behind you.",
  },
  {
    id: "studio",
    image:
      "https://res.cloudinary.com/dgj7pnuwh/image/upload/v1776747456/SnapInsta.to_320731772_889078302098058_3388904451990086209_n_pudybc.jpg",
    title: "Tell stories in a studio built for makers",
    description:
      "Learn alongside instructors and peers in a creative environment—where ideas turn into real audio, video, and design work.",
  },
] as const;

const AUTO_MS = 7000;

export function HeroCarousel() {
  const labelId = useId();
  const regionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback((next: number) => {
    const len = SLIDES.length;
    setIndex((i) => ((next % len) + len) % len);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => window.clearInterval(t);
  }, [reducedMotion]);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(index + 1);
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [go, index]);

  const slide = SLIDES[index];

  return (
    <header
      ref={regionRef}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={labelId}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-zinc-900 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-white/40"
    >
      <div className="absolute inset-0" aria-hidden>
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-out ${
              i === index ? "opacity-100" : "opacity-0"
            } ${reducedMotion ? "transition-none" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/[0.72]" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8">
          <SiteHeader variant="home" />
        </div>

        <div className="container mx-auto flex flex-1 flex-col justify-end px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl" key={slide.id}>
              <h1
                id={labelId}
                className="float-in text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "120ms" }}
              >
                {slide.title}
              </h1>
              <p
                className="float-in mt-4 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg"
                style={{ animationDelay: "180ms" }}
              >
                {slide.description}
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/courses"
                className="float-in inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg transition hover:bg-zinc-100"
                style={{ animationDelay: "240ms" }}
              >
                Browse courses
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 sm:mt-12"
            role="group"
            aria-label="Carousel controls"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Slides">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Slide ${i + 1}: ${s.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-white" : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <p className="text-xs text-white/60 tabular-nums sm:ml-auto">
              <span className="sr-only">Slide </span>
              {index + 1} / {SLIDES.length}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
