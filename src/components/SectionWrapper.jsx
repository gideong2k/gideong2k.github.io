export default function SectionWrapper({ id, children }) {
  return (
    <section id={id} className="min-h-screen pl-60 py-20 px-10 bg-white">
      {children}
    </section>
  );
}
