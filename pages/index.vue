<template>
  <div class="page home">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">Dashboard</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title">COVID-19 Virus Outbreak: Nigeria</h1>
          <div
            class="data-segments-select border border-indigo-200 rounded py-1 px-4"
          >
            <select
              v-model="currentSegment"
              class="border-none bg-transparent focus:outline-none"
            >
              <option
                v-for="(segment, segmentIndex) in dataSegments"
                :key="`dashboard-datasegment-${segmentIndex}`"
                :value="segment"
                v-text="segment"
              />
            </select>
          </div>
        </div>

        <div
          class="statistics grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
        >
          <div
            class="col-span-4 grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
          >
            <template v-for="(stat, statKey) of computedMajorStats">
              <div :key="`major-dashboard-stat-${statKey}`" class="stat-box">
                <p class="stat-heading" v-text="stat.heading" />
                <p class="stat-quantity">
                  <span class="main" v-text="stat.quantity" />
                  <span class="more" v-text="stat.info" />
                </p>
              </div>
            </template>
          </div>
          <div
            class="mapbox col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 flex-grow border-2 border-indigo-100 rounded py-4 px-12"
          >
            <nigeria-map />
          </div>
          <div
            class="box risk-checker border-2 border-indigo-100 col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-1 flex flex-col"
          >
            <header class="text-center">Risk checker</header>
            <div
              class="content py-4 px-6 flex-grow flex flex-col justify-center"
            >
              <p class="text-2xl font-medium text-center mb-3">
                Check to ascertain your risk level and determine if you might
                need the helpline or not
              </p>
              <span class="font-normal italic text-center block text-sm"
                >(Will take less than 2mins)</span
              >

              <nuxt-link
                to="/risk-checker"
                tag="button"
                class="block focus:outline-none mx-auto px-10 rounded-full text-xl font-medium py-2 mt-4 bg-indigo-700 text-white"
              >
                Start
              </nuxt-link>
              <corona-checker v-if="showChecker" />
            </div>
          </div>
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2">
            <header>Cases per state</header>
            <div class="content">
              <GChart
                class="h-64"
                type="PieChart"
                :data="chartData"
                :options="chartOptions"
              />
            </div>
          </div>
          <!-- <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1">
            <header>Age and Gender Distribution</header>
            <div class="content h-64">
              chart shows here
            </div>
          </div> -->
          <div
            class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 flex flex-col items-stretch"
          >
            <div class="flex justify-between items-center">
              <header>Infection Sources</header>
              <button
                class="rounded-full mr-2 py-1 px-6 bg-orange-600 text-white"
                @click="$eventBus.$emit('report-case')"
              >
                Report now
              </button>
            </div>
            <div class="content overflow-y-auto case-source-wrapper">
              <div
                v-for="(source, sourceIndex) in infectionSources"
                :key="`dashboard-infection_source-${sourceIndex}`"
                class="case-source"
              >
                <img
                  v-if="isFlight(source)"
                  src="/images/flight.png"
                  alt="flight"
                  class="h-10 mr-2"
                />
                <img
                  v-else-if="source.bank"
                  src="/images/bank.png"
                  alt="bank"
                  class="h-10 mr-2"
                />
                <img
                  v-else
                  src="/images/meet.png"
                  alt="bank"
                  class="h-10 mr-2"
                />
                <div class="info flex">
                  <div class="flex-grow">
                    <p v-if="source.on">On {{ source.on }}</p>
                    <p>
                      <span
                        class="text-xl font-medium block"
                        v-text="source.main"
                      />
                      <span v-text="source.info" />
                    </p>
                  </div>
                  <!-- <div class="action flex items-center">
                    <button
                      v-if="source.actionText"
                      v-ripple
                      class="bg-indigo-800 text-white hover:bg-orange-600 focus:outline-none py-1 px-2 rounded"
                      v-text="source.actionText"
                    />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div
            class="case-tracking box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-3"
          >
            <header>Cases Tracking</header>
            <div class="content h-64">
              <p>
                - table showing cases, date confirmed, age and gender
              </p>
              <p>
                - more cases takes you to the case tracking page (visual
                tracking)
              </p>
            </div>
          </div>
          <div
            class="box case-clusters col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1"
          >
            <header>Cases Clusters</header>
            <div class="content h-64">
              <p>
                major source of the virus e.g mosque, church, events, flight etc
              </p>
            </div>
          </div>
          <div
            class="box covid-updates col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 relative"
          >
            <div
              class="h-12 px-3 flex items-center justify-between border-b border-indigo-100"
            >
              <span class="primary-text font-medium">Corona virus updates</span>
              <div class="border border-indigo-100 px-2 rounded">
                <select class="focus:outline-none bg-transparent border-0">
                  <option value="all">All</option>
                </select>
              </div>
            </div>
            <div class="content text-center">
              <p class="text-3xl mt-10 mb-3 font-medium">Stop the spread!</p>
              <button
                class="py-1 px-5 mb-10 bg-indigo-800 hover:bg-yellow-700 focus:outline-none text-white rounded"
              >
                Report a case
              </button>
            </div>
          </div>
          <div
            class="box action-box col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-1"
          >
            <header class="text-center">Call to action</header>
            <div class="content text-center">
              <p class="text-3xl mt-10 mb-3 font-medium">Stop the spread!</p>
              <button
                class="py-1 px-5 mb-10 bg-indigo-800 hover:bg-yellow-700 focus:outline-none text-white rounded"
              >
                Report a case
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="cases-summary">
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
        <div v-for="i in 0" :key="i" class="box">
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
        <div class="box checker">
          <header>Quick Question</header>
          <div class="content">
            <corona-checker />
          </div>
        </div>
      </div> -->
    </main>
    <knowvid19-footer />
  </div>
