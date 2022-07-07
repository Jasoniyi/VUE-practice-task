<template>
    <p>First component</p>
    <button @click="btnPressed">Event Bus</button>
    <!-- <button>Event Bus</button> -->
</template>


<script>
import { EventBus } from '../eventBus'

export default {
    data() {
        return {
      headerTitle: 'Event bus close',
    };
    },

    methods: {
        btnPressed() {
            console.log('button pressed')
            EventBus.$emit('title-data', this.headerTitle )
           
        }
    }

}

</script>