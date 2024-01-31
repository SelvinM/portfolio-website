import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="space-y-10">
      <div id="about-me">
        <h2 className="md:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-2 md:mb-4">
          About Me
        </h2>
        <p className="text-justify">
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
      </div>
      <div id="projects">
        <h2 className="md:hidden text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 mb-2 md:mb-4">
          Projects
        </h2>
        <Card />
      </div>
    </div>
  );
}
