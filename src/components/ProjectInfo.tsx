import React from "react";
import Image from "next/image";
import Tag from "./Tag";
type Props = {
  title: string;
  description: string;
  image: string;
  website: string;
  repo: string;
  tags: string[];
};

const ProjectInfo = ({
  description,
  image,
  repo,
  title,
  website,
  tags,
}: Props) => {
  return (
    <div>
      <h5 className="text-lg italic mb-6 font-semibold">{title}</h5>
      <div className="md:flex md: lg:block"></div>
      <Image
        src={image}
        width={1280}
        height={720}
        alt={title}
        className="rounded-lg mb-6"
      />
      <p className="mb-3">{description}</p>
      <div className="flex flex-wrap mb-6">
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div className="space-x-3">
        <a
          href={website}
          className="text-emerald-700 opacity-70 hover:opacity-100 font-bold"
          target="_blank"
        >
          Website
        </a>
        <span>/</span>
        <a
          href={repo}
          className="text-emerald-700 opacity-70 hover:opacity-100 font-bold"
          target="_blank"
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
