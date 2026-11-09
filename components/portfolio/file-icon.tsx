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
