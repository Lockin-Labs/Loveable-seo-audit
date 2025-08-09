import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type Tier = {
  name: string;
  price: string;
  features: string[];
  cta?: string;
  href?: string;
  popular?: boolean;
};

export const TierCard = ({ name, price, features, cta = "Choose plan", href = "#", popular }: Tier) => {
  return (
    <Card className={`h-full transition-transform duration-300 hover:-translate-y-1 ${popular ? "ring-2 ring-primary shadow-glow" : ""}`}>
      <CardHeader>
        <CardTitle className="text-xl flex items-center justify-between">
          <span>{name}</span>
          {popular && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Popular</span>
          )}
        </CardTitle>
        <div className="mt-2 text-3xl font-extrabold">{price}</div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((f, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <a href={href} className="w-full">
          <Button className="w-full" variant={popular ? "hero" : "default"}>{cta}</Button>
        </a>
      </CardFooter>
    </Card>
  );
};
