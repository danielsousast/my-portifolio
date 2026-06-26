"use client";

import Image from "next/image";
import { ExternalLink, FolderOpen, Globe, X } from "lucide-react";
import type { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg transition-colors hover:text-accent"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-center text-2xl font-bold text-accent">
          {project.title}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FolderOpen className="h-4 w-4 text-accent" />
            <span>
              <strong>Project :</strong> {project.type}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="h-4 w-4 text-accent" />
            <span>
              <strong>Client :</strong> {project.client}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FolderOpen className="h-4 w-4 text-accent" />
            <span>
              <strong>Languages :</strong> {project.languages.join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ExternalLink className="h-4 w-4 text-accent" />
            <span>
              <strong>Preview :</strong>{" "}
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {project.previewUrl.replace(/^https?:\/\//, "")}
              </a>
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl">
          <Image
            src={project.featuredImage}
            alt={project.title}
            width={800}
            height={450}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
