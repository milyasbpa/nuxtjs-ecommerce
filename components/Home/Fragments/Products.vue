<template>
  <div
    :class="
      clsx(
        'grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[3rem]',
        'w-full'
      )
    "
  >
    <h2 :class="clsx('text-[36px] text-[white] font-medium')">
      {{ dictionaries.product.message }}
    </h2>
    <div
      :class="
        clsx(
          'grid grid-cols-3 items-start content-start justify-center justify-items-center gap-[2rem]',
          'w-full'
        )
      "
    >
      <HomeComponentsProductCard
        v-for="(product, productIndex) in homeStore.products"
        :key="productIndex"
        :id="product.id.toString()"
        :name="product.name"
        :price="
          product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        "
        :image-url="product.image_url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";
import { getDictionaries } from "~/locales/home/i18n";
import { useHomeStore } from "~/stores";
const dictionaries = getDictionaries();

const homeStore = useHomeStore();

await useAsyncData("products", async () => {
  await homeStore.fetchTop3Product();
  return homeStore.products;
});
</script>
