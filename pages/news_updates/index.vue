<template>
  <div class="page news">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">News & Updates</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title">COVID19 Updates and Infographics</h1>
        </div>

        <div class="content py-5">
          <template v-if="fetchingPosts">
            <div
              v-for="h in placeholderHeights"
              :key="`post-placeholder-${h}`"
              :style="[{ height: h + 'rem' }]"
              class="post loading-placeholder flex flex-col"
            >
              <span class="animated-loader h-8 mb-5" />
              <span class="animated-loader flex-grow" />
            </div>
          </template>
          <template v-else>
            <div v-for="post in posts" :key="`post-${post.id}`" class="post">
              <div class="text">
                <h2
                  class="post-title"
                  @click="gotoPost(post)"
                  v-html="post.title.rendered"
                />
                <p
                  class="post-summary"
                  v-html="post.excerpt.rendered.replace('[&hellip;]', '...')"
                />
                <a
                  v-ripple
                  class="text-white bg-orange-500 px-5 py-2 rounded mt-5 mb-1 w-40 font-medium hover:bg-indigo-600 block text-center cursor-pointer"
                  @click="gotoPost(post)"
                >
                  read more
                </a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>
    <knowvid19-footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import NavBar from '~/components/layout/navbar.vue'
import Knowvid19Footer from '~/components/layout/footer.vue'

export default {
  components: {
    NavBar,
    Knowvid19Footer
  },
  data: () => ({
    fetchingPosts: true,
    posts: [],
    placeholderHeights: [8.62, 17, 4.35, 19.43, 24.55]
  }),
  mounted() {
    this.fetchPosts()
  },
  methods: {
    ...mapMutations(['setPost']),
    gotoPost(post) {
      this.setPost(post)
      this.$router.push(`/news_updates/${post.slug}`)
    },
    async fetchPosts() {
      try {
        const { data } = await this.$axios(
          'https://cors-anywhere.herokuapp.com/https://knowcovid19.hiskillsacademy.com/wp-json/wp/v2/posts/'
        )
        if (data.length) this.posts = data
      } catch (err) {
        console.log(err)
      } finally {
        this.fetchingPosts = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.news {
  @apply pt-16 mb-0;
  background: #f7f7f7;

  .dashboard {
    @apply mx-auto py-4 px-2 overflow-y-auto;
    max-width: 90rem;
    height: calc(100vh - 10rem);

    @media screen and (min-width: 1280px) {
      max-width: 100rem;
    }

    .small-title {
      @apply font-semibold text-xs uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl;
    }

    .content {
      @apply col-gap-8;
      column-width: 30rem;
      column-count: 2;
      column-break-inside: avoid;
      // display: grid;
      // grid-gap: 10px;
      // grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      // grid-auto-rows: auto;

      .post {
        @apply mb-8 bg-white w-full mx-auto rounded shadow-xs;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        .text {
          @apply py-3 px-4;
        }
        .post-title {
          @apply text-2xl mb-2 text-indigo-900 font-semibold cursor-pointer;
        }
        .post-summary {
          @apply text-base;
        }
      }
    }
  }

  main {
    @apply px-4 pb-24;
  }
}

.loading-placeholder {
  @apply py-3;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  min-height: 200px;

  .animated-loader {
    @apply mx-4;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: cover;
    min-height: 1rem;
    position: relative;
    display: block;
  }
}
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
