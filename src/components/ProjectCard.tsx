import React from "react";
import Image from "next/image";
type Props = {
  title: string;
  description: string;
  image: string;
  website: string;
  repo: string;
};

const ProjectCard = ({ description, image, repo, title, website }: Props) => {
  return (
    <div>
      <h5 className="text-lg italic mb-6">{title}</h5>
      <Image
        src={image}
        width={1280}
        height={720}
        alt={title}
        className="rounded-lg mb-6"
      />
      <p className="mb-3">{description}</p>
      <div className="space-x-3">
        <a
          href={website}
          className="text-emerald-700 opacity-70 hover:opacity-100 font-bold"
        >
          Website
        </a>
        <span>/</span>
        <a
          href={repo}
          className="text-emerald-700 opacity-70 hover:opacity-100 font-bold"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
