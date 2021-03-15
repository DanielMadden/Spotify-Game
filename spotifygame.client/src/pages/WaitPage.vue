<template>
  <div id="how" class="page d-flex justify-content-between align-items-center flex-column">
    <div class="logo-container d-flex justify-content-center align-items-center">
      <h1 class="logo" @click="travelHome()">
        Logo
      </h1>
    </div>
    <div class="content-limit d-flex justify-content-center">
      <div class="content d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-center">
          <h1>C0D3</h1>
          Share this code with your friends!
        </div>
        <div class="d-flex flex-column align-items-center">
          https://awodaouwdhaouwdaowu0812eh9uadiwdha08wdawid
          <button id="button-copy" class="button-wait d-flex justify-content-center align-items-center" @click=";">
            <h1>Copy Link</h1>
          </button>
        </div>
        <button id="button-start" class="button-wait d-flex justify-content-center align-items-center" @click="startGame()">
          <h1>Start Game</h1>
        </button>
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
    const startGame = () => { router.push({ name: 'Play', path: '/play' }) }
    return {
      travelHome,
      startGame
    }
  }
}
</script>
<style scoped >
@import "../assets/css/wait.css";
</style>
