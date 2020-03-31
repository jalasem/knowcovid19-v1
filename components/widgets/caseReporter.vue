<template>
  <div class="widget case-reporter" @click.self="closeWidget">
    <div class="modal">
      <header>
        <span class="text-2xl font-semibold">{{
          feedback ? 'Feedback' : 'Report a case'
        }}</span>
        <img
          src="/vectors/close.svg"
          alt="vectors"
          class="h-5 cursor-pointer"
          @click="closeWidget"
        />
      </header>
      <div v-if="!feedback" class="content">
        <select class="mb-4 pr-5 focus:outline-none bg-transparent">
          <option value="self">I'm filling for myself</option>
          <option value="thirdParty">I'm filling for somebody else</option>
        </select>
        <form class="grid grid-cols-1 row-gap-3 px-2" @submit.prevent="submit">
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
            <input v-model="form.fullname" type="text" required />
          </div>
          <div class="form-field">
            <label>Phone number</label>
            <input v-model="form.phone" type="text" required />
          </div>
          <div class="form-field">
            <label>Email address</label>
            <input v-model="form.email" type="email" required />
          </div>
          <div class="form-field pb-1">
            <label>Gender</label>
            <div class="options pt-1">
              <span
                class="option"
                :class="{ selected: form.gender === 'male' }"
                @click="setAnswer('gender', 'male')"
                >Male</span
              >
              <span
                class="option"
                :class="{ selected: form.gender === 'female' }"
                @click="setAnswer('gender', 'female')"
                >Female</span
              >
            </div>
          </div>
          <div class="form-field">
            <label
              >Have you experience any of the following symptoms in the last 1
              weeks?</label
            >
            <div class="options justify-center pt-2">
              <span
                v-for="symptom in symptoms"
                :key="symptom.alias"
                class="option"
                :class="{ selected: hasSymptom(symptom.alias) }"
                @click="setSymptom(symptom.alias)"
                v-text="symptom.name"
              />
            </div>
          </div>
          <div class="form-field">
            <label
              >Have you been to any country(ies) outside your country of
              residence in the past month?</label
            >
            <div class="options pt-2">
              <span
                class="option"
                :class="{ selected: form.travelHistory }"
                @click="setAnswer('travelHistory', true)"
                >Yes</span
              >
              <span
                :class="{ selected: !form.travelHistory }"
                class="option"
                @click="setAnswer('travelHistory', false)"
                >No</span
              >
            </div>
          </div>
          <div class="form-field">
            <label
              >Have you been in contact with any confirmed (COVID-19)
              case?</label
            >
            <div class="options pt-2">
              <span
                class="option"
                :class="{ selected: form.covidContact }"
                @click="setAnswer('covidContact', true)"
                >Yes</span
              >
              <span
                :class="{ selected: !form.covidContact }"
                class="option"
                @click="setAnswer('covidContact', false)"
                >No</span
              >
            </div>
          </div>
          <div class="form-field">
            <label>Are you under treatment for any other ailment?</label>
            <div class="options pt-2">
              <span
                class="option"
                :class="{ selected: form.existingAilment }"
                @click="setAnswer('existingAilment', true)"
                >Yes</span
              >
              <span
                :class="{ selected: !form.existingAilment }"
                class="option"
                @click="setAnswer('existingAilment', false)"
                >No</span
              >
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
                <select
                  v-model="form.state"
                  class="focus:outline-none"
                  required
                >
                  <option selected disabled>Choose state</option>
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
            <textarea v-model="form.address" required></textarea>
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
      <div v-else class="content">
        <!-- <p class="text-3xl font-semibold">Thank you</p> -->
        <p class="text-2xl font-semibold text-indigo-700 mb-2">
          While we try our best to link you up with the best help you can get,
          do the following;
        </p>
        <ul class="text-xl mb-3">
          <li class="ml-5 list-disc">Stay calm</li>
          <li class="ml-5 list-disc">
            Isolate yourself from family and friends
          </li>
          <li class="ml-5 list-disc">
            Call NCDC on: 08000CORONA 08023169485, 08033565529, 08052817243
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import nigerianStates from '~/assets/data/nigerianStates'
export default {
  data: () => ({
    feedback: false,
    form: {
      title: 'mr',
      fullname: '',
      phone: '',
      email: '',
      gender: 'male',
      symptoms: [],
      covidContact: false,
      existingAilment: false,
      travelHistory: false,
      state: '',
      address: ''
    },
    symptoms: [
      { name: 'No symptoms', alias: 'noSymptoms' },
      { name: 'Shortness of breath', alias: 'difficultyBreathing' },
      { name: 'Nasal congestion', alias: 'nasalCongestion' },
      { name: 'Dry cough', alias: 'dryCough' },
      { name: 'fever', alias: 'fever' },
      { name: 'Sore throat', alias: 'soreThroat' },
      { name: 'Runny nose', alias: 'runnyNose' },
      { name: 'Diarrhea', alias: 'diarrhea' },
      { name: 'Abdominal pain', alias: 'abdominalPain' },
      { name: 'Aches and pains', alias: 'achesAndPains' },
      { name: 'Fatigue', alias: 'fatigue' },
      { name: 'Pressure in the chest', alias: 'chestPressure' }
    ],
    nigerianStates
  }),
  methods: {
    closeWidget() {
      this.$eventBus.$emit('close-case-report')
    },
    setAnswer(field, value) {
      this.form[field] = value
    },
    setSymptom(symptom) {
      if (symptom === 'noSymptoms') {
        this.form.symptoms = []
        return
      }

      if (this.form.symptoms.includes(symptom)) {
        this.form.symptoms = this.form.symptoms.filter(
          (aSymptom) => aSymptom !== symptom
        )
      } else {
        this.form.symptoms.push(symptom)
      }
    },
    hasSymptom(symptom) {
      return symptom === 'noSymptoms'
        ? !this.form.symptoms.length
        : this.form.symptoms.includes(symptom)
    },
    async submit() {
      const loader = this.$loading.show()
      try {
        const { data } = await this.$axios.post('/central/report', {
          ...this.form,
          symptoms: this.form.symptoms.join(', ')
        })

        const { status } = data

        if (status === 'success') this.feedback = true
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log({ err })
      } finally {
        loader.hide()
      }
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
