import React from "react";

type Props = {
  tag: string;
};

function Tag({ tag }: Props) {
  return (
    <span className="inline-block text-xs bg-emerald-100 border border-emerald-700 rounded-full px-3 py-1 font-semibold mr-3 mt-3">
      {tag}
    </span>
  );
}

export default Tag;
