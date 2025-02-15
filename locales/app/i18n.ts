import { LocaleRoute } from "~/utils/route";
import en from "./en.json";
const dictionaries: { [key: string]: typeof en } = {
  en: en,
};

export const getDictionaries = (locale?: string | string[]) =>
  dictionaries[String(locale ?? LocaleRoute.default)];
