<template>
  <div class="page risk-check">
    <nav-bar />
    <main class="overflow-y-auto">
      <div class="dashboard select-none">
        <p class="small-title">Risk Checker</p>
        <div class="flex items-center justify-between mb-5">
          <h1 class="page-title mb-2">Coronavirus Self assesment</h1>
        </div>
        <div class="content assesment">
          <template v-if="step === 0">
            <p class="question">
              Hello! This risk check self assesment was developed based on the
              guidelines from the WHO. This assesment should not be taken as a
              medical advice. Any information you share with us will be kept
              strictly confidential.
            </p>
            <button
              class="bg-indigo-600 text-white rounded-full py-2 px-10 mt-2 focus:outline-none"
              @click="step = 1"
            >
              Start
            </button>
          </template>
          <template v-if="step > 0">
            <p class="question flex items-center">
              <img src="/images/cough.png" class="h-12 mr-5" alt="cough" />
              <span>Do you have cough?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('cough', 'yes') }"
                class="option"
                @click="setField('cough', 'yes', 2)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('cough', 'no') }"
                class="option"
                @click="setField('cough', 'no', 2)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 1">
            <p class="question flex items-center">
              <img src="/images/runnyNose.png" alt="runnyNose" />
              <span>Do you have runny nose?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('runnyNose', 'yes') }"
                class="option"
                @click="setField('runnyNose', 'yes', 3)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('runnyNose', 'no') }"
                class="option"
                @click="setField('runnyNose', 'no', 3)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 2">
            <p class="question flex items-center">
              <img src="/images/diarrhea.png" alt="runnyNose" />
              <span>Are you having diarrhea?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('diarrhea', 'yes') }"
                class="option"
                @click="setField('diarrhea', 'yes', 4)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('diarrhea', 'no') }"
                class="option"
                @click="setField('diarrhea', 'no', 4)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 3">
            <p class="question flex items-center">
              <img src="/images/headache.png" alt="runnyNose" />
              <span>Do you have headache?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('headache', 'yes') }"
                class="option"
                @click="setField('headache', 'yes', 5)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('headache', 'no') }"
                class="option"
                @click="setField('headache', 'no', 5)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 4">
            <p class="question flex items-center">
              <img src="/images/pain.png" alt="runnyNose" />
              <span>Are you experiencing body pain?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('bodyPain', 'yes') }"
                class="option"
                @click="setField('bodyPain', 'yes', 6)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('bodyPain', 'no') }"
                class="option"
                @click="setField('bodyPain', 'no', 6)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 5">
            <p class="question flex items-center">
              <img src="/images/sore-throat.png" alt="runnyNose" />
              <span>Are you having sore throat?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('soreThroat', 'yes') }"
                class="option"
                @click="setField('soreThroat', 'yes', 7)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('soreThroat', 'no') }"
                class="option"
                @click="setField('soreThroat', 'no', 7)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 6">
            <p class="question flex items-center">
              <img src="/images/fever.png" alt="runnyNose" />
              <span
                >Are you having fever (temperature 37.8<sup>o</sup>C and
                above)?</span
              >
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('fever', 'yes') }"
                class="option"
                @click="setField('fever', 'yes', 8)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('fever', 'no') }"
                class="option"
                @click="setField('fever', 'no', 8)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 7">
            <p class="question flex items-center">
              <img src="/images/breathing.png" alt="runnyNose" />
              <span>Are you having difficulty breathing?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{
                  selected: checkField('breathingDifficulty', 'yes')
                }"
                class="option"
                @click="setField('breathingDifficulty', 'yes', 9)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('breathingDifficulty', 'no') }"
                class="option"
                @click="setField('breathingDifficulty', 'no', 9)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 8">
            <p class="question flex items-center">
              <img src="/images/fatigue.png" alt="runnyNose" />
              <span>Are you experiencing fatigue?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('fatigue', 'yes') }"
                class="option"
                @click="setField('fatigue', 'yes', 10)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('fatigue', 'no') }"
                class="option"
                @click="setField('fatigue', 'no', 10)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 9">
            <p class="question flex items-center">
              <img src="/images/travel.png" alt="runnyNose" />
              <span>Have you traveled recently (during the past 14 days)?</span>
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('travel', 'yes') }"
                class="option"
                @click="setField('travel', 'yes', 11)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('travel', 'no') }"
                class="option"
                @click="setField('travel', 'no', 11)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 10">
            <p class="question flex items-center">
              <img src="/images/covid-area.png" alt="runnyNose" />
              <span
                >Do you have a travel history with COVID-19 infected area?</span
              >
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('travelToCovid', 'yes') }"
                class="option"
                @click="setField('travelToCovid', 'yes', 12)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('travelToCovid', 'no') }"
                class="option"
                @click="setField('travelToCovid', 'no', 12)"
                >No</span
              >
            </div>
          </template>
          <template v-if="step > 11">
            <p class="question flex items-center">
              <img src="/images/sick.png" alt="runnyNose" />
              <span
                >Do you have direct contact or taking care of a positive
                COVID-19 patient?</span
              >
            </p>
            <div class="options">
              <span
                v-ripple
                :class="{ selected: checkField('covidContact', 'yes') }"
                class="option"
                @click="setField('covidContact', 'yes', 13)"
                >Yes</span
              >
              <span
                v-ripple
                :class="{ selected: checkField('covidContact', 'no') }"
                class="option"
                @click="setField('covidContact', 'no', 13)"
                >No</span
              >
            </div>
          </template>
        </div>
      </div>
    </main>
    <div v-if="riskLevel" class="risk-report">
      <div class="modal">
        <header>
          <span class="text-2xl font-semibold text-indigo-900"
            >Risk Assesment Report</span
          >
          <img
            src="/vectors/close.svg"
            alt="vectors"
            class="h-5 cursor-pointer"
            @click="$router.push('/')"
          />
        </header>
        <div class="content">
          <div
            v-if="riskLevel === 'High' || riskLevel === 'Very high'"
            class="text-center"
          >
            <img
              v-if="riskLevel === 'Very high'"
              src="/images/alarm.png"
              alt=""
              class="risk-indicator"
            />
            <img v-else src="/images/alert.png" alt="" class="risk-indicator" />
            <p class="text-3xl mb-3 text-red-600 font-semibold">
              You are at high risk
            </p>
            <p class="text-xl font-medium mb-4">Please do the following;</p>
            <ul class="text-xl">
              <li>
                <img src="/images/check.png" alt="cehck" /> Don't Panic, stay
                calm
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" />
                <span>
                  Isolate yourself. You'll find
                  <a
                    href="https://ncdc.gov.ng/themes/common/docs/protocols/188_1584550150.pdf"
                    target="_blank"
                    rel="noreferer noopener nofollow"
                    >this guide by NCDC</a
                  >
                  on self isolation very useful
                </span>
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" /> When you feel
                unwell, Call NCDC on 08000CORONA 08023169485, 08033565529,
                08052817243.
              </li>
            </ul>
            <div class="flex justify-center">
              <nuxt-link
                to="/"
                class="home-btn hover:bg-orange-500 focus:outline-none"
                >Dashboard</nuxt-link
              >
            </div>
          </div>
          <div v-if="riskLevel === 'Medium'" class="text-center">
            <img src="/images/medium.png" alt="" class="risk-indicator" />
            <p class="text-3xl mb-3 text-orange-600 font-semibold">
              You are at medium risk
            </p>
            <p class="text-xl font-medium mb-4">Please do the following;</p>
            <ul class="text-xl">
              <li>
                <img src="/images/check.png" alt="cehck" /> Hydrate properly
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" />
                Observe personal hygiene. Wash your hands with soap and water
                for a minimum of 20 seconds regulary and use hand sanitizers.
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" /> Observe and
                re-evaluate yourself after 2-3 days. If you feel unwell, Call
                NCDC on 08000CORONA 08023169485, 08033565529, 08052817243.
              </li>
            </ul>
            <div class="flex justify-center">
              <nuxt-link
                to="/"
                class="home-btn hover:bg-orange-500 focus:outline-none"
                >Dashboard</nuxt-link
              >
            </div>
          </div>
          <div v-if="riskLevel === 'Low'" class="text-center">
            <img src="/images/slow.png" alt="" class="risk-indicator" />
            <p class="text-3xl mb-3 text-orange-600 font-semibold">
              You are at low risk
            </p>
            <p class="text-xl font-medium mb-4">
              You might just be stressed. Please do the following;
            </p>
            <ul class="text-xl">
              <li>
                <img src="/images/check.png" alt="cehck" /> Hydrate properly
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" />
                Observe personal hygiene. Wash your hands with soap and water
                for a minimum of 20 seconds regulary and use hand sanitizers.
              </li>
              <li>
                <img src="/images/check.png" alt="cehck" /> Observe and
                re-evaluate yourself after 2-3 days. If you feel unwell, Call
                NCDC on 08000CORONA 08023169485, 08033565529, 08052817243.
              </li>
            </ul>
            <div class="flex justify-center">
              <nuxt-link
                to="/"
                class="home-btn hover:bg-orange-500 focus:outline-none"
                >Dashboard</nuxt-link
              >
            </div>
          </div>
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
    evaluating: false,
    // resultComputed: null,
    resultComputed: false,
    step: 0,
    existingAilment: false,
    // questions
    cough: '',
    runnyNose: '',
    diarrhea: '',
    headache: '',
    bodyPain: '',
    soreThroat: '',
    fever: '',
    breathingDifficulty: '',
    fatigue: '',
    travel: '',
    travelToCovid: '',
    covidContact: ''
  }),
  computed: {
    riskLevel() {
      const score = this.resultComputed

      if (!score) {
        return score !== 0 ? false : 'low'
      } else if (score >= 12 && score <= 20) {
        return 'Very high'
      } else if (score >= 6 && score < 12) {
        return 'High'
      } else if (score >= 3 && score <= 5) {
        return 'Medium'
      } else {
        return 'Low'
      }
    }
  },
  methods: {
    checkField(field, value) {
      return this[field] === value
    },
    setField(field, value, step) {
      this[field] = value

      if (step === 13) this.reviewEntries()
      if (this.step < step) this.step = step

      // auto scroll
      const container = document.querySelector('main')
      container.scrollTop = container.scrollHeight
    },
    async reviewEntries() {
      let totalScore = 0
      const symptoms = []
      const payload = {}

      if (this.cough === 'yes') {
        symptoms.push('cough')
        totalScore += 1
      }
      if (this.runnyNose === 'yes') {
        symptoms.push('runnyNose')
        totalScore += 1
      }
      if (this.diarrhea === 'yes') {
        symptoms.push('diarrhea')
        totalScore += 1
      }
      if (this.headache === 'yes') {
        symptoms.push('headache')
        totalScore += 1
      }
      if (this.bodyPain === 'yes') {
        symptoms.push('bodyPain')
        totalScore += 1
      }
      if (this.soreThroat === 'yes') {
        symptoms.push('soreThroat')
        totalScore += 1
      }
      if (this.fever === 'yes') {
        symptoms.push('fever')
        totalScore += 1
      }
      if (this.breathingDifficulty === 'yes') {
        symptoms.push('breathingDifficulty')
        totalScore += 2
      }
      if (this.fatigue === 'yes') {
        symptoms.push('fatigue')
        totalScore += 2
      }
      if (this.travel === 'yes') {
        payload.travelHistory = true
        totalScore += 3
      }
      if (this.travelToCovid === 'yes') {
        payload.travelToCovid = true
        totalScore += 3
      }
      if (this.covidContact === 'yes') {
        payload.covidContact = true
        totalScore += 3
      }

      payload.symptoms = symptoms
      payload.score = totalScore
      // submit
      const loader = this.$loading.show()
      try {
        await this.$axios.post('/central/assesment', payload)
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log({ err })
      } finally {
        loader.hide()
        this.resultComputed = totalScore
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.risk-check {
  @apply pt-16 px-2 bg-gray-200 flex flex-col h-screen;

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
      // p {
      //   @apply text-xl my-2;
      // }

      ul {
        @apply mb-5;

        li {
          @apply list-disc ml-5 text-xl;
        }
      }
    }
  }
}

.question {
  @apply py-2 px-1 rounded-lg rounded-tr-none rounded-br-lg bg-indigo-600 text-white text-xl;

  img {
    @apply h-12 mr-5  ml-2;
  }
}

.options {
  @apply px-1 py-4 mb-5 flex items-center;

  .option {
    @apply bg-white rounded-full shadow px-5 py-0 text-xl cursor-pointer mr-2;

    &.selected {
      @apply bg-indigo-600 text-white;
    }
  }
}

.risk-report {
  @apply fixed top-0 left-0 w-screen h-screen z-50 overflow-y-auto;
  background-color: #00000042;

  .modal {
    @apply mx-auto max-w-xl mt-6 bg-white rounded shadow;

    header {
      @apply flex justify-between items-center px-4 py-2 border-b-2 border-gray-100;
    }

    .content {
      @apply p-4 px-10 pb-10;
    }
  }

  .home-btn {
    @apply bg-indigo-600 text-xl my-5 text-white py-3 shadow font-medium px-16 rounded;
  }

  .risk-indicator {
    @apply h-40 block mx-auto my-5;
  }

  li {
    @apply flex items-start text-left justify-start mb-2;

    a {
      @apply text-black underline;
    }

    img {
      @apply h-4 mr-4 mt-2;
    }
  }
}

.wrapper {
  max-width: 80rem;
}
</style>
