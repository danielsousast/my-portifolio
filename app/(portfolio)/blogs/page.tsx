"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blogs/BlogCard";
import { useLocale } from "@/providers/LocaleProvider";

export default function BlogsPage() {
  const { data, t } = useLocale();
  const { blogs } = data;

  return (
    <>
      <SectionHeading title={t.blogs} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
