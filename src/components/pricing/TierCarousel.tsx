import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TierCard, Tier } from "./TierCard";

interface TierCarouselProps {
  title: string;
  subtitle?: string;
  items: Tier[];
}

export const TierCarousel = ({ title, subtitle, items }: TierCarouselProps) => {
  return (
    <section className="container py-12">
      <header className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
      </header>
      <div className="relative">
        <Carousel opts={{ align: "start", loop: false }}>
          <CarouselContent>
            {items.map((tier, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                <TierCard {...tier} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-6" />
          <CarouselNext className="-right-6" />
        </Carousel>
      </div>
    </section>
  );
};
