"use client";

import type { SiteContent } from "@/lib/types";
import type { Course } from "@/lib/types";
import { ImageField } from "./ImageField";

const DEFAULT_COURSE: Course = {
  title: "",
  description: "",
  category: "Music Production",
  duration: "",
  price: "",
  image: "",
  lessons: "",
};

export function CoursesEditor({
  data,
  onChange,
}: {
  data: SiteContent["courses"];
  onChange: (data: SiteContent["courses"]) => void;
}) {
  function addCourse() {
    onChange({ ...data, items: [...data.items, { ...DEFAULT_COURSE }] });
  }

  function removeCourse(index: number) {
    onChange({
      ...data,
      items: data.items.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">Courses</h2>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Title</label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Subtitle</label>
        <input
          type="text"
          value={data.subtitle}
          onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1">Category tabs (comma-separated)</label>
        <input
          type="text"
          value={data.categories.join(", ")}
          onChange={(e) =>
            onChange({
              ...data,
              categories: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
            })
          }
          className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
        />
      </div>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm text-gray-400">
          {data.items.length} course{data.items.length !== 1 ? "s" : ""}
        </span>
        <button
          type="button"
          onClick={addCourse}
          className="px-4 py-2 bg-gold hover:bg-gold-dark text-dark text-sm font-semibold rounded-lg transition-colors"
        >
          Add course
        </button>
      </div>
      {data.items.map((course, i) => (
        <div key={i} className="border border-dark-border rounded-xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-gold font-medium">Course {i + 1}</h3>
            <button
              type="button"
              onClick={() => removeCourse(i)}
              className="text-xs text-red-400 hover:text-red-300 transition-colors"
            >
              Remove
            </button>
          </div>
          <ImageField
            label="Image"
            value={course.image}
            onChange={(image) => {
              const items = [...data.items];
              items[i] = { ...items[i], image };
              onChange({ ...data, items });
            }}
          />
          <input
            type="text"
            placeholder="Title"
            value={course.title}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], title: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <input
            type="text"
            placeholder="Category"
            value={course.category}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], category: e.target.value };
              onChange({ ...data, items });
            }}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <textarea
            placeholder="Description"
            value={course.description}
            onChange={(e) => {
              const items = [...data.items];
              items[i] = { ...items[i], description: e.target.value };
              onChange({ ...data, items });
            }}
            rows={2}
            className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
          />
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Duration"
              value={course.duration}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = { ...items[i], duration: e.target.value };
                onChange({ ...data, items });
              }}
              className="flex-1 min-w-[100px] bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              placeholder="Price"
              value={course.price}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = { ...items[i], price: e.target.value };
                onChange({ ...data, items });
              }}
              className="flex-1 min-w-[100px] bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              placeholder="Lessons"
              value={course.lessons}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = { ...items[i], lessons: e.target.value };
                onChange({ ...data, items });
              }}
              className="flex-1 min-w-[100px] bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
            <input
              type="text"
              placeholder="Badge"
              value={course.badge ?? ""}
              onChange={(e) => {
                const items = [...data.items];
                items[i] = { ...items[i], badge: e.target.value || undefined };
                onChange({ ...data, items });
              }}
              className="flex-1 min-w-[100px] bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
