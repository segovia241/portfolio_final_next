import { Button } from "@components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import TextLookup from "@components/text-lookup";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden h-screen"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
            <TextLookup>intro_greeting</TextLookup>{" "}
            <span className="text-primary relative inline-block">
              Joaquin Segovia
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary animate-shimmer"></span>
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            <TextLookup>job_title</TextLookup>
          </h2>
          <p className="text-lg max-w-2xl mb-8">
            <TextLookup>description_hero_about</TextLookup>
          </p>

          <div className="flex gap-4 mb-10">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hover-scale hover-glow rounded-full"
            >
              <Link
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hover-scale hover-glow rounded-full"
            >
              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              className="hover-scale hover-glow rounded-full"
            >
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          {/*
<Button asChild className="animate-pulse-slow hover-scale">
  <Link href="#projects">
    <div className="text-background">
      <TextLookup>view_my_work</TextLookup>{" "}
    </div>
    <ArrowDown className="ml-2 h-4 w-4 text-background" />
  </Link>
</Button>
*/}
        </div>
      </div>
    </section>
  );
}
