import {
  BookOpen,
  Briefcase,
  Calendar,
  Download,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Palette,
  Phone,
  Smartphone,
  Camera,
  Code2,
  FolderOpen,
  MessageCircle,
  Share2,
  Globe,
  Circle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const navIcons: Record<string, LucideIcon> = {
  home: Home,
  resume: BookOpen,
  works: FolderOpen,
  blogs: MessageCircle,
  contact: Mail,
};

export const contactIcons: Record<string, LucideIcon> = {
  phone: Phone,
  location: MapPin,
  email: Mail,
  birthday: Calendar,
};

export const serviceIcons: Record<string, LucideIcon> = {
  design: Palette,
  development: Code2,
  photography: Camera,
  mobile: Smartphone,
};

export const socialIcons: Record<string, LucideIcon> = {
  facebook: Share2,
  twitter: Globe,
  dribbble: Circle,
  linkedin: Share2,
};

export { Briefcase, GraduationCap, Download };
