import { defineStore } from "pinia";
import type { GetProductListSuccessResponseInterface } from "~/api/rest/models/product";
import { fetchGetProductList } from "~/api/rest/services/product";

export const useHomeStore = defineStore("home", {
  state: () => ({
    products: [] as {
      id: number;
      name: string;
      image_url: string;
      price: number;
    }[],
    loading: true as boolean,
  }),
  actions: {
    async fetchTop3Product() {
      try {
        const data =
          (await fetchGetProductList()) as GetProductListSuccessResponseInterface[];

        this.products = data
          .filter((_, index) => index < 3)
          .map((item) => {
            return {
              id: item.id,
              name: item.title,
              image_url: item.image,
              price: item.price,
            };
          });
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error("Failed to fetch products data:", error);
      }
    },
  },
});
