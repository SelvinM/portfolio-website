import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque deserunt veritatis quae quod sapiente ratione eveniet saepe sit commodi excepturi numquam, nulla maxime, repellendus cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis quasi iusto est explicabo doloremque nihil corporis suscipit neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium atque velit libero aperiam pariatur autem vero quibusdam voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque desserunt.",
    image: "/ecommerce.png",
    website: "https://laptopoutlet.hn",
    repo: "https://github.com/example",
  },
  {
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque deserunt veritatis quae quod sapiente ratione eveniet saepe sit commodi excepturi numquam, nulla maxime, repellendus cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis quasi iusto est explicabo doloremque nihil corporis suscipit neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium atque velit libero aperiam pariatur autem vero quibusdam voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque desserunt.",
    image: "/ecommerce.png",
    website: "https://laptopoutlet.hn",
    repo: "https://github.com/example",
  },
  {
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque deserunt veritatis quae quod sapiente ratione eveniet saepe sit commodi excepturi numquam, nulla maxime, repellendus cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis quasi iusto est explicabo doloremque nihil corporis suscipit neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laudantium atque velit libero aperiam pariatur autem vero quibusdam voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero itaque desserunt.",
    image: "/ecommerce.png",
    website: "https://laptopoutlet.hn",
    repo: "https://github.com/example",
  },
];
export default function Home() {
  return (
    <div className="space-y-12 lg:space-y-0 scroll-smooth">
      <section id="about-me" className="min-h-screen lg:py-24">
        <p></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque desserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque desserunt.
        </p>
      </section>
      <section id="experience" className="min-h-screen lg:py-24">
        <h2 className="lg:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mb-6">
          Experience
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt veritatis quae quod sapiente ratione eveniet
          saepe sit commodi excepturi numquam, nulla maxime, repellendus
          cupiditate recusandae modi maiores. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore tempora voluptate, eos eveniet
          pariatur labore, eaque, quidem aliquid impedit aliquam reiciendis
          quasi iusto est explicabo doloremque nihil corporis suscipit neque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          laudantium atque velit libero aperiam pariatur autem vero quibusdam
          voluptas debitis, natus accusamus ea in nesciunt rem illo error, eum
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          libero itaque deserunt.
        </p>
      </section>
      <section id="projects" className="min-h-screen lg:pt-24">
        <h2 className="lg:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-700 mb-6">
          Projects
        </h2>
        <div className="text-sm space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
