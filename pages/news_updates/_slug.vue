<template>
  <div class="page news">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">News & Updates</p>
        <div class="flex items-center justify-start py-2 text-sm">
          <nuxt-link class="text-indigo-900 hover:text-orange-600" to="/"
            >Home</nuxt-link
          >
          <span class="mx-1">/</span>
          <nuxt-link
            class="text-indigo-900 hover:text-orange-600"
            to="/news_updates"
            >News</nuxt-link
          >
          <span class="mx-1">/</span>
          <span v-if="post" v-html="post.title.rendered" />
          <!-- <h1 class="page-title">COVID19 Updates and Infographics</h1> -->
        </div>

        <div class="content pt-5">
          <template v-if="fetchingPost">
            <div class="post loading-placeholder flex flex-col">
              <span class="animated-loader h-8 mb-3" />
              <span class="animated-loader w-2/3 h-5 mb-5" />
              <span class="animated-loader flex-grow" />
            </div>
          </template>
          <template v-else>
            <div v-if="post" class="post">
              <div class="text">
                <h2
                  v-if="post"
                  class="post-title"
                  v-html="post.title.rendered"
                />
                <p class="post-date">
                  Posted on
                  <span class="font-medium">
                    {{
                      new Intl.DateTimeFormat('en-US').format(
                        new Date(post.date)
                      )
                    }}
                  </span>
                </p>
                <div class="post-content" v-html="post.content.rendered" />
              </div>
            </div>
            <div v-if="!fetchingPost && post" class="px-4 -pt-3">
              <h4 class="text-xl font-semibold text-center mt-8">SHARE</h4>
              <div class="flex justify-center items-center share">
                <a
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  :href="`https://www.facebook.com/share.php?v=4&u=${postUrl}`"
                  class="fb"
                >
                  <img src="/images/facebook.png" alt="fb" class="icon" />
                </a>
                <a
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  :href="`https://twitter.com/home?status=${postUrl}`"
                  class="tw"
                >
                  <img src="/images/twitter.png" alt="twitter" class="icon" />
                </a>
                <!-- <a
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  class="ig"
                  :href="``"
                >
                  <img src="/images/instagram.png" alt="IG" class="icon" />
                </a> -->
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  :href="`whatsapp://send?text=${postUrl}`"
                >
                  <img src="/images/whatsapp.png" alt="whatsapp" class="icon" />
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
import NavBar from '~/components/layout/navbar.vue'
import Knowvid19Footer from '~/components/layout/footer.vue'

export default {
  components: {
    NavBar,
    Knowvid19Footer
  },
  asyncData({ params, store }) {
    const { slug } = params
    const { post } = store.state

    return {
      slug,
      post,
      fetchingPost: !post
    }
  },
  computed: {
    postUrl() {
      return window.location.href
    }
  },
  mounted() {
    if (this.fetchingPost) this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        // const url = 'https://knowcovid19.hiskillsacademy.com/'
        const url = 'https://fakenews.6starcab.com/'
        const { data } = await this.$axios(
          `https://cors-anywhere.herokuapp.com/${url}/wp-json/wp/v2/posts?slug=${this.slug}`
        )
        if (data.length) this.post = data[0]
      } catch (err) {
        console.log(err)
      } finally {
        console.log('done')
        this.fetchingPost = false
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
    @apply mx-auto pt-4 px-2 overflow-y-auto;
    max-width: 80rem;
    height: calc(100vh - 10rem);

    @media screen and (min-width: 1280px) {
      max-width: 100rem;
    }

    .small-title {
      @apply font-semibold text-base uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl capitalize;
    }

    .content {
      .post {
        @apply bg-white w-full mx-auto rounded shadow-xs;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;

        .text {
          @apply py-3 px-4;
        }
        .post-title {
          @apply text-3xl mb-1 text-indigo-900 font-semibold;
        }
        .post-date {
          @apply mb-3;
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

.share {
  @apply my-5;

  a {
    @apply mx-1 p-1 cursor-pointer;
  }
  img {
    @apply h-8 w-8;
  }
}

.loading-placeholder {
  @apply py-3;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  height: 65vh;

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
