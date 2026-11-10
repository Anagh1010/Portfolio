import {
  BracketsYellow,
  Markdown,
  PDF,
  Reactts,
  Shell,
  Text,
  TypeScript,
} from "@react-symbols/icons/files";
import type { PortfolioTab } from "@/data/portfolio";

export function FolderIcon({ className = "h-3.5 w-3.5 text-zinc-500" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Folder"
      role="img"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
      <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
    </svg>
  );
}

export function FileIcon({ file, className = "" }: { file: string; className?: string }) {
  if (file.endsWith(".md")) {
    return <Markdown width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  if (file.endsWith(".pdf")) {
    return <PDF width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  if (file.endsWith("package.json") || file.endsWith(".json")) {
    return <BracketsYellow width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  if (file.endsWith(".sh")) {
    return <Shell width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  if (file.endsWith(".log") || file.endsWith(".txt")) {
    return <Text width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  if (file.endsWith(".ts")) {
    return <TypeScript width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
  }
  return <Reactts width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
}

export function PortfolioFileIcon({ file, className = "" }: { file: PortfolioTab; className?: string }) {
  return <FileIcon file={file} className={className} />;
}
