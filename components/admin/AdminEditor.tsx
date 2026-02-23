"use client";

import { useState } from "react";
import type { SiteContent } from "@/lib/types";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroEditor } from "./HeroEditor";
import { SkillsEditor } from "./SkillsEditor";
import { TeamEditor } from "./TeamEditor";
import { FaqsEditor } from "./FaqsEditor";
import { CareersEditor } from "./CareersEditor";
import { TestimonialsEditor } from "./TestimonialsEditor";
import { BlogEditor } from "./BlogEditor";
import { CoursesEditor } from "./CoursesEditor";
import { TutorsEditor } from "./TutorsEditor";
import { AboutEditor } from "./AboutEditor";
import { FooterEditor } from "./FooterEditor";
import { ContactSubmissions } from "./ContactSubmissions";
import { ApplicationsList } from "./ApplicationsList";
import { cn } from "@/lib/utils";

const PAGES = [
  "Home",
  "Courses",
  "Tutors",
  "About",
  "Careers",
  "Blog",
  "Site",
  "Applications",
  "Contact",
] as const;

type Page = (typeof PAGES)[number];

const HOME_SECTIONS = [
  { label: "Hero", key: "hero" },
  { label: "Skills", key: "skills" },
  { label: "Team", key: "team" },
  { label: "FAQs", key: "faqs" },
  { label: "Careers", key: "careers" },
  { label: "Testimonials", key: "testimonials" },
  { label: "Blog", key: "blog" },
] as const;

const PAGE_SECTION_KEY: Record<Exclude<Page, "Home" | "Contact" | "Applications">, string> = {
  Courses: "courses",
  Tutors: "tutors",
  About: "about",
  Careers: "careers",
  Blog: "blog",
  Site: "site",
};

const SITE_SUB_SECTIONS = [
  { label: "Site name", key: "site" },
  { label: "Footer", key: "footer" },
  { label: "Contact page", key: "contactPage" },
  { label: "Apply page", key: "applyPage" },
] as const;

