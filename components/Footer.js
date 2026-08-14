export default function Footer() {
  return (
    <footer className="callno flex flex-col gap-2 border-t-2 border-borderStrong px-5 py-6 text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7 lg:px-14">
      <span>© {new Date().getFullYear()} TATIANA UKLIST</span>
      <span>COMMUNITY &amp; GENERAL WRITING</span>
    </footer>
  );
}
