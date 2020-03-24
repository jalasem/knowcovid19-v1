<template>
  <div class="page risk-checker">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">Risk Checker</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title mb-2">Coronavirus Self assesment</h1>
        </div>

        <div class="content assesment">
          <template v-if="!start">
            <p class="question">
              Hello! This risk check self assesment was developed based on the
              guidelines from the WHO. This assesment should not be taken a s a
              medical advice. Any information you share with us will be kept
              strictly confidential.
            </p>
            <button
              class="bg-indigo-600 text-white rounded-full py-2 px-10 mt-2 focus:outline-none"
              @click="start = true"
            >
              Start
            </button>
          </template>
          <template v-else>
            <div class="flex items-center">
              <p class="question mr-2">How old are you?</p>
              <form @submit.prevent>
                <input
                  v-model.number="form.age"
                  type="number"
                  placeholder="Age"
                  class="text-indigo-800 border-b-2 border-indigo-700 p-1 text-xl focus:outline-none"
                />
              </form>
            </div>
          </template>
        </div>
      </div>
    </main>
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
    start: false,
    step: 0,
    form: {
      age: null
    }
  }),
  methods: {
    proceed() {}
  }
}
</script>

<style lang="scss">
.risk-checker {
  @apply pt-16;

  .dashboard {
    @apply mx-auto py-4;
    max-width: 85rem;

    .small-title {
      @apply font-semibold text-xs uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl capitalize;
    }

    .content {
      p {
        @apply text-xl my-2;
      }
    }
  }

  main {
    @apply px-4 pb-24;
  }

  .assesment {
    .question {
      @apply bg-indigo-600 text-white rounded p-2;
    }
  }
}
</style>
