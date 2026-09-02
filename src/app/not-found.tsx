import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h2 className="display-lg mt-5 text-4xl text-foreground">
        This page doesn&apos;t <span className="display-flourish">exist.</span>
      </h2>
      <p className="mt-4 max-w-sm text-sm text-muted-foreground">
        The page you&apos;re looking for was moved or never existed.
      </p>
      <Link href="/" className="btn btn-solid mt-8">
        Back to home
      </Link>
    </div>
  );
}
