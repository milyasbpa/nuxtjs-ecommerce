<template>
  <div
    :id="id"
    :class="
      clsx(
        'grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]',
        'w-full',
        'px-[1.5rem] py-[1.5rem]',
        'bg-[white]',
        'rounded-[1rem]'
      )
    "
    :style="'box-shadow: 0px 16px 48px 0px #00000014'"
  >
    <NuxtImg :src="imageUrl" :class="clsx('w-full', 'aspect-square')" />
    <div
      :class="
        clsx(
          'grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]',
          'w-full'
        )
      "
    >
      <p
        :class="clsx('text-[1.25rem] text-[#333333] font-medium line-clamp-1')"
      >
        {{ name }}
      </p>
      <p :class="clsx('text-[1.5rem] text-[#151E15] font-bold')">{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";

export interface HomeComponentProductCardProps {
  id?: string;
  name?: string;
  price?: string;
  imageUrl?: string;
}

const props = withDefaults(defineProps<HomeComponentProductCardProps>(), {
  id: "",
  name: "",
  price: "",
  imageUrl: "",
});
const { name, price, imageUrl } = props;
</script>
