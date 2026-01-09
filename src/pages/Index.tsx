import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkinCard from "@/components/SkinCard";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Index() {
  const featuredSkins = [
    {
      name: "AK-47 | Redline",
      price: 89.50,
      wear: "FT",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
      seller: {
        name: "ProTrader",
        rating: 4.9,
        reviews: 234,
      },
    },
    {
      name: "AWP | Asiimov",
      price: 142.00,
      wear: "FT",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&auto=format&fit=crop",
      seller: {
        name: "SkinMaster",
        rating: 5.0,
        reviews: 189,
      },
    },
    {
      name: "M4A4 | Howl",
      price: 3250.00,
      wear: "MW",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop",
      seller: {
        name: "RareCollector",
        rating: 4.8,
        reviews: 156,
      },
    },
    {
      name: "Desert Eagle | Blaze",
      price: 315.00,
      wear: "FN",
      image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&auto=format&fit=crop",
      seller: {
        name: "FastDeal",
        rating: 4.7,
        reviews: 312,
      },
    },
    {
      name: "Glock-18 | Fade",
      price: 425.00,
      wear: "FN",
      image: "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=800&auto=format&fit=crop",
      seller: {
        name: "TopSeller",
        rating: 4.9,
        reviews: 445,
      },
    },
    {
      name: "Karambit | Doppler",
      price: 1150.00,
      wear: "FN",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop",
      seller: {
        name: "KnifePro",
        rating: 5.0,
        reviews: 267,
      },
    },
    {
      name: "USP-S | Kill Confirmed",
      price: 76.50,
      wear: "MW",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop",
      seller: {
        name: "QuickTrade",
        rating: 4.6,
        reviews: 198,
      },
    },
    {
      name: "M4A1-S | Hot Rod",
      price: 185.00,
      wear: "FN",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop",
      seller: {
        name: "EliteSkins",
        rating: 4.8,
        reviews: 223,
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Популярные скины</h2>
              <p className="text-muted-foreground">
                Самые продаваемые предложения от проверенных продавцов
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Все скины
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSkins.map((skin, index) => (
              <SkinCard key={index} {...skin} />
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Готов начать торговлю?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Присоединяйся к тысячам трейдеров, которые доверяют Beast Skins
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="gap-2">
                  <Icon name="UserPlus" className="h-5 w-5" />
                  Зарегистрироваться
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Play" className="h-5 w-5" />
                  Смотреть видео
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}
