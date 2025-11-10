import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grow flex flex-col items-center justify-center bg-slate-100/50 px-6">
      <div className="text-center space-y-6 bg-white shadow-lg rounded-4xl p-12">
        <p className=" inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
          404 · PAGE NOT FOUND
        </p>
        <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
          Lost in the pixels?
        </h1>
        <p className="text-gray-600 max-w-lg">
          The page you’re looking for doesn’t exist or was moved. Let’s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}