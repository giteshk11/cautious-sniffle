<template>
  <nav class="flex px-6 py-4 items-baseline gap-x-4 bg-slate-100">
    <h2>SQL Query Runner</h2>
    <ul class="flex items-center">
      <li>
        <button @click="$emit('clicked')" class="flex items-center">
          Run
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-green-500 fill-current mt-0.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style>
li {
  @apply cursor-pointer;
}
</style>
