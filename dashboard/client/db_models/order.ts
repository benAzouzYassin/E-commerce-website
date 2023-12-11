type order = {
  productId: string;
  userId: string;
  orderPrice: number;
  createdAt: Date;
  status: "waiting" | "validated" | "sended" | "canceled";
};
