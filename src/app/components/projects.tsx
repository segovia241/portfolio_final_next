import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Star, Eye, GitFork } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import TextLookup from "@components/text-lookup";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product listings, cart functionality, and secure checkout.",
      image: "/window.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: {
        stars: 45,
        views: 1200,
        forks: 12,
      },
    },
    {
      title: "Task Management App",
      description:
        "A productivity application for managing tasks, projects, and team collaboration.",
      image: "/window.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: {
        stars: 32,
        views: 980,
        forks: 8,
      },
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather information with forecasts, maps, and location-based data.",
      image: "/window.svg?height=400&width=600",
      tags: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      stats: {
        stars: 28,
        views: 850,
        forks: 5,
      },
    },
  ];

  return (
    <section id="projects" className="py-16 bg-muted/50 relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TextLookup>featured_projects</TextLookup>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden flex flex-col h-full hover-scale group shadow-primary shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={project.image || "/window.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="animate-float"
                      style={{ animationDelay: `${tagIndex * 0.1}s` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stats.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.stats.forks}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="hover-scale"
                >
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />{" "}
                    <TextLookup>code</TextLookup>
                  </Link>
                </Button>
                <Button asChild size="sm" className="hover-scale">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />{" "}
                    <div className="text-background">
                      <TextLookup>live_demo</TextLookup>
                    </div>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
