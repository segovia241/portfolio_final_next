import { Database, Layout, Palette, Server, Workflow } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import TextLookup from "@components/text-lookup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faJava,
  faPython,
  faFigma,
  faGithub,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"; // Íconos de marcas
import {
  faPalette,
  faCode,
  faArrowAltCircleUp,
  faBox,
  faCloudSun,
  faRocket,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons"; // Íconos sólidos

export default function Skills() {
  const skillCategories = [
    {
      title: <TextLookup>frontend</TextLookup>,
      description: <TextLookup>frontend_description</TextLookup>,
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: [
        {
          name: "React",
          icon: <FontAwesomeIcon icon={faReact} className="h-4 w-4" />,
        },
        {
          name: "TypeScript",
          icon: <FontAwesomeIcon icon={faCode} className="h-4 w-4" />,
        },
        {
          name: "Next.js",
          icon: <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />,
        },
        {
          name: "Tailwind CSS",
          icon: <FontAwesomeIcon icon={faPalette} className="h-4 w-4" />,
        },
        {
          name: "HTML",
          icon: <FontAwesomeIcon icon={faHtml5} className="h-4 w-4" />, // Usando faHtml5 para representar HTML
        },
        {
          name: "CSS",
          icon: <FontAwesomeIcon icon={faCss3Alt} className="h-4 w-4" />, // Usando faCss3Alt para representar CSS
        },
      ],
    },
    {
      title: <TextLookup>backend</TextLookup>,
      description: <TextLookup>backend_description</TextLookup>,
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [
        {
          name: "Node.js",
          icon: <FontAwesomeIcon icon={faNodeJs} className="h-4 w-4" />,
        },
        {
          name: "Express",
          icon: <FontAwesomeIcon icon={faCode} className="h-4 w-4" />,
        },
        {
          name: "Flask",
          icon: <FontAwesomeIcon icon={faCode} className="h-4 w-4" />,
        },
        {
          name: "REST APIs",
          icon: <FontAwesomeIcon icon={faCode} className="h-4 w-4" />,
        },
      ],
    },
    {
      title: <TextLookup>database</TextLookup>,
      description: <TextLookup>database_description</TextLookup>,
      icon: <Database className="h-8 w-8 text-primary" />, // Usando faBox como sustituto
      skills: [
        {
          name: "MongoDB",
          icon: <FontAwesomeIcon icon={faBox} className="h-4 w-4" />,
        },
        {
          name: "PostgreSQL",
          icon: <FontAwesomeIcon icon={faBox} className="h-4 w-4" />,
        },
        {
          name: "MySQL",
          icon: <FontAwesomeIcon icon={faBox} className="h-4 w-4" />,
        },
      ],
    },
    {
      title: <TextLookup>design</TextLookup>,
      description: <TextLookup>design_description</TextLookup>,
      icon: <Palette className="h-8 w-8 text-primary" />,
      skills: [
        {
          name: "Figma",
          icon: <FontAwesomeIcon icon={faFigma} className="h-4 w-4" />, // Usando faFigma para representar Figma
        },
        {
          name: "UI/UX",
          icon: <FontAwesomeIcon icon={faPalette} className="h-4 w-4" />,
        },
        {
          name: "Responsive Design",
          icon: <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />,
        },
        {
          name: "Accessibility",
          icon: (
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="h-4 w-4" />
          ),
        },
      ],
    },
    {
      title: <TextLookup>devops</TextLookup>,
      description: <TextLookup>devops_description</TextLookup>,
      icon: <Workflow className="h-8 w-8 text-primary" />,
      skills: [
        {
          name: "Docker",
          icon: <FontAwesomeIcon icon={faDocker} className="h-4 w-4" />, // Usando faDocker
        },
        {
          name: "AWS",
          icon: <FontAwesomeIcon icon={faCloudSun} className="h-4 w-4" />, // Usando faCloudSun para representar AWS
        },
        {
          name: "Vercel",
          icon: <FontAwesomeIcon icon={faRocket} className="h-4 w-4" />,
        },
      ],
    },
    {
      title: <TextLookup>other_technologies</TextLookup>,
      description: <TextLookup>other_technologies_description</TextLookup>,
      icon: (
        <FontAwesomeIcon icon={faGithub} className="h-8 w-8 text-primary" />
      ),
      skills: [
        {
          name: "GitHub",
          icon: <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />, // Ícono de GitHub
        },
        {
          name: "JavaScript",
          icon: <FontAwesomeIcon icon={faJsSquare} className="h-4 w-4" />, // Usando faJsSquare para JavaScript
        },
        {
          name: "Java",
          icon: <FontAwesomeIcon icon={faJava} className="h-4 w-4" />, // Usando faJava para Java
        },
        {
          name: "Python",
          icon: <FontAwesomeIcon icon={faPython} className="h-4 w-4" />, // Usando faPython para Python
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 relative mx-5">
      {/* Background animation */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          <TextLookup>skills_technologies</TextLookup>
        </h2>

        {/* Replace grid with flex layout for better centering */}
        <div className="flex flex-wrap justify-center gap-5">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group mb-6 scale-100 hover-scale overflow-hidden w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                <div className="animate-float">{category.icon}</div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-1.5 group-hover:scale-105 transition-all duration-300"
                    >
                      {skill.icon}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
