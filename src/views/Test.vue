<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Child :headerTitle='headerText' />
    <nav>
         <button @click="setHeader">Listen</button>
         <router-link to="/">Home</router-link> |
         <router-link to="/blogs">Blogs</router-link>
    </nav>
     <router-view/>

     <div>
          <Try />
     </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Child from '../components/child.vue'
import Try from '../components/tryOut.vue'

@Options({
  components: {
       Child,
       Try
  },

 


})
export default class Main extends Vue {

     headerText = 'this is the heading from the parent'

     setHeader(): void {
          this.headerText = 'updated heading 4rm parent'

     }

      beforeCreate(): void {
       console.log('show before create')
    }
//     created() {
//         console.log('show created')
//     }
//     beforeMount() {
//          console.log('show before mount')
//     }
//     mounted() {
//          console.log('show on mounted')
//     }
//     beforeUpdate() {
//          console.log('show before update')
//     }
//     updated() {
//          console.log('show on update')
//     }
//     beforeDestroy() {
//          console.log('show before destroy')
//     }
//     destroyed() {
//          console.log('destroyed')
//     }
}
</script>
