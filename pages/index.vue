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
            <template v-for="(stat, statIndex) in majorStats">
              <div :key="`major-dashboard-stat-${statIndex}`" class="stat-box">
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
              <template v-if="!showChecker">
                <p class="text-2xl font-medium text-center mb-3">
                  Check to ascertain your risk level and determine if you might
                  need the helpline or not
                </p>
                <span class="font-normal italic text-center block text-sm"
                  >(Will take less than 2mins)</span
                >

                <button
                  class="block mx-auto px-10 rounded-full text-xl font-medium py-2 mt-4 bg-indigo-700 text-white"
                >
                  Start
                </button>
              </template>
              <corona-checker v-else />
            </div>
          </div>
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1">
            <header>Cases per state</header>
            <div class="content h-64">
              pie chart
            </div>
          </div>
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2">
            <header>Age and Gender Distribution</header>
            <div class="content h-64">
              chart shows here
            </div>
          </div>
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1">
            <header>Infection Sources</header>
            <div class="content h-64">
              pie chart shows here
            </div>
          </div>
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-3">
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
          <div class="box col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1">
            <header>Cases Clusters</header>
            <div class="content h-64">
              <p>
                major source of the virus e.g mosque, church, events, flight etc
              </p>
            </div>
          </div>
          <div
            class="box col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-3 relative"
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
          <div class="box col-span-4 sm:col-span-4 md:col-span-4 lg:col-span-1">
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
import NavBar from '~/components/layout/navbar.vue'
import Knowvid19Footer from '~/components/layout/footer.vue'
import CoronaChecker from '~/components/widgets/CoronaChecker.vue'
import NigeriaMap from '~/components/widgets/NigeriaMap.vue'

export default {
  components: {
    NavBar,
    Knowvid19Footer,
    NigeriaMap,
    CoronaChecker
  },
  data: () => ({
    showChecker: false,
    currentSegment: 'Nigeria',
    dataSegments: ['Nigeria', 'Africa', 'Worldwide'],
    majorStats: [
      {
        heading: 'Total Cases',
        quantity: 40,
        info: '25 in ICU'
      },
      {
        heading: 'Currently Hospitalized',
        quantity: 38,
        info: '92.6 of total cases'
      },
      {
        heading: 'Deaths',
        quantity: 1,
        info: '3% of total cases'
      },
      {
        heading: 'Discharged',
        quantity: 2,
        info: '7.4% of total cases'
      }
    ]
  })
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
