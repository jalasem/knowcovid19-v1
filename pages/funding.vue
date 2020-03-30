<template>
  <div class="page"></div>
</template>

<script>
export default {
  asyncData({ redirect }) {
    redirect('https://paystack.com/pay/donate4knowcovid19')
  }
}
</script>
