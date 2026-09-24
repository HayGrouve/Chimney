import komin1 from "@/assets/images/komin-1.jpg";
import komin12 from "@/assets/images/komin-1_2.jpg";
import komin2 from "@/assets/images/komin-2.jpg";
import komin3 from "@/assets/images/komin-3.jpg";
import vutre from "@/assets/images/vutre.jpg";
import otvun from "@/assets/images/otvun.jpg";
import chimney1 from "@/assets/images/1.jpg";
import chimney2 from "@/assets/images/2.jpg";
import chimney3 from "@/assets/images/3.jpg";
import chimney4 from "@/assets/images/4.jpg";
import chimney5 from "@/assets/images/5.jpg";
import chimney6 from "@/assets/images/6.jpg";
import chimney7 from "@/assets/images/7.jpg";
import chimney8 from "@/assets/images/8.jpg";
import chimney9 from "@/assets/images/9.jpg";
import chimney10 from "@/assets/images/10.jpg";
import chimney11 from "@/assets/images/11.jpg";
import chimney12 from "@/assets/images/12.jpg";
import chimney13 from "@/assets/images/13.jpg";
import chimney14 from "@/assets/images/14.jpg";
import chimney15 from "@/assets/images/15.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  { src: komin1, alt: "Ротационна вентилационна шапка на комин на покрив", width: 750, height: 1000 },
  { src: komin12, alt: "Неръждаема тръба с ротационна шапка на покрив в града", width: 750, height: 1000 },
  { src: komin2, alt: "Почистване на многоканален комин с четка", width: 750, height: 1000 },
  { src: komin3, alt: "Почистване на комин с метална шапка с четка на прът", width: 720, height: 960 },
  { src: vutre, alt: "Почистване на камина с промишлена прахосмукачка в дома", width: 750, height: 562 },
  { src: otvun, alt: "Коминочистач почиства комин с четка на прът", width: 720, height: 960 },
  { src: chimney1, alt: "Димоотвод, покрит със сажди и нагар, преди почистване", width: 720, height: 960 },
  { src: chimney2, alt: "Отпушване на димоотвод с гъвкав вал", width: 960, height: 720 },
  { src: chimney3, alt: "Чист кръгъл димоотвод отвътре след почистване", width: 720, height: 960 },
  { src: chimney4, alt: "Запушен димоотвод с отломки на дъното", width: 1536, height: 2048 },
  { src: chimney5, alt: "Препятствие, запушило димоотвода", width: 1536, height: 2048 },
  { src: chimney6, alt: "Тухлен димоотвод отвътре", width: 1536, height: 2048 },
  { src: chimney7, alt: "Нагар и запушване в комин преди почистване", width: 720, height: 960 },
  { src: chimney8, alt: "Отпушен димоотвод – през комина се вижда светлина", width: 720, height: 960 },
  { src: chimney9, alt: "Квадратен димоотвод отвътре след почистване", width: 960, height: 720 },
  { src: chimney10, alt: "Стар комин с бетонна шапка на плосък покрив", width: 1536, height: 2048 },
  { src: chimney11, alt: "Ремонт на комин – пробиване на отвор за нова тръба", width: 1200, height: 1600 },
  { src: chimney12, alt: "Монтаж на неръждаема тръба в комин", width: 1536, height: 2048 },
  { src: chimney13, alt: "Комин с монтирана неръждаема тръба на покрив", width: 1536, height: 2048 },
  { src: chimney14, alt: "Монтаж на неръждаема тръба на комин", width: 1200, height: 1600 },
  { src: chimney15, alt: "Ремонтиран комин с неръждаема тръба и шапка", width: 1536, height: 2048 },
];
