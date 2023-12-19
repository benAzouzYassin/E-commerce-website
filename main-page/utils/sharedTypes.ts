type Category = {
    id?: string;
    name: string;
    products?: Product[];
  };
  
  type Product = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imgLink: string;
    stock: number;
    orderTimes: number;
    salePrice: number;
    additionalImages: string[];
    status: 'on sale' | 'sold out' | 'hidden' | 'coming soon' | 'published';
    category: Category;
    categoryId?: string;
    createdAt?: Date;
    orders?: Order[];
  };
  
  type Order = {
    id?: string;
    userName: string;
    userContact: string;
    orderPrice: number;
    product: Product;
    productId?: string;
    createdAt?: Date;
    isDashboardHidden: boolean;
    location: string;
    status: 'waiting' | 'validated' | 'sent' | 'canceled';
  };