import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blogs/BlogCard";
import { getPortfolioData } from "@/lib/portfolio-data";

export default function BlogsPage() {
  const { blogs } = getPortfolioData();

  return (
    <>
      <SectionHeading title="Blogs" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
