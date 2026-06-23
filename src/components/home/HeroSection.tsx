import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/images/jumbotron-img.jpg";
import logo from "@/assets/images/logo.jpg";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative flex flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:px-10 md:py-20">
        <img
          src={logo}
          alt="Коминочистач лого"
          className="w-32 rounded-lg shadow-lg md:w-40"
        />
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Запушен комин?
          </h1>
          <p className="text-lg text-muted-foreground">
            Добре дошли! Ние почистваме, отпушваме и ремонтираме комини и
            отдушници. Изработваме шапки за комини и други.
          </p>
          <Link
            to="/contact"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            За контакти <MdContactPhone className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
