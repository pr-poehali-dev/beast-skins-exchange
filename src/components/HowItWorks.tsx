import Icon from "@/components/ui/icon";

export default function HowItWorks() {
  const steps = [
    {
      icon: "Search",
      title: "Найди нужный скин",
      description: "Используй фильтры по цене, состоянию и рейтингу продавца",
    },
    {
      icon: "Shield",
      title: "Проверь продавца",
      description: "Изучи рейтинг, отзывы и статистику успешных сделок",
    },
    {
      icon: "ShoppingCart",
      title: "Купи безопасно",
      description: "Оплачивай через защищенную систему с гарантией",
    },
    {
      icon: "Package",
      title: "Получи скин",
      description: "Скин автоматически придет на твой Steam аккаунт",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Как это работает</h2>
          <p className="text-lg text-muted-foreground">
            Четыре простых шага до покупки скина мечты
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Icon name={step.icon as any} className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute left-8 top-8 -z-10 hidden h-0.5 w-full bg-border lg:block">
                {index === steps.length - 1 && <div className="h-full w-full bg-transparent" />}
              </div>
              
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
