import React from "react";
import Image from "next/image";

const Kit = (props: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className="felx flex-col space-y-4 justify-center items-center">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
      <h1 className="text-center">{props.alt}</h1>
    </div>
  );
};

export default Kit;
