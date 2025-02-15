<template>
  <div
    :class="
      clsx(
        'grid grid-cols-1 place-content-start place-items-start',
        'w-full',
        'relative'
      )
    "
  >
    <NuxtImg src="/images/home/hero-bg.svg" :class="clsx('w-full')" />

    <div
      :class="
        clsx(
          'absolute top-0 left-0 right-0 bottom-0',
          'z-[10]',
          'grid grid-cols-1 place-content-center place-items-center',
          'w-full h-full'
        )
      "
    >
      <div :class="clsx('w-full max-w-[820px]')">
        <HomeFragmentsHero />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";
</script>
