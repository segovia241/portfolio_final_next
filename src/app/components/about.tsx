import Image from "next/image";
import { Button } from "@components/ui/button";
import { FileText, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import TextLookup from "@components/text-lookup";

export default function About() {
  const experiences = [
    {
      title: <TextLookup>title_1</TextLookup>,
      company: <TextLookup>company_1</TextLookup>,
      period: <TextLookup>period_1</TextLookup>,
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      title: <TextLookup>title_2</TextLookup>,
      company: <TextLookup>company_2</TextLookup>,
      period: <TextLookup>period_2</TextLookup>,
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      title: <TextLookup>title_3</TextLookup>,
      company: <TextLookup>company_3</TextLookup>,
      period: <TextLookup>period_3</TextLookup>,
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section id="about" className="py-16 bg-muted/50 relative">
      {/* Background animation */}
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TextLookup>about_me</TextLookup>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-float">
              <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/profile_picture.png?height=320&width=320"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 mx-5">
              <TextLookup>who_i_am</TextLookup>
            </h3>
            <p className="mb-10 mx-5">
              <TextLookup>about_description</TextLookup>
            </p>
            <p className="mb-6 mx-5">
              <TextLookup>experience_description</TextLookup>
            </p>

            <div className="space-y-4 mb-6 mx-5">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover-scale"
                >
                  <div className="p-2 rounded-full bg-primary/10">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="hover-scale mx-5">
              <Link href="/resume.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" />{" "}
                <div className="text-background">
                  <TextLookup>download_resume</TextLookup>
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
