"use client";

import type { SiteContent, BlogPost } from "@/lib/types";
import { ImageField } from "./ImageField";
import { Button } from "@/components/ui/button";

const DEFAULT_POST: BlogPost = {
  title: "",
  excerpt: "",
  category: "",
  date: "",
  image: "",
};

export function BlogEditor({
  data,
  onChange,
}: {
  data: SiteContent["blog"];
  onChange: (data: SiteContent["blog"]) => void;
}) {
  function addPost() {
    onChange({
      ...data,
      posts: [...data.posts, { ...DEFAULT_POST, id: `post-${Date.now()}` }],
    });
  }

  function removePost(index: number) {
    onChange({
      ...data,
      posts: data.posts.filter((_, i) => i !== index),
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-foreground">Blog</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Title</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
            className="w-full bg-background border border-input rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Subtitle</label>
          <input
            type="text"
            value={data.subtitle}
            onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
            className="w-full bg-background border border-input rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label className="block text-sm text-muted-foreground mb-1">CTA button</label>
          <input
            type="text"
            value={data.cta}
            onChange={(e) => onChange({ ...data, cta: e.target.value })}
            className="w-full bg-background border border-input rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <span className="text-sm text-muted-foreground">
          {data.posts.length} post{data.posts.length !== 1 ? "s" : ""}
        </span>
        <Button type="button" onClick={addPost} size="sm">
          Add post
        </Button>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left font-medium p-3 text-muted-foreground w-[180px]">Image (upload or URL)</th>
                <th className="text-left font-medium p-3 text-muted-foreground">Title</th>
                <th className="text-left font-medium p-3 text-muted-foreground w-[120px]">Category</th>
                <th className="text-left font-medium p-3 text-muted-foreground w-[100px]">Date</th>
                <th className="text-left font-medium p-3 text-muted-foreground min-w-[140px]">Excerpt</th>
                <th className="text-right font-medium p-3 text-muted-foreground w-[80px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.posts.map((post, i) => (
                <tr
                  key={post.id ?? `post-${i}`}
                  className="border-b border-border hover:bg-muted/20"
                >
                  <td className="p-3 align-top w-[180px]">
                    <ImageField
                      label={post.image ? "Featured image" : "Upload image for this post"}
                      value={post.image}
                      onChange={(image) => {
                        const posts = [...data.posts];
                        posts[i] = { ...posts[i], image };
                        onChange({ ...data, posts });
                      }}
                      compact
                      showUploadHint={!post.image}
                    />
                  </td>
                  <td className="p-2 align-top">
                    <input
                      type="text"
                      placeholder="Title"
                      value={post.title}
                      onChange={(e) => {
                        const posts = [...data.posts];
                        posts[i] = { ...posts[i], title: e.target.value };
                        onChange({ ...data, posts });
                      }}
                      className="w-full bg-background border border-input rounded px-2 py-1.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </td>
                  <td className="p-2 align-top">
                    <input
                      type="text"
                      placeholder="Category"
                      value={post.category}
                      onChange={(e) => {
                        const posts = [...data.posts];
                        posts[i] = { ...posts[i], category: e.target.value };
                        onChange({ ...data, posts });
                      }}
                      className="w-full bg-background border border-input rounded px-2 py-1.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </td>
                  <td className="p-2 align-top">
                    <input
                      type="text"
                      placeholder="Date"
                      value={post.date}
                      onChange={(e) => {
                        const posts = [...data.posts];
                        posts[i] = { ...posts[i], date: e.target.value };
                        onChange({ ...data, posts });
                      }}
                      className="w-full bg-background border border-input rounded px-2 py-1.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </td>
                  <td className="p-2 align-top">
                    <textarea
                      placeholder="Excerpt"
                      value={post.excerpt}
                      onChange={(e) => {
                        const posts = [...data.posts];
                        posts[i] = { ...posts[i], excerpt: e.target.value };
                        onChange({ ...data, posts });
                      }}
                      rows={2}
                      className="w-full min-w-[120px] bg-background border border-input rounded px-2 py-1.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                    />
                  </td>
                  <td className="p-2 align-top text-right">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removePost(i)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
