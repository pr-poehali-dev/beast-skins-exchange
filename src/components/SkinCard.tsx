import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SkinCardProps {
  name: string;
  price: number;
  wear: string;
  image: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
  };
}

export default function SkinCard({ name, price, wear, image, seller }: SkinCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 font-semibold leading-tight">{name}</h3>
          <Badge variant="secondary" className="shrink-0">
            {wear}
          </Badge>
        </div>
        
        <div className="mb-3 flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-xs">
              {seller.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-muted-foreground">{seller.name}</span>
            <Icon name="Star" className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{seller.rating}</span>
            <span className="text-muted-foreground">({seller.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">${price}</div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" size="sm">
          <Icon name="ShoppingCart" className="h-4 w-4" />
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
}
