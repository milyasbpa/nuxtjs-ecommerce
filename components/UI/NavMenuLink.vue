<template>
  <component
    :is="external ? 'a' : 'NuxtLink'"
    :href="external ? to : undefined"
    :to="!external ? to : undefined"
    :class="
      clsx(
        'text-[0.875rem] font-semibold uppercase',
        active ? 'text-[#149548]' : 'text-[white]'
      )
    "
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import clsx from "clsx";

interface Props {
  to?: string | Object;
  external?: boolean;
  active?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  to: "",
  external: false,
  active: false,
});
const { to, external, active } = props;
</script>
