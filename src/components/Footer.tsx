import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Icon name="Zap" className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Beast Skins</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Безопасный маркетплейс скинов CS:GO2 с проверенными продавцами
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Платформа</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  О сервисе
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Как работает
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Поддержка</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Центр помощи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Правила пользования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Политика возвратов
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Следи за нами</h3>
            <div className="flex gap-2">
              <Button size="icon" variant="outline">
                <Icon name="MessageCircle" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Send" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Twitter" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 Beast Skins. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
