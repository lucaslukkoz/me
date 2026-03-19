export default function Footer() {
  return (
    <footer className="border-t border-border bg-linear-to-r from-slate-50 to-blue-50 py-8 text-center text-sm text-muted">
      &copy; {new Date().getFullYear()} Lucas. All rights reserved.
    </footer>
  );
}
