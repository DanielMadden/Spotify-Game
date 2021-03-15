<template>
  <div id="create" class="page d-flex justify-content-between align-items-center flex-column">
    <div class="logo-container d-flex justify-content-center align-items-center">
      <h1 class="logo" @click="travelHome()">
        Logo
      </h1>
    </div>
    <div class="content-limit d-flex justify-content-center">
      <div class="content d-flex flex-column justify-content-between">
        <div class="container-buttons-create d-flex flex-column">
          <!-- <div class="input-container" > -->
          <input id="input-link" type="text" placeholder="Spotify Link" />
          <!-- </div> -->
          <div class="mb-3"></div>
        </div>
        <div class="slidecontainer">
          <div class="d-flex justify-content-center">
            <h1>Break Time</h1>
          </div>
          <div id="slide-limits" class="d-flex justify-content-between">
            <span>5</span><span>20</span>
          </div>
          <input type="range"
                 min="5"
                 max="20"
                 value="10"
                 class="slider"
                 id="myRange"
          >
          <div class="d-flex">
            <span id="break-choice">10</span>&nbsp; seconds
          </div>
        </div>
        <button id="button-create" class="button-home d-flex justify-content-center align-items-center" @click="createLobby()">
          <h1>Create Lobby</h1>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const travelHome = () => { router.push({ name: 'Home', path: '/' }) }
    const createLobby = () => {
      router.push({ name: 'Wait', path: '/wait' })
    }
    onMounted(() => {
      const slider = document.getElementById('myRange')
      const output = document.getElementById('break-choice')
      output.innerHTML = slider.value // Display the default slider value
      // Update the current slider value (each time you drag the slider handle)
      slider.oninput = function() {
        output.innerHTML = this.value
      }
    })
    return {
      travelHome,
      createLobby
    }
  }
}
</script>

<style scoped>
@import "../assets/css/create.css";
@import "../assets/css/home.css";
</style>
