<template>
  <div class="page about">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">News & Updates</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title">COVID19 Updates and Infographics</h1>
        </div>

        <div class="content py-10">
          <div class="post">
            <div class="text">
              <h2 class="post-title">Post Title</h2>
              <p class="post-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi praesentium possimus voluptates! Consequatur,
                accusantium. Dolore tempore nulla ut nobis asperiores sit velit
                distinctio saepe architecto repellendus numquam obcaecati,
                voluptatem nam
              </p>
            </div>
          </div>
          <div class="post">
            <div class="text">
              <h2 class="post-title">Post Title</h2>
              <p class="post-summary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores perspiciatis quas autem excepturi ipsam nihil minima
                facilis et quos illo sit, odit modi accusantium repellendus
                maiores possimus. Sit, porro minima. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Iste similique quam enim, commodi
                non ipsam quia adipisci fugit architecto dolor blanditiis
                reiciendis quos placeat. Nostrum facere amet ut autem sint.
              </p>
            </div>
          </div>
          <div class="post">
            <div class="text">
              <h2 class="post-title">Post Title</h2>
              <p class="post-summary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora reiciendis aperiam ipsam saepe cumque temporibus!
                Deleniti, minima eligendi provident ducimus dolore omnis odio
                sint dolorum hic velit eos, natus perspiciatis?
              </p>
            </div>
          </div>
          <div class="post">
            <div class="text">
              <h2 class="post-title">Post Title</h2>
              <p class="post-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                eos error rem ipsum. Laboriosam, minus provident quidem
                distinctio unde delectus laborum ducimus quam libero voluptatum
                ipsam sequi nam aspernatur mollitia?
              </p>
            </div>
          </div>
          <div class="post">
            <div class="text">
              <h2 class="post-title">Post Title</h2>
              <p class="post-summary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
                soluta provident dignissimos officiis itaque minus quidem,
                numquam accusamus suscipit sapiente adipisci. Vitae officiis
                repudiandae, voluptas maiores reiciendis enim. Labore, enim.
              </p>
            </div>
          </div>
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
  }
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.about {
  @apply pt-16;
  background: #f7f7f7;

  .dashboard {
    @apply mx-auto py-4 px-2;
    max-width: 85rem;

    .small-title {
      @apply font-semibold text-xs uppercase;
    }
    .page-title {
      @apply font-semibold text-2xl capitalize;
    }

    .content {
      @apply col-gap-8;
      column-width: 16rem;
      column-count: 2;
      // display: grid;
      // grid-gap: 10px;
      // grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      // grid-auto-rows: auto;

      .post {
        @apply mb-8 bg-white w-full mx-auto;

        .text {
          @apply py-3 px-4;
        }
        .post-title {
          @apply text-2xl font-semibold;
        }
        .post-summary {
          @apply text-xl;
        }
      }
    }
  }

  main {
    @apply px-4 pb-24;
  }
}
</style>
