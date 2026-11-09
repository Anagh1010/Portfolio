import { Markdown, PDF, Reactts } from "@react-symbols/icons/files";
import type { PortfolioTab } from "@/data/portfolio";

type FileIconProps = { file: string; className?: string };

export function FileIcon({ file, className = "" }: FileIconProps) {
  const Icon = file.endsWith(".md") ? Markdown : file.endsWith(".pdf") ? PDF : Reactts;
  return <Icon width={15} height={15} className={`file-icon ${className}`} aria-hidden="true" />;
}

export function PortfolioFileIcon({ file }: { file: PortfolioTab }) {
  return <FileIcon file={file} />;
}
