import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getSubjectColor = (subject: string) => {
  switch (subject.toLowerCase()) {
    case "science":
      return "#C8F7C5";

    case "maths":
      return "#FFF3B0";

    case "language":
      return "#BDE0FE";

    default:
      return "#E5E7EB";
  }
};