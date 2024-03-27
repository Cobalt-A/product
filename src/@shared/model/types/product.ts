export interface IHaracteristic {
  name: string;
  value: string;
}

export interface IProduct {
  id: number;
  price: number;
  discountPrice: number;
  name: string;
  description: string;
  haracteristic: IHaracteristic[];
}

export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  description: string;
  haracteristic: IHaracteristic[];
  amountInCart: number; // позволит определять количество товаров в корзине не засерая стейт дубликатами
}
