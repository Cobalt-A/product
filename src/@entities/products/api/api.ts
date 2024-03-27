import { IProduct } from "@shared/model/types/product";

export const getProduct = (): IProduct => {
  // типо запрос к api
  return {
    id: 0,
    price: 166534,
    discountPrice: 122566,
    name: "Кроссовки мужские Skechers Sunny Dale",
    description: `Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR
    существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет
    возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что
    коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает
    экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано.
    Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.`,
    haracteristic: [
      {
        name: "Код поставщика",
        value: "ELC00696",
      },
      {
        name: "Код РАЭК",
        value: "ELC00696",
      },
      {
        name: "Бренд",
        value: "Electric used",
      },
      {
        name: "Код производителя ",
        value: "ELC0200000696",
      },
      {
        name: "Артикул",
        value: "ELC0200000696",
      },
      {
        name: "Код ЕТМ",
        value: "ELC00696",
      },
      {
        name: "Серия",
        value: "ELC00696",
      },
    ],
  };
};