</template>

<script>
// import { Line } from 'vue-chartjs'
import { GChart } from 'vue-google-charts'
import NavBar from '~/components/layout/navbar.vue'
import Knowvid19Footer from '~/components/layout/footer.vue'
import CoronaChecker from '~/components/widgets/CoronaChecker.vue'
import NigeriaMap from '~/components/widgets/NigeriaMap.vue'

export default {
  components: {
    NavBar,
    Knowvid19Footer,
    GChart,
    NigeriaMap,
    CoronaChecker
  },
  data: () => ({
    showChecker: false,
    currentSegment: 'Nigeria',
    dataSegments: ['Nigeria', 'Africa', 'Worldwide'],
    majorStats: {
      total: {
        heading: 'Total Cases',
        quantity: 111,
        info: '1st case: 27/02/2020'
      },
      hospitalized: {
        heading: 'Currently Hospitalized'
      },
      deaths: {
        heading: 'Deaths',
        quantity: 1
      },
      discharged: {
        heading: 'Discharged',
        quantity: 3
      }
    },
    caseHistory: [
      {
        date: '27-02-2020',
        total: 1,
        newCases: 1,
        hospitalized: 1,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 1 }]
      },

      {
        date: '09-03-2020',
        total: 2,
        newCases: 1,
        hospitalized: 2,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 1 }, { ogun: 1 }]
      },

      {
        date: '17-03-2020',
        total: 3,
        newCases: 1,
        hospitalized: 3,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 2 }, { ogun: 1 }]
      },

      {
        date: '18-03-2020',
        total: 8,
        newCases: 5,
        hospitalized: 8,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 7 }, { ogun: 1 }]
      },

      {
        date: '19-03-2020',
        total: 12,
        newCases: 4,
        hospitalized: 12,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 11 }, { ogun: 1 }]
      },

      {
        date: '21-03-2020',
        total: 22,
        newCases: 10,
        hospitalized: 22,
        discharged: 0,
        deaths: 0,
        states: [{ lagos: 18 }, { ogun: 1 }, { FCT: 3 }]
      },

      {
        date: '22-03-2020',
        total: 25,
        newCases: 3,
        hospitalized: 25,
        discharged: 2,
        deaths: 0,
        states: [{ lagos: 19 }, { FCT: 3 }, { ogun: 2 }, { ekiti: 1 }]
      },

      {
        date: '22-03-2020',
        total: 26,
        newCases: 1,
        hospitalized: 26,
        discharged: 2,
        deaths: 0,
        states: [
          { lagos: 19 },
          { FCT: 3 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 }
        ]
      },

      {
        date: '22-03-2020',
        total: 27,
        newCases: 1,
        hospitalized: 27,
        discharged: 2,
        deaths: 0,
        states: [
          { lagos: 19 },
          { FCT: 4 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 }
        ]
      },

      {
        date: '22-03-2020',
        total: 30,
        newCases: 3,
        hospitalized: 30,
        discharged: 2,
        deaths: 0,
        states: [
          { lagos: 22 },
          { FCT: 4 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 }
        ]
      },

      {
        date: '23-03-2020',
        total: 35,
        newCases: 5,
        hospitalized: 35,
        discharged: 2,
        deaths: 0,
        states: [
          { lagos: 24 },
          { FCT: 6 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 },
          { edo: 1 }
        ]
      },

      {
        date: '23-03-2020',
        total: 36,
        newCases: 1,
        hospitalized: 36,
        discharged: 2,
        deaths: 0,
        states: [
          { lagos: 25 },
          { FCT: 6 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 },
          { edo: 1 }
        ]
      },

      {
        date: '23-03-2020',
        total: 40,
        newCases: 4,
        hospitalized: 40,
        discharged: 2,
        deaths: 1,
        states: [
          { lagos: 28 },
          { FCT: 7 },
          { ogun: 2 },
          { oyo: 1 },
          { ekiti: 1 },
          { edo: 1 }
        ]
      }
    ],
    infectionSources: [
      {
        main: "Residents of Atiku Abubakar's Estate",
        info: 'Tassle Palm'
      },
      {
        on: '20/03/2020',
        main: 'Flight BA75',
        info: 'Arrived to Lagos from UK',
        actionText: 'I was on this flight'
      },
      {
        main: 'Aero Contractor Flight',
        info: "From Lagos to Abuja with Atiku's Son or Bauchi Governor",
        on: '18/03/2020',
        actionText: 'I was on this flight'
      },
      {
        main: 'Direct or indirect contact with Bauchi State Governor',
        info:
          "Attended Press conference with Bauchi State Governor, or have been in contact with a Gov't official who has been in the same premises as the Governor"
      },
      {
        main: 'The launch of 2500 Housing units',
        info: 'Bauchi State'
      },
      {
        info:
          "NEC meeting with Bauchi State Gov't, or are in close proximity with someone who did"
      },
      {
        info:
          'You just returned from UK, FRANCE, SPAIN, NETHERLANDS, GERMANY, UAE, CANADA, USA, in the last two weeks',
        actionText: 'Yes',
        flight: true
      },
      {
        main: 'Flight TK625',
        info: 'Arrival date: 13th of march'
      },
      {
        main: 'Flight KLM 587',
        info: 'Arrival date: 18th of march'
      },
      {
        main: 'Flight KL0582/KL0587',
        info: 'London-Amsterdam-Lagos'
      },
      {
        main: 'Virgin Atlantic VS411 & Lufthansa flight LLH568',
        info: 'To Lagos',
        on: '13th of march'
      },
      {
        main: 'Turkish Flight TK 625',
        on: '14th of march'
      },
      {
        main: 'Virgin Atlantic VS411',
        flight: true
      },
      {
        main: 'BA Flight 0083',
        on: '20th of march'
      },
      {
        info:
          'Recently came into Nigeria from any country with recorded cases of COVID-19',
        flight: true
      },
      {
        main: 'Visited Access Bank, Ligalu Ayorinde Branch, Lagos',
        on: '16th of march',
        bank: true
      },
      {
        main: 'Had a contact with Alh. Aliko Dangote and Alhaji Ladan Salihu',
        info: 'Anytime from 18th March'
      }
    ],
    chartData: [
      ['State', 'cases'],
      ['Lagos', 68],
      ['FCT', 21],
      ['Ogun', 3],
      ['Enugu', 2],
      ['Ekiti', 1],
      ['Oyo', 7],
      ['Edo', 2],
      ['Bauchi', 2],
      ['Osun', 2],
      ['Rivers', 1],
      ['Benue', 1],
      ['Kaduna', 1]
    ],
    chartOptions: {
      pieHole: 0.4,
      title: 'Case per state',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017'
    }
  }),
  computed: {
    computedMajorStats() {
      const statObj = this.majorStats

      statObj.hospitalized.quantity =
        statObj.total.quantity -
        (statObj.deaths.quantity + statObj.discharged.quantity)

      statObj.hospitalized.info = `${(
        (statObj.hospitalized.quantity / statObj.total.quantity) *
        100
      ).toPrecision(2)}% of total cases`

      statObj.deaths.info = `${(
        (statObj.deaths.quantity / statObj.total.quantity) *
        100
      ).toPrecision(2)}% of total cases`

      statObj.discharged.info = `${(
        (statObj.discharged.quantity / statObj.total.quantity) *
        100
      ).toPrecision(2)}% of total cases`

      return statObj
    }
  },
  methods: {
    isFlight(source) {
      const { main, info } = source

      return (
        (main && main.toLowerCase().includes('flight')) ||
        (info && info.toLowerCase().includes('flight')) ||
        source.flight
      )
    }
  }
}
</script>

