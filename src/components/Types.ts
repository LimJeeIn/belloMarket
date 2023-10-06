export interface UserType {
  displayName?: string;
  uid?: string;
  email?: string;
  provider?: string;
  photoURL?: string;
  isAdmin?: boolean; // undefined 허용 제거
}

export interface ShippingInfo {
  name: string;
  postalCode: string;
  address: string;
  detailAddress: string;
  phoneNum: string;
}

export type Product = {
  id: string;
  price?: number;
  image?: string;
  options?: string[] | string;
  title?: string;
  category?: string;
  quantity?: number;
  option?: string;
};
