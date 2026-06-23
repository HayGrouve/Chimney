import { FaFacebookSquare } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const FACEBOOK_URL =
  "https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045";

export function ContactPanel() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Контакти</CardTitle>
        <CardDescription>Свържете се с мен</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Име</p>
          <p className="text-lg font-medium">Милан Манчев</p>
        </div>
        <Separator />
        <div>
          <p className="text-sm text-muted-foreground">Телефон</p>
          <a
            href="tel:0895655895"
            className="flex items-center gap-2 text-lg font-medium text-primary hover:underline"
          >
            <MdContactPhone />
            0895 655 895
          </a>
        </div>
        <Separator />
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Коминочистач <FaFacebookSquare className="ml-1" />
        </a>
      </CardContent>
    </Card>
  );
}
