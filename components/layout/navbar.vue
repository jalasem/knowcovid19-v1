<template>
  <nav class="relative">
    <div class="flex items-center">
      <div class="flex items-center md:hidden" @click="toggleMenu">
        <img
          src="/images/menu.png"
          alt="menu"
          class="menu-toggle h-6 w-6 mr-3 cursor-pointer"
          :class="{ open: menuOpen }"
        />
      </div>
      <nuxt-link to="/" class="brand-logo">
        <!-- KnowCOVID19<span class="md:inline-flex hidden">.<sub>ng</sub></span> -->
        <img src="/logo.png" alt="Knowcovid19.ng" class="h-12" />
      </nuxt-link>
    </div>
    <div class="nav-group md:flex hidden">
      <nuxt-link to="/">Dashbooard</nuxt-link>
      <nuxt-link to="/risk-checker">Risk Checker</nuxt-link>
      <!-- <a href="#">Facts</a> -->
      <a href="#">Case Tracking</a>
      <!-- <a href="#">Africa</a>
        <a href="#">Worldwide</a> -->
      <a href="#">Funding</a>
      <!-- <a href="#">Supplies/Tracking</a> -->
      <nuxt-link to="/about">About</nuxt-link>
    </div>
    <div class="nav-group flex social">
      <button
        class="py-1 md:px-3 px-5 bg-indigo-800 hover:bg-yellow-700 focus:outline-none text-white rounded"
      >
        Report a case
      </button>
      <!-- <a href="#">
          <img src="/images/twitter.png" alt="twitter" class="icon" />
        </a>
        <a href="#">
          <img src="/images/facebook.png" alt="twitter" class="icon" />
        </a>
        <a href="#">
          <img src="/images/linkedin.png" alt="twitter" class="icon" />
        </a> -->
    </div>
    <aside :class="{ open: menuOpen }">
      <div class="flex items-center h-16 mb-6 mr-3">
        <nuxt-link to="/" class="text-xl font-medium relative text-indigo-800">
          KnowCOVID19.
          <sub class="mb-2 text-yellow-600">ng</sub>
        </nuxt-link>
        <div @click="toggleMenu">
          <img
            src="/images/close.png"
            alt="menu"
            class="menu-toggle h-4 w-4 ml-8 cursor-pointer"
          />
        </div>
      </div>
      <nuxt-link to="/">Dashbooard</nuxt-link>
      <a href="#">Facts</a>
      <a href="#">Case Tracking</a>
      <!-- <a href="#">Africa</a>
        <a href="#">Worldwide</a> -->
      <a href="#">Funding</a>
      <!-- <a href="#">Supplies/Tracking</a> -->
      <nuxt-link to="/about">About</nuxt-link>
    </aside>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menuOpen: false
  }),
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  @apply bg-white flex justify-between h-16 items-center border-b border-2 px-4 fixed top-0 left-0 w-full z-50;

  .menu-toggle.open {
    transform: rotate(90deg);
  }

  .brand-logo {
    @apply text-xl font-medium relative;
    color: $primary;

    sub {
      @apply absolute;
      right: -1rem;
      bottom: 47%;
      font-size: 70%;
      color: $tertiary;
    }
  }

  .nav-group {
    @apply items-center;

    a {
      @apply px-2 font-medium;
      color: $primary;

      &:hover {
        color: $tertiary;
      }
    }

    .icon {
      @apply h-6 -mx-1;
    }
  }

  aside {
    @apply absolute top-0 left-0 h-screen border-r-2 border-indigo-100 bg-white -ml-64;

    &.open {
      @apply ml-0;
    }

    a {
      @apply flex items-center px-4 py-1;

      &:hover {
        @apply bg-indigo-100;
      }
    }
  }
}
</style>
