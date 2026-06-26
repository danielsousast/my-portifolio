import Image from "next/image";
import type { BlogPost } from "@/types/portfolio";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-[#F3F6F6] transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden bg-white">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-contain p-4 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{post.date}</span>
          <span>·</span>
          <span className="text-accent">{post.category}</span>
        </div>
        <h3 className="mt-2 text-base font-bold text-gray-900">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
