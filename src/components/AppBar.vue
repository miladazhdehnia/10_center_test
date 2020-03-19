<template>
  <div class="flex flex-row h-16 justify-between">
    <span class="text-blue-100 text-xl"> Title </span>
    <div class="nav-buttons flex justify-between items-baseline align-middle">
      <button
        class="rounded-lg px-3 py-1 bg-white-300 text-gray-600 shadow-md mr-4 align-middle"
      >
        <img
          class="inline-block mr-1 h-4 align-middle"
          src="../assets\Sample\Path1185.png"
          alt=""
        />
        <router-link to="/">Back</router-link>
      </button>
      <button class="rounded-lg px-3 py-1 bg-orange-300 text-white">
        <router-link to="/step2">Next</router-link>

        <img
          class="inline-block ml-1 h-4 align-middle"
          src="../assets\Sample\Path-4.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
