type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
};

export function SectionHeading({ number, label, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-index">{number} <span>/</span> {label}</div>
      <h2>{title}</h2>
    </div>
  );
}
