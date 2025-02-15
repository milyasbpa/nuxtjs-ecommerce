<template>
  <div
    :class="
      clsx(
        'grid grid-cols-1 place-content-center place-items-center gap-[3rem]',
        'w-full'
      )
    "
  >
    <div
      :class="
        clsx(
          'grid grid-cols-1 place-content-center place-items-center gap-[3rem]',
          'w-full'
        )
      "
    >
      <h1 :class="'text-[60px] font-medium text-[white]'">
        {{ dictionaries.message }}
      </h1>
      <p :class="'text-[1.5rem] font-medium text-[#F8F9FB]'">
        {{ dictionaries.description }}
      </p>
    </div>
    <NuxtLink
      :class="
        clsx(
          'grid grid-cols-1 place-content-center place-items-center',
          'px-[0.875rem] py-[15px]',
          'bg-[#149548]',
          'rounded-[0.75rem]',
          'text-[1rem] text-[#FFFFFF] font-bold'
        )
      "
    >
      {{ dictionaries.cta.primary.children }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";
import { getDictionaries } from "~/locales/home/i18n";
import { useRoute } from "vue-router";
const route = useRoute();
const locale = route.params?.locale;
const dictionaries = getDictionaries(locale);
</script>
