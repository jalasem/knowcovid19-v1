<template>
  <div class="page home">
    <nav>
      <nuxt-link to="/" class="brand-logo">
        KnowCOVID19
      </nuxt-link>
      <div class="nav-group">
        <a href="#">Helpline</a>
        <a href="#">Report</a>
        <a href="#">Supplies/Tracking</a>
        <a href="#">About</a>
      </div>
      <div class="nav-group social">
        <a href="#">
          <img src="/vectors/twitter.svg" alt="twitter" class="icon" />
        </a>
        <a href="#">
          <img src="/vectors/facebook.svg" alt="twitter" class="icon" />
        </a>
        <a href="#">
          <img src="/vectors/linkedin.svg" alt="twitter" class="icon" />
        </a>
      </div>
    </nav>
    <main>
      <div class="cases-summary">
        <div class="box">
          <header>COVID19 Cases (World)</header>
          <div class="content">
            <p class="mb-2">
              <span class="text-3xl font-light">Cases</span>
              <br />
              <span class="font-semibold text-xl">275,021</span>
            </p>
            <p class="mb-2">
              <span class="text-3xl font-light">Deaths</span>
              <br />
              <span class="font-semibold text-xl">11,370</span>
            </p>
            <p>
              <span class="text-3xl font-light">Recovered</span>
              <br />
              <span class="font-semibold text-xl">90,943</span>
            </p>
          </div>
        </div>
        <div class="box">
          <header>COVID19 Cases (Nigeria)</header>
          <div class="content">
            <p class="mb-2">
              <span class="text-3xl font-light">Cases</span>
              <br />
              <span class="font-semibold text-xl">12</span>
            </p>
            <p class="mb-2">
              <span class="text-3xl font-light">Deaths</span>
              <br />
              <span class="font-semibold text-xl">0</span>
            </p>
            <p>
              <span class="text-3xl font-light">Recovered</span>
              <br />
              <span class="font-semibold text-xl">1</span>
            </p>
          </div>
        </div>
        <div v-for="i in 3" :key="i" class="box">
          <header>COVID19 Cases (Dummy)</header>
          <div class="content">
            <p class="mb-2">
              <span class="text-3xl font-light">Cases</span>
              <br />
              <span class="font-semibold text-xl">12</span>
            </p>
            <p class="mb-2">
              <span class="text-3xl font-light">Deaths</span>
              <br />
              <span class="font-semibold text-xl">0</span>
            </p>
            <p>
              <span class="text-3xl font-light">Recovered</span>
              <br />
              <span class="font-semibold text-xl">1</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home {
  @apply pt-16;
  nav {
    @apply flex justify-between h-16 items-center border-b border-2 px-4 fixed top-0 left-0 w-full;

    .brand-logo {
      @apply text-xl font-medium;
    }

    .nav-group {
      @apply flex items-center;

      a {
        @apply px-2;
        color: $primary;

        &:hover {
          color: $tertiary;
        }
      }

      .icon {
        @apply h-6 -mx-1;
      }
    }
  }

  .cases-summary {
    @apply flex p-1;

    .box {
      @apply flex-grow;
    }
  }
}
</style>
