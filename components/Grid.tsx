"use client";

import dynamic from "next/dynamic";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const GridGlobe = dynamic(
  () => import("./ui/GridGlobe").then((mod) => mod.GridGlobe),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              // Ensure GridGlobe only renders dynamically
              renderGlobe={id === 2 ? <GridGlobe /> : null}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
