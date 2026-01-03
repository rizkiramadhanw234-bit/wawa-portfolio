"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { dataProjects } from "../data/dataProjects";

export default function ProjectsPage() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mt-4">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-blue-500">
              Works
            </span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Kumpulan proyek strategis yang mencerminkan pengalaman dalam
            business development, digital strategy, dan technology-driven
            solutions.
          </p>
        </div>

        {/* carousel */}
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-5">
          <Carousel setApi={setApi} className="w-full md:w-250">
            <CarouselContent>
              {dataProjects.map((project, id) => (
                <CarouselItem key={id}>
                  <Card className="h-full md:h-180 bg-gray-800 border border-gray-600">
                    <CardContent className="flex flex-col items-center justify-center h-full p-6">
                      <Image
                        src={project.img}
                        alt="tes"
                        className="w-full h-50 md:w-230 md:h-130 rounded-2xl"
                      />
                      <h1 className="mt-5 text-white text-center font-bold mb-2 text-base md:text-lg">
                        {project.title}
                      </h1>
                      <p className="text-white text-center text-sm">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={
                "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
              }
            />
            <CarouselNext
              className={
                "cursor-pointer hover:scale-110 transition duration-300 hidden sm:flex"
              }
            />
          </Carousel>
          <div className="text-muted-foreground py-2 text-center text-sm">
            Slide {current} of {count}
          </div>
        </div>
      </div>
    </section>
  );
}
