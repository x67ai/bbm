import * as React from "react"

import { Card, CardContent } from "../../ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel"
import carouselBikeImg from "../../../assets/carouselbikeimg1.jpg"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
               <img
                  src={carouselBikeImg}
                  alt={`Slide ${index + 1}`}
                  className="w-52 h-64 object-cover rounded-lg"
                />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
