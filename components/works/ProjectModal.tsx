"use client";

import Image from "next/image";
import { Code2, ExternalLink, FolderOpen, Globe, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/types/portfolio";
import { useLocale } from "@/providers/LocaleProvider";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

interface MetaItemProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function MetaItem({ icon, label, value }: MetaItemProps) {
  return (
    <div className="flex items-start gap-2.5 text-sm text-gray-600">
      <span className="mt-0.5 shrink-0 text-accent">{icon}</span>
      <span>
        <strong className="font-semibold text-gray-800">{label} :</strong>{" "}
        {value}
      </span>
    </div>
  );
}

const ANIMATION_MS = 280;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLocale();
  const [displayProject, setDisplayProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(onClose, ANIMATION_MS);
  }, [onClose]);

  useEffect(() => {
    if (project) {
      setDisplayProject(project);
      setIsVisible(false);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
      return () => cancelAnimationFrame(frame);
    }

    setIsVisible(false);
  }, [project]);

  useEffect(() => {
    if (!project && !isVisible && displayProject) {
      const timer = window.setTimeout(
        () => setDisplayProject(null),
        ANIMATION_MS,
      );
      return () => clearTimeout(timer);
    }
  }, [project, isVisible, displayProject]);

  useEffect(() => {
    if (!displayProject) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayProject, handleClose]);

  if (!displayProject) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm transition-opacity duration-300 ease-out motion-reduce:transition-none",
        isVisible ? "opacity-100" : "opacity-0",
      )}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className={cn(
          "relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ease-out motion-reduce:transition-none",
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-[0.97] opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={t.projectModal.close}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-surface-muted text-gray-500 transition-colors hover:bg-surface-slate hover:text-accent"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="shrink-0 px-10 pb-5 pt-10">
          <h2
            id="project-modal-title"
            className="text-center text-2xl font-bold text-accent md:text-3xl"
          >
            {displayProject.title}
          </h2>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto px-10 pb-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <MetaItem
              icon={<FolderOpen className="h-4 w-4" />}
              label={t.projectModal.project}
              value={displayProject.type}
            />
            <MetaItem
              icon={<Globe className="h-4 w-4" />}
              label={t.projectModal.client}
              value={displayProject.client}
            />
            <MetaItem
              icon={<Code2 className="h-4 w-4" />}
              label={t.projectModal.languages}
              value={displayProject.languages.join(", ")}
            />
            <MetaItem
              icon={<ExternalLink className="h-4 w-4" />}
              label={t.projectModal.preview}
              value={
                <a
                  href={displayProject.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {displayProject.previewUrl.replace(/^https?:\/\//, "")}
                </a>
              }
            />
          </div>

          <p className="text-base leading-relaxed text-gray-600">
            {displayProject.description}
          </p>
        </div>

        <div className="shrink-0 border-t border-surface-slate bg-surface-muted p-8">
          <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-white">
            <Image
              src={displayProject.featuredImage}
              alt={displayProject.title}
              width={960}
              height={540}
              className="max-h-full max-w-full object-contain p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
