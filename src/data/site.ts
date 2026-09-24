import {
  BrushCleaning,
  Flame,
  HardHat,
  House,
  Images,
  Phone,
  ShieldCheck,
  Wind,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const contact = {
  name: "Милан Манчев",
  phoneDisplay: "0895 655 895",
  phoneHref: "tel:+359895655895",
  facebookUrl:
    "https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045",
} as const;

export const navLinks: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Начало", icon: House },
  { to: "/about", label: "Услуги и снимки", icon: Images },
  { to: "/contact", label: "Контакти", icon: Phone },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: BrushCleaning,
    title: "Почистване на комини",
    description:
      "Четки с различен диаметър почистват димоотвода до състояние „като нов“.",
  },
  {
    icon: Flame,
    title: "Отпушване",
    description:
      "Запушен комин или слаба тяга? Отстранявам сажди, нагар и препятствия.",
  },
  {
    icon: Wrench,
    title: "Ремонт на комини",
    description:
      "Възстановяване на повредени комини, за да работят безопасно отново.",
  },
  {
    icon: Wind,
    title: "Отдушници",
    description:
      "Почистване и ремонт на отдушници за правилна вентилация в дома.",
  },
  {
    icon: HardHat,
    title: "Шапки за комини",
    description:
      "Изработка на шапки, които пазят комина от дъжд, сняг и птици.",
  },
  {
    icon: ShieldCheck,
    title: "Без прах в дома",
    description:
      "Работното място се предпазва, а саждите се събират с промишлена прахосмукачка.",
  },
];

export const processSteps = [
  {
    title: "Обаждате се",
    description: "Разказвате ми за проблема и уговаряме удобен ден.",
  },
  {
    title: "Оглед",
    description:
      "Преценявам състоянието на комина. Цената зависи от конкретния случай.",
  },
  {
    title: "Почистване",
    description:
      "Работя с четки и промишлена прахосмукачка — бързо и без прах.",
  },
  {
    title: "Готово",
    description: "Комин с добра тяга и спокойствие за целия сезон.",
  },
] as const;
