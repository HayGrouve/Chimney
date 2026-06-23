import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Грешна страница!</h1>
      <Link to="/" className={cn(buttonVariants({ variant: "secondary" }))}>
        Начало <BsFillHouseDoorFill className="ml-1" />
      </Link>
    </div>
  );
}
