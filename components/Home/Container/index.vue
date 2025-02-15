<template>
  <div
    :class="
      clsx(
        'grid grid-cols-1 place-content-start place-items-start',
        'w-full h-[1100px]'
      )
    "
    :style="`background: radial-gradient(169.5% 169.5% at -17.51% 133.92%, #149548 0%, #FEFE98 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      radial-gradient(68.93% 94.7% at 65.88% -58.81%, #149548 0%, rgba(20, 149, 72, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08));
      `"
  ></div>
</template>

<script setup lang="ts">
import clsx from "clsx";
</script>
