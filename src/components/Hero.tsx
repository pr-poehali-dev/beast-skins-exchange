import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Icon name="TrendingUp" className="h-4 w-4" />
            Безопасный обмен скинов CS:GO2
          </div>
          
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Покупай и продавай скины CS:GO2 безопасно
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Beast Skins — надежный маркетплейс с системой рейтингов продавцов. 
            Тысячи скинов, проверенные продавцы, гарантия сделок.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2 text-base">
              <Icon name="Search" className="h-5 w-5" />
              Найти скин
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base">
              <Icon name="Plus" className="h-5 w-5" />
              Продать скин
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 rounded-xl border bg-card p-6">
            <div>
              <div className="mb-1 text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Активных скинов</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-primary">8K+</div>
              <div className="text-sm text-muted-foreground">Продавцов</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Успешных сделок</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
