<template>
  <div class="page risk-checker">
    <nav-bar />
    <main class="overflow-y-auto">
      <div class="dashboard select-none">
        <p class="small-title">Risk Checker</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title mb-2">Coronavirus Self assesment</h1>
        </div>

        <div class="content assesment">
          <template v-if="!start">
            <p class="question">
              Hello! This risk check self assesment was developed based on the
              guidelines from the WHO. This assesment should not be taken as a
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
            <div class="flex items-center mb-2">
              <p class="question mr-2">How old are you?</p>
              <form @submit.prevent="proceed">
                <input
                  v-model.number="form.age"
                  type="number"
                  required
                  placeholder="Age"
                  class="w-32 text-indigo-800 bg-transparent border-b-2 border-indigo-700 p-1 text-xl focus:outline-none"
                />
                <button
                  v-if="step === 0"
                  class="bg-orange-500 text-xl text-white rounded-full font-medium px-5 focus:outline-none"
                  type="submit"
                >
                  continue
                </button>
              </form>
            </div>
            <div v-if="step > 0" class="flex items-center mb-2">
              <p class="question mr-2">Select your gender please</p>
              <span
                class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                :class="{ 'bg-yellow-200': form.gender === 'male' }"
                @click="setAnswer('gender', 'male', 2)"
                >Male</span
              >
              <span
                class="py-1 px-6 bg-white text-indigo-800 rounded-full cursor-pointer"
                :class="{ 'bg-yellow-200': form.gender === 'female' }"
                @click="setAnswer('gender', 'female', 2)"
                >Female</span
              >
            </div>
            <div v-if="step > 1" class="flex flex-col items-start mb-2">
              <p class="question">
                Do you have fever (i.e body temperature above 37 degrees
                centigrade or 98.6 degrees Fahrenheit)
              </p>
              <p>
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': form.temp === true }"
                  @click="setAnswer('temp', true, 3)"
                  >Yes</span
                >
                <span
                  class="py-1 px-6 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': form.temp === false }"
                  @click="setAnswer('temp', false, 3)"
                  >No</span
                >
              </p>
            </div>
            <div v-if="step > 2" class="flex flex-col items-start mb-2">
              <p class="question">
                <span>Which of these are you experiencing at the moment?</span>
                <sub class="text-sm block pt-2 pb-3"
                  >(You can select more than one if applicable)</sub
                >
              </p>
              <p>
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': form.symptoms.cough === true }"
                  @click="setSymptoms('cough', !form.symptoms.cough, 3)"
                  >Dry cough</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': form.symptoms.sneezing === true }"
                  @click="setSymptoms('sneezing', !form.symptoms.sneezing, 3)"
                  >Sneezing</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{
                    'bg-yellow-200': form.symptoms.soreThroat === true
                  }"
                  @click="
                    setSymptoms('soreThroat', !form.symptoms.soreThroat, 3)
                  "
                  >Sore throat</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': form.symptoms.weakness === true }"
                  @click="setSymptoms('weakness', !form.symptoms.weakness, 3)"
                  >Weakness</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{ 'bg-yellow-200': noSymptoms }"
                  @click="clearSymptoms"
                  >None of these</span
                >
              </p>
            </div>
            <div v-if="step > 3" class="flex flex-col items-start mb-2">
              <p class="question">
                Please select all that applies to you
              </p>
              <p class="flex flex-wrap">
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.travelHistory === false }"
                  @click="setAnswer('travelHistory', !form.travelHistory, 5)"
                  >I have no travel history</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.covidContact === false }"
                  @click="setAnswer('covidContact', !form.covidContact, 5)"
                  >I don't have contact with anyone with symptoms in the last 14
                  days</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.travelContact === false }"
                  @click="setAnswer('travelContact', !form.travelContact, 5)"
                  >I don't have contact with anyone that traveled to China,
                  Iran, UK, Italy, Spain, USA or any ocuntry with over 1000
                  cases in the past 14 days</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.travelHistory === true }"
                  @click="setAnswer('travelHistory', !form.travelHistory, 5)"
                  >I have travel history with China, Iran, UK, Italy, USA, Spain
                  (or any other country with over 1000 cases) in the past 14
                  days</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.covidContact === true }"
                  @click="setAnswer('covidContact', !form.covidContact, 5)"
                  >I had close contact with someone with a confirmed COVID case
                  in the past 14 days</span
                >
              </p>
            </div>
            <div v-if="step > 4" class="flex flex-col items-start mb-2">
              <p class="question">
                <span>
                  Do you have a history of any of these conditions?
                </span>
                <sub class="text-sm block pt-2 pb-3"
                  >(Select all that are applicable to you)</sub
                >
              </p>
              <p class="flex flex-wrap">
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.weakImmunity === true }"
                  @click="setAnswer('weakImmunity', !form.weakImmunity, 6)"
                  >Reduced immunity</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.diabetes === true }"
                  @click="setAnswer('diabetes', !form.diabetes, 6)"
                  >Diabetes</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.bloodPressure === true }"
                  @click="setAnswer('bloodPressure', !form.bloodPressure, 6)"
                  >High blood pressure</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.heartDisease === true }"
                  @click="setAnswer('heartDisease', !form.heartDisease, 6)"
                  >Heart disease</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.stroke === true }"
                  @click="setAnswer('stroke', !form.stroke, 6)"
                  >Stroke</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer mb-2"
                  :class="{ 'bg-yellow-200': form.lungDisease === true }"
                  @click="setAnswer('lungDisease', !form.lungDisease, 6)"
                  >Lung disease</span
                >
              </p>
            </div>
            <div
              v-if="step > 5 && !noSymptoms"
              class="flex flex-col items-start mb-2"
            >
              <p class="question mr-2">
                How has your symptoms progressed in the last 48 hours?
              </p>
              <p class="flex flex-wrap">
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{
                    'bg-yellow-200': form.symptomStatus === 'improved'
                  }"
                  @click="setAnswer('symptomStatus', 'improved', 7)"
                  >Improved</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{
                    'bg-yellow-200': form.symptomStatus === 'same'
                  }"
                  @click="setAnswer('symptomStatus', 'same', 7)"
                  >No difference</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{
                    'bg-yellow-200': form.symptomStatus === 'worsened'
                  }"
                  @click="setAnswer('symptomStatus', 'worsened', 7)"
                  >Worsened</span
                >
                <span
                  class="py-1 px-6 mr-2 bg-white text-indigo-800 rounded-full cursor-pointer"
                  :class="{
                    'bg-yellow-200': form.symptomStatus === 'severe'
                  }"
                  @click="setAnswer('symptomStatus', 'severe', 7)"
                  >Severe</span
                >
              </p>
            </div>
            <button
              v-if="stepsWithNext.includes(step)"
              class="bg-orange-500 text-xl text-white rounded-full py-1 font-medium px-10 mt-2 focus:outline-none"
              @click="proceed"
            >
              Next
            </button>
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
    stepsWithNext: [3, 4, 5],
    form: {
      age: null,
      gender: '',
      temp: '',
      symptoms: {
        cough: false,
        sneezing: false,
        soreThroat: false,
        weakness: false
      },
      travelHistory: false,
      travelContact: false,
      covidContact: false,

      weakImmunity: false,
      diabetes: false,
      bloodPressure: false,
      heartDisease: false,
      stroke: false,
      lungDisease: false,
      symptomStatus: null
    }
  }),
  computed: {
    noSymptoms() {
      const { cough, sneezing, soreThroat, weakness } = this.form.symptoms
      return !cough && !sneezing && !soreThroat && !weakness
    }
  },
  methods: {
    setAnswer(field, answer, step) {
      this.form[field] = answer

      if (step === 7) this.reviewEntries()
      if (this.step < step) this.proceed(step)
    },
    setSymptoms(field, answer, step) {
      this.form.symptoms[field] = answer

      if (this.step < step) this.proceed(step)
    },
    clearSymptoms() {
      this.form.symptoms = {
        cough: false,
        sneezing: false,
        soreThroat: false,
        weakness: false
      }
    },
    proceed(step) {
      this.step += 1
    },
    reviewEntries() {}
  }
}
</script>

<style lang="scss">
.risk-checker.page {
  @apply pt-16 bg-gray-200 flex flex-col h-screen;

  .dashboard {
    @apply mx-auto py-4 flex-grow;
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
