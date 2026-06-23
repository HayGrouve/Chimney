import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import selfie from "@/assets/images/selfie.jpg";
import bigKomin from "@/assets/images/big-komin.jpg";

export function FeatureCards() {
  return (
    <section className="grid gap-8 py-12 md:grid-cols-2">
      <Card className="overflow-hidden">
        <img
          src={selfie}
          alt="Милан Манчев — коминочистач"
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle>За мен</CardTitle>
          <CardDescription>
            Професионален коминочистач съм от 20 години, работил съм в няколко
            държави, работя бързо и качествено...
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link
            to="/about"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Информация <BsInfoCircleFill className="ml-1" />
          </Link>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <img
          src={bigKomin}
          alt="Голям комин"
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle>Цени и срокове</CardTitle>
          <CardDescription>
            Всеки комин изисква различен подход, който налага повече/по-малко
            време и ресурси. Свържете се с мен, с радост ще помогна!
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link to="/contact" className={cn(buttonVariants())}>
            Контакти <MdContactPhone className="ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
}
