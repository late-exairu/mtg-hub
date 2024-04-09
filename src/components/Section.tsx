type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  const { children } = props;
  return <section className="py-5 lg:py-6">{children}</section>;
}
