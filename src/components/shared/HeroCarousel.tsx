import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { carouselData } from "@/data/carouselData";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

export interface CarouselProps {
  header: string;
  text: string;
  image: string;
}
export function HeroCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
      setApi={setApi}
    >
      <div className="hidden absolute right-40 -top-4 z-20 md:flex gap-2">
        {carouselData.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-18 rounded-xs transition-all ${
              current === i ? "bg-primary" : "bg-white"
            }`}
          />
        ))}
      </div>
      <CarouselContent>
        {carouselData.map((data, index) => (
          <CarouselItem key={index}>
            <div className="flex px-10">
              <div className="flex flex-col w-full gap-5  pt-10">
                <h2>{data.header}</h2>
                <p className="line-clamp-3 max-w-md tracking-wide font-medium text-md">
                  {data.text}
                </p>
                <div className="flex gap-5">
                  <Button>Create Account</Button>
                  <Button>Log in</Button>
                </div>
              </div>
              <div className="hidden md:flex md:justify-center">
                <img src={data.image} alt="login-image" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center items-center gap-4 pb-5 relative">
        <CarouselPrevious className="static  translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  )
}
