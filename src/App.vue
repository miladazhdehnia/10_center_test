<template>
  <div id="app">
    <div class="container mx-auto h-full bg-gray-100">
      <Header />
      <div class="flex flex-row h-full">
        <SideNavbar />
        <div class="flex flex-col flex-grow">
          <!-- app content start here -->
          <div
            class="block bg-white p-4 sm:rounded-0 md:rounded-l-lg shadow-white mt-1"
            style="overflow: auto;"
          >
            <AppBar />
            <!-- router content here -->
            <router-view></router-view>
          </div>
          <!-- app content end here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavbar from "./components/SideNavbar";
import AppBar from "./components/AppBar";
import Header from "./layouts/Header";

export default {
  name: "App",
  components: {
    SideNavbar,
    AppBar,
    Header
  }
};
</script>

<style></style>
