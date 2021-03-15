<template>
  <div id="home" class="page d-flex justify-content-between align-items-center flex-column">
    <div class="logo-container d-flex justify-content-center align-items-center">
      <h1 class="logo">
        Logo
      </h1>
    </div>
    <div class="content-limit d-flex justify-content-center">
      <div class="content d-flex flex-column justify-content-between">
        <div class="container-buttons-home d-flex flex-column">
          <!-- <div class="input-container" > -->
          <input id="input-code" type="text" placeholder="Enter Code" />
          <!-- </div> -->
          <div class="mb-3"></div>
          <button id="button-join" class="button-home d-flex justify-content-center align-items-center">
            <h1>Join Lobby</h1>
          </button>
        </div>
        <button id="button-create" class="button-home d-flex justify-content-center align-items-center" @click="travel('create')">
          <h1>Create Lobby</h1>
        </button>
        <div class="container-buttons-home d-flex flex-column">
          <button id="button-how" class="button-home d-flex justify-content-center align-items-center">
            <h1>How To Play</h1>
          </button>
          <div class="mb-3"></div>
          <button id="button-about" class="button-home d-flex justify-content-center align-items-center">
            <h1>About</h1>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
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
</style>
