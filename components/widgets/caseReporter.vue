<template>
  <div class="widget case-reporter" @click.self="closeWidget">
    <div class="modal">
      <header>
        <span class="text-2xl font-semibold">Report a case</span>
        <img
          src="/vectors/close.svg"
          alt="vectors"
          class="h-5 cursor-pointer"
          @click="closeWidget"
        />
      </header>
      <div class="content">
        <select class="mb-4 pr-5 focus:outline-none bg-transparent">
          <option value="self">I'm filling for myself</option>
          <option value="thirdParty">I'm filling for somebody else</option>
        </select>
        <form class="grid grid-cols-1 row-gap-3 px-2" @submit.prevent>
          <div class="form-field">
            <label>Title</label>
            <div class="options">
              <span
                class="option"
                :class="{ selected: form.title === 'mr' }"
                @click="setAnswer('title', 'mr')"
                >Mr</span
              >
              <span
                class="option"
                :class="{ selected: form.title === 'mrs' }"
                @click="setAnswer('title', 'mrs')"
                >Mrs</span
              >
              <span
                class="option"
                :class="{ selected: form.title === 'dr' }"
                @click="setAnswer('title', 'dr')"
                >Dr</span
              >
              <span
                class="option"
                :class="{ selected: form.title === 'miss' }"
                @click="setAnswer('title', 'miss')"
                >Miss</span
              >
            </div>
          </div>
          <div class="form-field">
            <label>Fullname</label>
            <input type="text" />
          </div>
          <div class="form-field">
            <label>Phone number</label>
            <input type="text" />
          </div>
          <div class="form-field">
            <label>Email address</label>
            <input type="email" />
          </div>
          <div class="form-field pb-1">
            <label>Gender</label>
            <select class="mt-2 mb-1 focus:outline-none bg-transparent">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="form-field">
            <label
              >Have you experience any of the following symptoms in the last 1
              weeks?</label
            >
            <div class="options justify-center pt-2">
              <span class="option">No symptoms</span>
              <span class="option">Shortness of breath</span>
              <span class="option">Nasal congestion</span>
              <span class="option">Dry cough</span>
              <span class="option">Fever</span>
              <span class="option">Sore throat</span>
              <span class="option">Running nose</span>
              <span class="option">Diarrhea</span>
              <span class="option">Abdominal pain</span>
            </div>
          </div>
          <div class="form-field">
            <label
              >Have you been to any country(ies) outside your country of
              residence in the past month?</label
            >
            <div class="options pt-2">
              <span class="option">Yes</span>
              <span class="option">No</span>
            </div>
          </div>
          <div class="form-field">
            <div class="flex">
              <div class="flex-grow flex flex-col mr-4 pb-2">
                <label class="mb-3">Country</label>
                <select>
                  <option value="nigeria">Nigeria</option>
                </select>
              </div>
              <div class="flex-grow flex flex-col ml-4 pb-2">
                <label class="mb-3">State</label>
                <select>
                  <option :value="null">Choose state</option>
                  <option
                    v-for="state in nigerianStates"
                    :key="state.alias"
                    value="state.alias"
                    v-text="state.name"
                  />
                </select>
              </div>
            </div>
          </div>
          <div class="form-field">
            <label>Address</label>
            <textarea></textarea>
          </div>
          <div class="form-field justify-end">
            <button
              v-ripple
              type="submit"
              class="py-2 px-8 bg-purple-800 text-white hover:bg-orange-600 focus:outline-none text-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import nigerianStates from '~/assets/data/nigerianStates'
export default {
  data: () => ({
    form: {
      title: ''
    },
    nigerianStates
  }),
  methods: {
    closeWidget() {
      this.$eventBus.$emit('close-case-report')
    },
    setAnswer(field, value) {
      this.form[field] = value
    }
  }
}
</script>

<style lang="scss" scoped>
.case-reporter {
  @apply fixed top-0 left-0 w-screen h-screen z-50 overflow-y-auto;
  background-color: #00000042;

  .modal {
    @apply mx-auto max-w-xl mt-6 bg-white rounded shadow;

    header {
      @apply flex justify-between items-center px-4 py-2 border-b-2 border-gray-100;
    }

    .content {
      @apply p-4;
    }

    .form-field {
      @apply flex flex-col border pt-1;

      label {
        @apply px-2;
      }

      input {
        @apply border-b-2 border-gray-500 font-medium pb-1 px-2 text-xl;

        &:focus {
          @apply outline-none;
        }
      }

      textarea {
        @apply h-20 mt-1 px-2;

        &:focus {
          @apply outline-none;
        }
      }

      .options {
        @apply px-2 flex flex-wrap items-center;
        user-select: none;

        .option {
          @apply py-1 px-4 mt-1 mb-2 rounded mx-1 bg-gray-200 text-black shadow cursor-pointer;

          &.selected {
            @apply bg-indigo-700 text-white;
          }
        }
      }
    }
  }
}
</style>
