import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Как гарантируется безопасность сделки?",
      answer:
        "Мы используем систему эскроу — деньги замораживаются до подтверждения получения скина. Все продавцы проходят верификацию, а сделки защищены нашей гарантией возврата.",
    },
    {
      question: "Сколько времени занимает получение скина?",
      answer:
        "В среднем 5-15 минут после оплаты. Скин автоматически отправляется на ваш Steam аккаунт через трейд-офферы.",
    },
    {
      question: "Какие комиссии взимаются?",
      answer:
        "Комиссия платформы составляет 5% от суммы сделки. Для продавцов с высоким рейтингом действуют сниженные тарифы от 3%.",
    },
    {
      question: "Можно ли вернуть скин?",
      answer:
        "Да, в течение 24 часов после получения скина вы можете оформить возврат, если товар не соответствует описанию.",
    },
    {
      question: "Как стать продавцом на Beast Skins?",
      answer:
        "Зарегистрируйся, пройди верификацию Steam аккаунта и выставляй свои скины на продажу. Первые 10 сделок проходят с дополнительной проверкой.",
    },
  ];

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Частые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о работе Beast Skins
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
