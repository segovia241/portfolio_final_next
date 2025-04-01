"use client";
import ThemeToggleButton from "@components/themeToggleButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <ThemeToggleButton />

      <div className="bg-muted rounded-lg p-6 shadow-md shadow-primary my-8">
        <div>
          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2">
            <svg
              className="h-6 w-6 stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 8v4l3 3"></path>
            </svg>
          </span>
        </div>
        <h3 className="text-primary mt-5 text-base font-medium tracking-tight">
          Writes upside-down
        </h3>
        <p className="text-muted-foreground mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </div>
  );
}
