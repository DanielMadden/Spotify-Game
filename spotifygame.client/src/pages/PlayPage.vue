<template>
  <div id="home" class="page d-flex justify-content-between align-items-center flex-column">
    <div class="content d-flex flex-column justify-content-between">
      <div class="d-flex flex-column">
        <h1>
          Title:
        </h1>
        <h1>
          U _ B _ O _
        </h1><h1>
          Artist:
        </h1><h1>
          _ _ A _ T _ _ B
        </h1>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex justify-content-between">
          <input type="text" />
          <input type="text" />
        </div>
        <div class="mb-3"></div>
        <button id="button-submit" class="button-play d-flex justify-content-center align-items-center" @click="travel('how')">
          <h1>Submit</h1>
        </button>
      </div>
      <div class="d-flex justify-content-center">
        <h1 id="countdown">
          30
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Play',
  setup() {
    const router = useRouter()
    const travel = (location) => {
      router.push({ path: '/' + location })
    }
    return {
      travel
    }
  }
}
</script>

<style scoped>
@import "../assets/css/home.css";
@import "../assets/css/play.css";
</style>
