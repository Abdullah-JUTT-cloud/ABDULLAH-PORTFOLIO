import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-[hsl(var(--border))]">
      <div className="shell-wide flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] text-muted-foreground/70">
          © 2026 Muhammad Abdullah · Lahore, Pakistan
        </p>
        <div className="flex items-center gap-5">
          <Link
            href="/work"
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
          >
            Work
          </Link>
          <Link
            href="/security"
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
          >
            Security
          </Link>
          <Link
            href="/credentials"
            className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-[hsl(var(--accent))]"
          >
            Credentials
          </Link>
        </div>
        <p className="font-mono text-[0.68rem] text-muted-foreground/70">
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
