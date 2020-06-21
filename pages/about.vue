<template>
  <div class="page about">
    <nav-bar />
    <main>
      <div class="dashboard">
        <p class="small-title">About us</p>
        <div class="flex items-center justify-between">
          <h1 class="page-title">Knowcovid19</h1>
        </div>

        <div class="content">
          <p>
            We are the number one goto organization for quality information
            about Coronavirus in Africa. We are ensuring provision of adequate,
            relevant, reliable and relatable information about COVID-19,
            debunking fake news and providing safety, health and precautionary
            tips that could help people stay safe, informed and protected.
          </p>

          <p>
            We gather data on cases, perceptions, emotions and other relevant
            variables on the Coronavirus. We have a database of information that
            is helping researchers and scholars during and after this outbreak.
          </p>

          <p>
            We share our information through relatable graphics with pictorial
            designs that attract attention rather than boring long texts that
            get people bored.
          </p>

          <!--<p>
            The fight against COVID-19 isn't just a fight against the pandemic,
            it has been described as an infodemic war; with several anxiety
            triggering, fear inciting, and scary information being circulated.
          </p> -->

          <!-- <p>
            Despite over 80,000 recoveries being recorded globally, there is
            more focus on the deaths, and the patients health practitioners are
            unable to save. There is little information about medical testing,
            China closing its last COVID-19 hospitals, and global recoveries.
          </p> -->

          <!-- <p>
            At Know COVID-19 Nigeria, we will be giving up to date verified
            data, and information relating to the pandemic. We will be doing
            this through summary texts, info graphics, live statistics being
            updated as soon as they are confirmed by the NCDC, WHO, and other
            relevant organisations.
          </p> -->

          <!--  <p>
            This will also include a platform for people to report suspected
            cases, connect to emergency hotline in their States, locate testing
            centres, and safety tips.
          </p> -->

          <!-- <p>
            COVID-19 is neither feminist nor sexist. It does not discriminate
            based on gender, race, political affiliation, and ideologies. To
            fight this pandemic and the underlying infodemic, we need all hands
            to be on deck. Let's just keep our hands to ourselves, and use it
            for sharing (verified) information, as we will be bringing them to
            your couch through your devices.
          </p> -->

          <!-- <p>Connect with us:</p>
          <ul>
            <li>Twitter:</li>
            <li>Facebook:</li>
            <li>Twitter:</li>
            <li>Phone number:</li>
          </ul> -->
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
  @apply pt-16 px-2;

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
}
</style>
