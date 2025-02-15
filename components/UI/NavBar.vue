<template>
  <nav
    :class="
      clsx(
        'grid grid-cols-1 place-content-center place-items-center',
        'w-full h-[94px]',
        'fixed top-0 left-0 right-0'
      )
    "
  >
    <div
      :class="
        clsx(
          'grid grid-flow-col items-center content-center justify-between justify-items-start',
          'w-full max-w-[1200px]'
        )
      "
    >
      <NuxtImg src="/logo/kaldoo.svg" :class="clsx('w-[150px] h-[44px]')" />

      <div
        v-for="(item, index) in dictionaries.menu"
        :class="
          clsx(
            'grid grid-flow-col items-center content-center justify-center justify-items-center gap-[1rem]'
          )
        "
      >
        <UINavMenuLink :key="index" :id="item.id">
          {{ item.name }}
        </UINavMenuLink>
      </div>

      <div
        :class="
          clsx(
            'grid grid-flow-col items-center content-center justify-end justify-items-end gap-[1rem]'
          )
        "
      >
        <NavLoginLink>{{ dictionaries.cta.login.children }}</NavLoginLink>
        <NavRegisterLink>{{
          dictionaries.cta.register.children
        }}</NavRegisterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
import clsx from "clsx";
import NavLoginLink from "~/components/UI/NavLoginLink.vue";
import NavRegisterLink from "~/components/UI/NavRegisterLink.vue";
import { useRoute } from "vue-router";
import { getDictionaries } from "~/locales/app/i18n";

const route = useRoute();
const locale = route.params?.locale;
const dictionaries = getDictionaries(locale);
</script>
