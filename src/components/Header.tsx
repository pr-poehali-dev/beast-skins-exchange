import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "catalog", label: "Каталог", icon: "Grid3x3" },
    { id: "about", label: "О сервисе", icon: "Info" },
    { id: "how-it-works", label: "Как работает", icon: "HelpCircle" },
    { id: "faq", label: "FAQ", icon: "MessageSquare" },
    { id: "support", label: "Поддержка", icon: "Headphones" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Icon name="Zap" className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Beast Skins</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection(item.id)}
              className="gap-2"
            >
              <Icon name={item.icon as any} className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Icon name="Search" className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Icon name="User" className="h-4 w-4" />
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
}