<style lang="scss">
.home {
  @apply pt-16 bg-gray-100;

  .dashboard {
    @apply mx-auto py-4;
    max-width: 85rem;

    .small-title {
      @apply font-semibold text-xs uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl capitalize;
    }

    .statistics {
      @apply grid py-4 gap-4;

      .stat-box {
        @apply border-2 border-indigo-100 rounded p-4;

        .stat-heading {
          @apply uppercase font-semibold text-sm;
        }

        .stat-quantity {
          .main {
            @apply text-5xl font-semibold;
          }
          .more {
            @apply font-normal text-sm;
          }
        }
      }
    }

    .mapbox {
      @apply pb-20;
    }

    .mapbox,
    .stat-box,
    .risk-checker {
      @apply bg-white;

      &:hover {
        @apply shadow;
      }
    }

    .case-source-wrapper {
      @apply relative flex-grow border-l-2 border-orange-400 ml-4;
      max-height: 20rem;

      // &:before {
      //   @apply h-full border-l-2 border-orange-400 absolute top-0;
      //   content: '';
      //   left: 1rem;
      // }
    }

    .case-source {
      @apply border py-1 px-2 mb-2 ml-2 relative flex items-center;

      .info {
        @apply flex-grow;
      }

      &:before {
        @apply top-0 left-0 w-3 h-3 bg-red-700 rounded-full absolute;
        content: '';
        margin-top: 1.5rem;
        margin-left: -1.3rem;
      }
    }
  }

  .case-tracking,
  .covid-updates,
  .action-box,
  .case-clusters {
    display: none;
  }

  .cases-summary {
    @apply flex p-1;

    .box {
      @apply flex-grow;

      &.checker {
        @apply max-w-md;
      }
    }
  }

  main {
    @apply px-4 pb-24;
  }
}
</style>
