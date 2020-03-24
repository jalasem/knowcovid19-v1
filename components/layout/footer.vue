<template>
  <footer
    class="flex flex-wrap items-center justify-between px-4 bg-indigo-100 border-t-2 fixed bottom-0 left-0 w-full"
  >
    <nuxt-link to="/" class="brand-logo">
      <img src="/logo.png" alt="Knowcovid19.ng" class="h-10" />
    </nuxt-link>
    <div class="social">
      <a href="#">
        <img src="/vectors/twitter.svg" alt="twitter" class="icon" />
      </a>
      <a href="#">
        <img src="/vectors/facebook.svg" alt="fb" class="icon" />
      </a>
      <a href="#">
        <img src="/vectors/linkedin.svg" alt="linkedin" class="icon" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor on https://knowvid19.now.sh"
      >
        <img src="/vectors/whatsapp.svg" alt="whatsapp" class="icon" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .brand-logo {
    @apply text-sm relative;

    sub {
      right: -0.75rem;
    }
  }

  .social {
    @apply flex items-center my-2;

    .icon {
      @apply w-4 mr-2;
    }
  }
}
</style>
