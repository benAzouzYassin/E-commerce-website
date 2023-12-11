export type product = {
  productId: string;
  name: string;
  description: string;
  price: number;
  imgLink: string;
  count: number;
  orderTimes: number;
  categoryId: string;
  salePrice: number;
  additionalImages: string[];
  status: "onSale" | "soldOut" | "hidden" | "comingSoon" | "published";
};
