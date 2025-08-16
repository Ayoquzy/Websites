<template>
  <div id="container">
    <theme-toggle />
    <Logo />
    <CurrentTime />
    <SearchBar />
    <BookmarkGrid />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import ThemeToggle from "./components/ThemeToggle.vue";
import Logo from './components/Logo.vue'
import CurrentTime from './components/CurrentTime.vue'
import SearchBar from './components/SearchBar.vue'
import BookmarkGrid from './components/BookmarkGrid.vue'
import Footer from './components/Footer.vue'
</script>