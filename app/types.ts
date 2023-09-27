import {
  ReactNode,
  FormEvent,
  MouseEvent,
  ChangeEvent,
  CSSProperties,
  FocusEvent,
  ButtonHTMLAttributes,
} from "react";

export type Dish = {
  name: string;
  type: string;
  mark: number;
  time: number;
  price: number;
  file: string;
};

export type DishesState = {
  dishes: Dish[];
  loading: boolean;
  error: string;
  fetchDishes: () => void;
};

export type Func = {
  fetch: () => void;
};

export type AllpropsType = {
  name?: string | number | undefined | any;
  email?: string;
  className?: string;
  children?: string | ReactNode;
  type?: string | null | undefined | any;
  action?: string;
  onSubmit?: (evt: FormEvent<HTMLFormElement> | any) => any | void;
  onClick?: (evt: MouseEvent<HTMLButtonElement> | any) => any;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => number | string | any;
  onBlur?: (evt: FocusEvent<HTMLInputElement>) => any | void;
  styles?: CSSProperties;
  img?: HTMLImageElement;
  alt?: string;
  url?: string | number;
  href?: any | string;
  autoComplete?: string;
  required?: boolean | string | undefined | any;
  placeholder?: string;
  id?: string;
  defaultValue?: string;
  htmlFor?: string;
  value?: string;
  selected?: boolean;
  err?: any;
  dataUrl?: any;
  errors?: any;
  Question_subTitle?: any;
  Question_Title?: any;
};