export function AdminEditor({
  content,
  onSave,
  onSaveSection,
  saving,
}: {
  content: SiteContent;
  onSave: (c: SiteContent) => void;
  onSaveSection?: (sectionKey: string, data: Record<string, unknown>) => void;
  saving: boolean;
}) {
  const [currentPage, setCurrentPage] = useState<Page>("Home");
  const [homeSection, setHomeSection] = useState<string>("hero");
  const [siteSection, setSiteSection] = useState<
    "site" | "footer" | "contactPage" | "applyPage"
  >("site");
  const [draft, setDraft] = useState<SiteContent>(content);

  function update(partial: Partial<SiteContent>) {
    setDraft((prev) => ({ ...prev, ...partial }));
  }

  function handleSave() {
    onSave(draft);
  }

  function getSectionData(key: string): Record<string, unknown> {
    if (key === "site") return { siteName: draft.siteName };
    if (key === "contactPage")
      return {
        title: draft.contactPage?.title ?? "Contact Us",
        subtitle: draft.contactPage?.subtitle ?? "",
      };
    if (key === "applyPage")
      return {
        title: draft.applyPage?.title ?? "Apply for a course",
        subtitle: draft.applyPage?.subtitle ?? "",
      };
    const data = draft[key as keyof SiteContent];
    return (data ?? {}) as Record<string, unknown>;
  }

  function handleSaveSection(key: string) {
    onSaveSection?.(key, getSectionData(key));
  }

  return (
    <SidebarProvider>
      <Sidebar collapsible="none" className="border-r border-sidebar-border">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {PAGES.map((p) => (
                  <SidebarMenuItem key={p}>
                    <SidebarMenuButton
                      isActive={currentPage === p}
                      onClick={() => setCurrentPage(p)}
                    >
                      {p}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <div className="flex flex-col gap-6 p-6">
      {currentPage === "Contact" && (
        <Card>
          <CardHeader>
            <CardTitle>Contact form submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactSubmissions />
          </CardContent>
        </Card>
      )}

      {currentPage === "Applications" && (
        <Card>
          <CardHeader>
            <CardTitle>Course applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ApplicationsList />
          </CardContent>
        </Card>
      )}

      {currentPage !== "Contact" && currentPage !== "Applications" && (
        <>
          {currentPage === "Home" && (
            <div className="flex flex-wrap gap-2 mb-4">
              {HOME_SECTIONS.map(({ label, key }) => (
                <Button
                  key={key}
                  type="button"
                  variant={homeSection === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setHomeSection(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          )}

          {currentPage === "Site" && (
            <div className="flex flex-wrap gap-2 mb-4">
              {SITE_SUB_SECTIONS.map(({ label, key }) => (
                <Button
                  key={key}
                  type="button"
                  variant={siteSection === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSiteSection(key)}
                  className={cn(
                    siteSection === key && "bg-primary text-primary-foreground"
                  )}
                >
                  {label}
                </Button>
              ))}
            </div>
          )}

          <Card>
              <CardHeader className="flex flex-row items-center justify-between gap-4 flex-wrap space-y-0">
                <CardTitle>
                  {currentPage === "Home"
                    ? `Home · ${HOME_SECTIONS.find((s) => s.key === homeSection)?.label ?? homeSection}`
                    : currentPage === "Site"
                      ? `Site · ${SITE_SUB_SECTIONS.find((s) => s.key === siteSection)?.label}`
                      : currentPage}
                </CardTitle>
                {onSaveSection && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() =>
                      handleSaveSection(
                        currentPage === "Home"
                          ? homeSection
                          : currentPage === "Site"
                            ? siteSection
                            : PAGE_SECTION_KEY[currentPage]
                      )
                    }
                    disabled={saving}
                  >
                    {saving ? "Saving…" : "Save this section"}
                  </Button>
                )}
              </CardHeader>
              <CardContent>

              {currentPage === "Home" && homeSection === "hero" && (
                <HeroEditor data={draft.hero} onChange={(hero) => update({ hero })} />
              )}
              {currentPage === "Home" && homeSection === "skills" && (
                <SkillsEditor data={draft.skills} onChange={(skills) => update({ skills })} />
              )}
              {currentPage === "Home" && homeSection === "team" && (
                <TeamEditor data={draft.team} onChange={(team) => update({ team })} />
              )}
              {currentPage === "Home" && homeSection === "faqs" && (
                <FaqsEditor data={draft.faqs} onChange={(faqs) => update({ faqs })} />
              )}
              {currentPage === "Home" && homeSection === "careers" && (
                <CareersEditor data={draft.careers} onChange={(careers) => update({ careers })} />
              )}
              {currentPage === "Home" && homeSection === "testimonials" && (
                <TestimonialsEditor
                  data={draft.testimonials}
                  onChange={(testimonials) => update({ testimonials })}
                />
              )}
              {currentPage === "Home" && homeSection === "blog" && (
                <BlogEditor data={draft.blog} onChange={(blog) => update({ blog })} />
              )}

              {currentPage === "Courses" && (
                <CoursesEditor data={draft.courses} onChange={(courses) => update({ courses })} />
              )}
              {currentPage === "Tutors" && (
                <TutorsEditor data={draft.tutors} onChange={(tutors) => update({ tutors })} />
              )}
              {currentPage === "About" && (
                <AboutEditor data={draft.about} onChange={(about) => update({ about })} />
              )}
              {currentPage === "Careers" && (
                <CareersEditor data={draft.careers} onChange={(careers) => update({ careers })} />
              )}
              {currentPage === "Blog" && (
                <BlogEditor data={draft.blog} onChange={(blog) => update({ blog })} />
              )}
              {currentPage === "Site" && siteSection === "site" && (
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Site name</label>
                  <input
                    type="text"
                    value={draft.siteName}
                    onChange={(e) =>
                      setDraft((prev) => ({ ...prev, siteName: e.target.value }))
                    }
                    className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
                  />
                </div>
              )}
              {currentPage === "Site" && siteSection === "footer" && (
                <FooterEditor
                  data={draft.footer}
                  onChange={(footer) => update({ footer })}
                />
              )}
              {currentPage === "Site" && siteSection === "contactPage" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Contact page title</label>
                    <input
                      type="text"
                      value={draft.contactPage?.title ?? ""}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          contactPage: {
                            ...prev.contactPage,
                            title: e.target.value,
                            subtitle: prev.contactPage?.subtitle ?? "",
                          },
                        }))
                      }
                      className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Contact page subtitle</label>
                    <input
                      type="text"
                      value={draft.contactPage?.subtitle ?? ""}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          contactPage: {
                            ...prev.contactPage,
                            title: prev.contactPage?.title ?? "",
                            subtitle: e.target.value,
                          },
                        }))
                      }
                      className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              )}
              {currentPage === "Site" && siteSection === "applyPage" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Apply page title</label>
                    <input
                      type="text"
                      value={draft.applyPage?.title ?? ""}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          applyPage: {
                            ...prev.applyPage,
                            title: e.target.value,
                            subtitle: prev.applyPage?.subtitle ?? "",
                          },
                        }))
                      }
                      className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Apply page subtitle</label>
                    <input
                      type="text"
                      value={draft.applyPage?.subtitle ?? ""}
                      onChange={(e) =>
                        setDraft((prev) => ({
                          ...prev,
                          applyPage: {
                            ...prev.applyPage,
                            title: prev.applyPage?.title ?? "",
                            subtitle: e.target.value,
                          },
                        }))
                      }
                      className="w-full bg-dark border border-dark-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              )}
              </CardContent>
            </Card>

          <div className="flex justify-end">
            <Button
              type="button"
              onClick={handleSave}
              disabled={saving}
              size="lg"
            >
              {saving ? "Saving…" : "Save all changes"}
            </Button>
          </div>
        </>
      )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
