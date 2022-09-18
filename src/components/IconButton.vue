<template>
  <button
    type="button"
    class="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    @click="$emit('clicked')"
  >
    <!-- Heroicon name: mini/plus -->
    <slot name="icon" />
  </button>
</template>
