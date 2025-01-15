import ThemeSwicher from "@/components/ThemeSwicher";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-mono)] bg-teal-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <header className="border-b border-gray-400/50 dark:border-gray-50/20 flex items-center justify-center w-full h-20">
        <ThemeSwicher />
      </header>

      <main className="container mx-auto px-4 my-10">
        <div className="space-y-3">
          <h1 className="text-5xl font-semibold">Next Themes</h1>
          <p>
            Switching themes with next-themes, a popular theme management
            library for Next.js, is a breeze. It simplifies implementing
            light/dark mode and other theme customizations effortlessly.
          </p>
        </div>
      </main>
    </div>
  );
}
