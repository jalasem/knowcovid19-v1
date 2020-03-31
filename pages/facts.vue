<template>
  <div class="page risk-check">
    <nav-bar />
    <main class="dashboard">
      <div class="wrapper">
        <header>
          <p class="small-title">Facts</p>
          <div class="flex items-center justify-between mb-2">
            <h1 class="page-title mb-2">COVID-19 Facts & Myth busters</h1>
          </div>
        </header>
        <div
          class="content grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3"
        >
          <img
            v-for="i in total"
            :key="`fact-${i}`"
            :src="`/images/facts/fact${i}.jpg`"
            :alt="`fact${i}`"
            class="fact border-gray-400 border rounded hover:border-orange-500 hover:shadow-lg"
            @click="toPreview = i"
          />
        </div>
      </div>
    </main>
    <div v-if="toPreview" class="preview-mode">
      <div class="modal">
        <header>
          <img
            src="/images/close-round.png"
            alt="vectors"
            @click="toPreview = null"
          />
          <div class="navigation">
            <img src="images/previous.png" alt="previous" @click="previous" />
            <img src="images/next.png" alt="next" @click="next" />
          </div>
        </header>
        <div class="content" @click.self="toPreview = null">
          <img
            :src="`/images/facts/fact${toPreview}.jpg`"
            alt="fact"
            class="fact-preview"
            @click="toPreview = null"
          />
        </div>
      </div>
    </div>
    <knowcovid-footer />
  </div>
</template>

<script>
import NavBar from '~/components/layout/navbar.vue'
import KnowcovidFooter from '~/components/layout/footer.vue'

export default {
  components: {
    NavBar,
    KnowcovidFooter
  },
  data: () => ({
    toPreview: null,
    total: 35
  }),
  mounted() {
    window.addEventListener('keypress', (e) => {
      const key = String.fromCharCode(e.keyCode)

      if (key === 'n') this.next()
      if (key === 'p') this.previous()
    })
  },
  beforeDestroy() {
    window.removeEventListener('keypress', this.doCommand)
  },
  methods: {
    previous() {
      if (!this.toPreview) return

      if (this.toPreview > 1) this.toPreview -= 1
    },
    next() {
      if (!this.toPreview) return

      if (this.toPreview < this.total) this.toPreview += 1
    }
  }
}
</script>

<style lang="scss" scoped>
.risk-check {
  @apply pt-16 bg-gray-200 flex flex-col h-screen;

  .dashboard {
    @apply py-4 flex-grow overflow-y-auto flex items-stretch;

    .small-title {
      @apply font-semibold text-xs uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl capitalize;
    }

    .wrapper {
      @apply flex-grow flex flex-col h-full mx-auto;
      max-width: 90rem;
      min-width: 90%;

      .content {
        @apply flex-grow overflow-y-auto bg-white p-2 mb-8;

        .fact {
          cursor: zoom-in;
        }
      }
    }
  }

  .preview-mode {
    @apply fixed top-0 left-0 w-full h-screen bg-black text-white mt-16;
    background-color: #00000042;

    .modal {
      @apply w-full h-screen relative;

      header {
        @apply absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2;

        img {
          @apply h-10;

          &:hover {
            @apply cursor-pointer;
            filter: brightness(2);
          }
        }

        .navigation {
          @apply flex items-center;

          img {
            @apply ml-4;
          }
        }
      }

      .content {
        @apply flex justify-center;
      }
      .fact-preview {
        @apply object-contain;
        height: calc(100vh - 6.5rem);
        cursor: zoom-out;
      }
    }
  }
}
</style>
