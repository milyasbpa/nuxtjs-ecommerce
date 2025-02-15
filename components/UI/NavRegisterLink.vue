<template>
  <NuxtLink
    :class="
      clsx(
        'grid grid-cols-1 place-content-center place-items-center',
        'px-[36px] py-[0.5rem]',
        'bg-[#149548]',
        'text-[white] text-[0.875rem] font-bold',
        'rounded-[0.75rem]'
      )
    "
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import clsx from "clsx";

interface Props {
  to?: string | Object;
}
const props = withDefaults(defineProps<Props>(), {
  to: "",
});
const { to } = props;
</script>
