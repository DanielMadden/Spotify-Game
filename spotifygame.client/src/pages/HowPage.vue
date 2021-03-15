<template>
  <div id="how" class="page d-flex justify-content-between align-items-center flex-column">
    <div class="logo-container d-flex justify-content-center align-items-center">
      <h1 class="logo" @click="travelHome()">
        Logo
      </h1>
    </div>
    <div class="content-limit d-flex justify-content-center">
      <div class="content d-flex flex-column justify-content-between">
        <h1>How To Play</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'HowPage',
  setup() {
    const router = useRouter()
    const travelHome = () => { router.push({ name: 'Home', path: '/' }) }
    return {
      travelHome
    }
  }
}
</script>
<style scoped >

</style>
