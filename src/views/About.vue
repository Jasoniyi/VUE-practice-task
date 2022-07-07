<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p> shows how event emit works</p>
    <div class="about-wrapper">
      <div class="">
        <FirstEmitter />
      </div>
      <div class="">
        <!-- <SecondEmitter /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FirstEmitter from '../components/FirstEmitter.vue'
import SecondEmitter from '../components/SecondEmitter.vue'

@Options({
  components: {
    FirstEmitter,
    SecondEmitter
  },
})
export default class About extends Vue {}
</script>

<style>

.about-wrapper {
  display: flex;
  justify-content: space-around;
}

</style>