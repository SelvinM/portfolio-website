import ProjectInfo from "@/components/ProjectInfo";
import Tag from "@/components/Tag";
import { FaLink } from "react-icons/fa";
const projects = [
  {
    title: "Laptop Outlet's E-commerce Platform",
    description:
      "A robust e-commerce platform. It includes advanced features like advanced faceted search, an Elasticsearch-powered search bar, password-less login, order tracking, automated inventory management, and adherence to SEO (Search Engine Optimization) best practices.",
    image: "/ecommerce.png",
    website: "https://laptopoutlet.hn",
    repo: "https://bitbucket.org/selvin_mayes/laptopoutlet/src/master/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Google Cloud Storage",
      "Node.js",
      "Typescript",
      "GraphQL",
      "Google OAuth",
      "Google Analytics",
    ],
  },
  {
    title: "Content Management System for Laptop Outlet",
    description:
      "Content Management System and Inventory Management System with role-based access control. It has an user-friendly interface for managing products, categories, the e-commerce's homepage, users, and orders. Both, the e-commerce website and the CMS are powered by the same backend and its CMS are part of the same repository (monorepo architecture).",
    image: "/cms.png",
    website: "https://laptopoutlet-admin.vercel.app/",
    repo: "https://bitbucket.org/selvin_mayes/laptopoutlet/src/master/",
    tags: [
      "Next.js",
      "MongoDB",
      "Google Cloud Storage",
      "Node.js",
      "Typescript",
      "GraphQL",
    ],
  },
];
const experiences = [
  {
    title: "Software Engineer",
    date: "April 2020 – October 2021",
    company: "Laptop Outlet",
    tasks: [
      "Developed a robust e-commerce platform.",
      "Developed a Content Management System and Inventory Management System with role-based access control.",
      "Collaborated with banks to identify an ideal payment processor and successfully planned product delivery logistics.",
    ],
    tags: [
      "NodeJS",
      "React",
      "HTML",
      "Git",
      "Typescript",
      "Tailwind CSS",
      "Google Cloud",
      "MongoDB",
      "GraphQL",
    ],
    website: "https://www.facebook.com/laptopoutlet",
  },
  {
    title: "Web Developer Intern",
    date: "October 2019 – March 2020",
    company: "Appland S.A.",
    tasks: [
      "Contributed to front-end development & API design for client websites",
      "Implemented DEVOPs solutions for projects, improving development & operation processes",
      "Designed databases and system architecture for multiple projects",
      "Created presentations for higher managers and clients to report progress on projects & answer concerns",
      "Practiced SCRUM/Agile methodology",
    ],
    tags: [
      "React",
      "JavaScript",
      "HTML",
      "Bitbucket Pipelines",
      "CSS",
      "Git",
      "Firebase",
      "MySQL",
      "AWS",
    ],
    website: "https://www.facebook.com/applandhn",
  },
];
export default function Home() {
  return (
    <div className="space-y-12 lg:space-y-0 scroll-smooth lg:divide-y divide-white text-justify">
      <section id="about-me" className="lg:py-24">
        <p className=" mb-3 md:mb-6">
          I am a passionate and skilled Web Developer. I begun having an
          interest in coding when I was a teenager, and have since developed a
          strong foundation in software development. Over the years, I have
          honed my skills in full-stack web development, playing a key role in
          designing and developing robust and user-friendly applications. My
          experience extends to crafting APIs, optimizing query performance, and
          refining user interfaces for optimal user experience. I also have a
          strong foundation in Machine Learning and Artificial Intelligence, a
          field increasingly crucial in software development.
        </p>
        <p>
          I have honed my skills in full-stack web development, playing a key
          role in designing and developing robust e-commerce applications and
          content management systems. Known for my effective communication,
          collaborative spirit, and commitment to project completion, I thrive
          in dynamic environments where innovation and teamwork are valued. As a
          dedicated developer, I prioritize delivering high-quality applications
          while meeting project deadlines.
        </p>
      </section>
      <section id="experience" className="lg:py-24">
        <h2 className="lg:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mb-6">
          Experience
        </h2>
        <div className="text-sm space-y-16">
          {experiences.map((experience, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold">{experience.title}</h5>
              <span className="text-sm text-gray-500 mb-6 block">
                {experience.date}
              </span>
              <span className="text-sm font-semibold mb-3">
                {experience.company}
              </span>
              <ul className="list-disc ml-6 mb-6">
                {experience.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap mb-6">
                {experience.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          ))}
          <div>
            <a
              href="/Selvin-Mayes-Resume.pdf"
              target="_blank"
              className="text-lg text-emerald-700 opacity-70 hover:opacity-100 flex items-center space-x-3"
            >
              <span>See Full Résumé</span> <FaLink />
            </a>
          </div>
        </div>
      </section>
      <section id="projects" className="min-h-screen lg:pt-24">
        <h2 className="lg:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mb-6">
          Projects
        </h2>
        <div className="text-sm space-y-16">
          {projects.map((project, index) => (
            <ProjectInfo key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
