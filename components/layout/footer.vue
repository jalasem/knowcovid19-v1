<template>
  <footer
    class="flex flex-wrap items-center justify-between px-4 bg-indigo-100 border-t-2 fixed bottom-0 left-0 w-full"
  >
    <nuxt-link to="/" class="brand-logo">
      <img src="/images/logo.png" alt="Knowcovid19.ng" class="h-10" />
    </nuxt-link>
    <div class="social">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/KnowCovid19"
      >
        <img src="/images/twitter.png" alt="twitter" class="icon" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/Know-Covid-19-110856247214930/"
      >
        <img src="/images/facebook.png" alt="fb" class="icon" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://instagram.com/knowcovid19?igshid=eypq1dvfvc0a"
      >
        <img src="/images/instagram.png" alt="IG" class="icon" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="whatsapp://send?text=Take%20this%20simple%20test%20to%20find%20out%20your%20COVID-19%20Risk%20factor on https://knowvid19.ng/risk-check"
      >
        <img src="/images/whatsapp.png" alt="whatsapp" class="icon" />
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
